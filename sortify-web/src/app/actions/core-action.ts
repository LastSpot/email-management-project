"use server";

import {
  createFolder,
  updateFolder,
  deleteFolder,
  getFolders,
} from "@/app/actions/folders";
import {
  createLabel,
  updateGmailLabel,
  deleteGmailLabel,
  getLabels,
  addLabelToEmail,
  getUnreadEmails,
} from "@/app/actions/gmail";
import { Folder } from "@/lib/types";
import { capitalizeFirst } from "@/utils/helper";
import { createClient } from "@/lib/supabase/server";
import { emailClassifications } from "@/lib/llm/gemini";

export async function getFoldersSync() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user?.id) {
    throw new Error("Please login to get folders");
  }

  const folders = await getFolders();
  const labels = await getLabels();

  // Update labels for folders that exist and create folders that don't exist
  for (const label of labels) {
    const labelName = label.name?.split("-");
    const updateFolderName = labelName?.slice(1).join("-");

    // Update labels for folders that exist
    for (const folder of folders) {
      if (folder.provider_folder_id === label.id) {
        await updateFolder({
          id: folder.id,
          name: updateFolderName ?? "",
          description: folder.description,
          provider_folder_id: label.id ?? "",
        });
      }
    }
    // Create folders that don't exist in the database
    if (
      labelName &&
      !folders.some((folder) => folder.name === labelName) &&
      !folders.some((folder) => folder.provider_folder_id === label.id)
    ) {
      await createFolder({
        name: updateFolderName ?? "",
        description: "",
        provider_folder_id: label.id ?? "",
        user_id: user.id,
      });
    }
  }

  return await getFolders();
}

export async function createFolderSync(
  folder: Omit<Folder, "id" | "provider_folder_id">
) {
  const existingFolder = await getFolders();
  const duplicate = existingFolder.some(
    (f) => f.name.toLowerCase() === folder.name.toLowerCase()
  );
  if (duplicate) {
    throw new Error("A folder with this name already exists");
  }

  const provider_folder_id = await createLabel(capitalizeFirst(folder.name));
  if (provider_folder_id) {
    await createFolder({ ...folder, provider_folder_id });
  }
}

export async function updateFolderSync(folder: Omit<Folder, "user_id">) {
  try {
    await updateGmailLabel(folder.provider_folder_id, folder.name);
    await updateFolder(folder);
  } catch (error) {
    await deleteFolder(folder.id);
    throw error instanceof Error ? error.message : "Failed to update folder";
  }
}

export async function deleteFolderSync(
  folder: Omit<Folder, "user_id" | "name" | "description">
) {
  await deleteFolder(folder.id);
  await deleteGmailLabel(folder.provider_folder_id);
}

export async function classifyUnreadEmails() {
  const emails = await getUnreadEmails();
  const folders = await getFolders();

  await Promise.all(
    emails.map(async (email) => {
      const sorted = await emailClassifications({ email, folders });
      if (sorted) {
        for (const folder of sorted) {
          if (folder.compatibility > 85) {
            await addLabelToEmail(folder.folderId, email.id);
          }
        }
      }
    })
  );
}
