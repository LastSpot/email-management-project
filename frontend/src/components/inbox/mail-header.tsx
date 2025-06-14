"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import MarkAsUnreadButton from "./mark-as-unread-button";

export default function MailHeader({ id }: { id: string }) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Back</span>
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <MarkAsUnreadButton id={id} />
        {/* Add more action buttons here in the future */}
      </div>
    </div>
  );
}
