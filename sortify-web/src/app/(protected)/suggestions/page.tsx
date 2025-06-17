import { Metadata } from "next";
import SuggestForm from "@/components/protected/suggestions/suggest-form";
import { getCurrentUser } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Suggestions",
  description: "Suggestions for Sortify",
};

export default async function SuggestionsPage() {
  const user = await getCurrentUser();
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <SuggestForm name={user?.name} email={user?.email} />
    </div>
  );
}
