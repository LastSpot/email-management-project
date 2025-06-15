"use server";

import { createClient } from "@/lib/supabase/server";
import {
  createLabel,
  updateGmailLabel,
  deleteGmailLabel,
} from "@/app/actions/gmail";

export async function getFolders() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("folders")
    .select("id, name, description, provider_folder_id")
    .order("name", { ascending: true });
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}

export async function createFolder(folder: {
  name: string;
  description: string;
}) {
  const supabase = await createClient();
  const user = await supabase.auth.getUser();
  const provider_folder_id = await createLabel(folder.name);

  const data = {
    ...folder,
    user_id: user.data.user?.id,
    provider_folder_id,
  };
  const { error } = await supabase.from("folders").insert(data);
  if (error) {
    console.error(error);
  }
}

export async function updateFolder(folder: {
  id: number;
  name: string;
  description: string;
  provider_folder_id: string;
}) {
  await updateGmailLabel(folder.provider_folder_id, folder.name);

  const supabase = await createClient();
  const { error } = await supabase
    .from("folders")
    .update(folder)
    .eq("id", folder.id);
  if (error) {
    console.error(error);
  }
}

export async function deleteFolder(id: number, provider_folder_id: string) {
  await deleteGmailLabel(provider_folder_id);

  const supabase = await createClient();
  const response = await supabase.from("folders").delete().eq("id", id);
  if (response.error) {
    console.error(response.error);
  }
  console.log(response);
}

export async function getFoldersToScan() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("folders")
    .select("name, description, provider_folder_id");
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}
