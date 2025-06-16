"use client";

import { Folder } from "lucide-react";
import FolderCard from "./folder-card";
import { Folder as FolderType } from "@/lib/types";
import { getFoldersSync } from "@/app/actions/core-action";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { getFolders } from "@/app/actions/folders";

type FolderData = Omit<FolderType, "user_id">;

export default function FolderTable() {
  const [folders, setFolders] = useState<FolderData[]>([]);
  const supabase = createClient();

  useEffect(() => {
    const fetchFolders = async () => {
      const folders = await getFoldersSync();
      setFolders(folders);
    };

    fetchFolders();

    const channel = supabase
      .channel("realtime-folders")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "folders",
        },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setFolders((prevFolders) => [
              ...prevFolders,
              payload.new as FolderType,
            ]);
          } else if (payload.eventType === "UPDATE") {
            setFolders((prevFolders) =>
              prevFolders.map((folder) =>
                folder.id === payload.new.id
                  ? (payload.new as FolderType)
                  : folder
              )
            );
          } else if (payload.eventType === "DELETE") {
            setFolders((prevFolders) =>
              prevFolders.filter((folder) => folder.id !== payload.old.id)
            );
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex items-center gap-2 mb-4">
        <Folder className="h-5 w-5 text-blue-600" />
        <h2 className="text-xl font-semibold">Your Folders</h2>
        <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
          {folders.length} folders
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {folders.map((folder) => (
          <FolderCard key={folder.id} folder={folder} />
        ))}
      </div>
    </div>
  );
}
