import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <main className="container px-4 py-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get Organized in Minutes</h2>
        <p className="text-muted-foreground mb-8">
          Connect your email, create folders, and let Sortify do the rest.
          It&apos;s that simple.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-2">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold">
              1
            </div>
            <h3 className="font-semibold">Connect Email</h3>
            <p className="text-sm text-muted-foreground">
              Link your email account securely using the provider authentication
              method.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold">
              2
            </div>
            <h3 className="font-semibold">Create Folders</h3>
            <p className="text-sm text-muted-foreground">
              Set up custom folders with descriptions.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold">
              3
            </div>
            <h3 className="font-semibold">Auto-Sort</h3>
            <p className="text-sm text-muted-foreground">
              Click one button to organize your inbox.
            </p>
          </div>
        </div>

        <Button asChild>
          <Link href="/how-it-works">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </main>
  );
}
