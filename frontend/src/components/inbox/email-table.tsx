import EmailCard from "./email-card";
import { Email } from "@/app/(protected)/inbox/page";

type EmailTableProps = {
  emails: Email[];
};

export default function EmailTable({ emails }: EmailTableProps) {
  return (
    <div className="flex flex-col gap-y-2">
      {emails.map((email) => (
        <EmailCard key={email.id} email={email} />
      ))}
    </div>
  );
}
