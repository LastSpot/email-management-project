import { Metadata } from "next";
import { fetchLatestGmailMessages } from "@/lib/email/gmail";
import EmailTable from "@/components/inbox/email-table";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata: Metadata = {
  title: "Name | Inbox",
  description: "Inbox",
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
  const emails = await fetchLatestGmailMessages();
  return (
    <div>
      <ScrollArea>
        <EmailTable emails={emails} />
      </ScrollArea>
    </div>
  );
}
