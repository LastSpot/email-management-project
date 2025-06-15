"use server";

import { getUnreadEmails, addLabelToEmail } from "./gmail";
import { getFoldersToScan } from "./folders";
import { sortSingleEmail } from "@/lib/llm/gemini";

export async function sortEmails() {
  const emails = await getUnreadEmails();
  const folders = await getFoldersToScan();

  await Promise.all(
    emails.map(async (email) => {
      const sorted = await sortSingleEmail({ email, folders });
      if (sorted) {
        for (const folder of sorted) {
          if (folder.compatibility > 80) {
            await addLabelToEmail(folder.folderId, email.id);
          }
        }
      }
    })
  );
}
