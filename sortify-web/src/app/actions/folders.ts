"use server";

import { createClient } from "@/lib/supabase/server";
import { Folder } from "@/lib/types";
import { capitalizeFirst } from "@/utils/helper";

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

export async function createFolder(folder: Omit<Folder, "id">) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("folders")
    .insert({ ...folder, name: capitalizeFirst(folder.name) });
  if (error) {
    console.error(error);
  }
}

export async function updateFolder(folder: Omit<Folder, "user_id">) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("folders")
    .update({ ...folder, name: capitalizeFirst(folder.name) })
    .eq("id", folder.id);
  if (error) {
    console.error(error);
  }
}

export async function deleteFolder(id: number) {
  const supabase = await createClient();
  const response = await supabase.from("folders").delete().eq("id", id);
  if (response.error) {
    console.error(response.error);
  }
}
