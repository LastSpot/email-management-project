"use client";

import { markAsUnread } from "@/lib/email/gmail";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function MarkAsUnreadButton({ id }: { id: string }) {
  const handleMarkAsUnread = async () => {
    try {
      await markAsUnread(id);
      // Optionally, you can redirect the user or show a toast notification
      alert("Email marked as unread.");
    } catch (error) {
      console.error(error);
      alert("Failed to mark email as unread.");
    }
  };

  return (
    <Button variant="outline" onClick={handleMarkAsUnread}>
      <Mail className="mr-2 h-4 w-4" />
      Mark as Unread
    </Button>
  );
}
