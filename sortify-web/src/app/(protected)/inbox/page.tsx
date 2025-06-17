import { Metadata } from "next";
import CreateFolder from "@/components/protected/inbox/create-folder";
import FolderTable from "@/components/protected/inbox/folder-table";
import ScanEmail from "@/components/protected/inbox/scan-email";

export const metadata: Metadata = {
  title: "Inbox",
  description: "Inbox for Sortify",
};

export type Email = {
  id: string;
  threadId: string;
  labels: string[];
  from: string;
  snippet: string;
  subject: string;
};

export default async function InboxPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <CreateFolder />
      <FolderTable />
      <ScanEmail />
    </div>
  );
}
