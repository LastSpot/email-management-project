import { Metadata } from "next";
import KeyNavigation from "@/components/home/support/key-navigation";
import FlowGuide from "@/components/home/support/flow-guide";

export const metadata: Metadata = {
  title: "Support",
  description: "Support for Sortify",
};

export default function SupportPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-4xl font-bold">Need help with Sortify?</h1>
      <p className="text-[#49739c] text-sm font-normal leading-normal">
        Welcome to the Sortify support page. Here you&apos;ll find resources to
        help you understand how Sortify works.
      </p>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Key Navigation</h1>
        <KeyNavigation />
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-bold">Sortify Flow Guide</div>
        <div className="text-sm font-normal leading-normal">
          Sortify is a tool that helps you sort your emails.
        </div>
        <FlowGuide />
      </div>
      <h1 className="text-2xl font-bold">For more information</h1>
      <p className="text-sm font-normal leading-normal">
        For more information, please contact us at, use the contact page
        provided in the footer to get in touch.
      </p>
    </main>
  );
}
