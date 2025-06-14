import React from "react";
import { Email } from "@/app/(protected)/inbox/page";
import he from "he";
import Link from "next/link";

export default function EmailCard({ email }: { email: Email }) {
  const isUnread = email.labels?.includes("UNREAD");
  return (
    <Link href={`/inbox/mail/${email.id}`}>
      <div className="p-4 border-b cursor-pointer flex flex-col">
        <div className="font-semibold text-sm mb-1">{email.from}</div>
        <div className="flex items-center mb-1">
          {isUnread && (
            <span
              className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"
              aria-label="Unread"
            />
          )}
          <span className="font-medium text-base">{email.subject}</span>
        </div>
        <div className="text-sm truncate">{he.decode(email.snippet)}</div>
      </div>
    </Link>
  );
}
