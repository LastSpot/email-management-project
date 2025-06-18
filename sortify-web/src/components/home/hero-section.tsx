import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { FolderOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <main className="container px-4 py-8">
      <div className="flex flex-col items-center text-center justify-center space-y-8">
        <div className="space-y-4 max-w-3xl">
          <Badge className="text-lg animate-pulse">
            Closed Beta - Request for access
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Organize Your Inbox Automatically
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Stop drowning in emails. Sortify uses the latest large language
            models to organize your inbox, so you can focus on what matters
            most.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link href="/auth">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/how-it-works">See How It Works</Link>
          </Button>
        </div>

        {/* Visual Mockup Placeholder */}
        <div className="w-full max-w-4xl mt-12">
          <div className="relative rounded-lg p-8 border-3 border-black/60">
            <div className="flex items-center space-x-2 mb-4">
              <Mail className="h-5 w-5 text-primary" />
              <span className="font-medium">Your Organized Inbox</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 border-black/40 rounded border">
                <FolderOpen className="h-4 w-4 text-primary" />
                <span className="text-sm">Work Projects (12 emails)</span>
              </div>
              <div className="flex items-center space-x-3 p-3 border-black/40 rounded border">
                <FolderOpen className="h-4 w-4 text-primary" />
                <span className="text-sm">Personal (5 emails)</span>
              </div>
              <div className="flex items-center space-x-3 p-3 border-black/40 rounded border">
                <FolderOpen className="h-4 w-4 text-primary" />
                <span className="text-sm">Newsletters (8 emails)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
