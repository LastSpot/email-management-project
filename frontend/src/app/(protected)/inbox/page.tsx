import { InboxSidebar } from "@/components/inbox/inbox-sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Name | Inbox",
  description: "Inbox",
};

export default async function DashboardPage() {
  return (
    <div className="flex flex-col gap-12 text-center items-center justify-center">
      <div>Inbox</div>
    </div>
  );
}
