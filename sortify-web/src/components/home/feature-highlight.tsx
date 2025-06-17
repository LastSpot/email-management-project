import { FolderOpen, Shield, Zap } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FeatureHighlight() {
  return (
    <main className="container px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose Sortify?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Powerful features designed to make email management effortless and
          secure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="text-start border-black/40 border-2">
          <CardHeader>
            <Zap className="h-10 w-10 mb-2" />
            <CardTitle>AI-Powered Sorting</CardTitle>
            <CardDescription>
              Advanced large language models automatically categorize your
              emails with incredible accuracy. They actually read and understand
              the content of your emails.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-start border-black/40 border-2">
          <CardHeader>
            <FolderOpen className="h-10 w-10 mb-2" />
            <CardTitle>Smart Folder System</CardTitle>
            <CardDescription>
              Create custom folders with descriptions. Be in control of your
              inbox. No more blackbox AI systems where you don&apos;t know what
              is happening.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-start border-black/40 border-2">
          <CardHeader>
            <Shield className="h-10 w-10 mb-2" />
            <CardTitle>Privacy & Control</CardTitle>
            <CardDescription>
              Your emails stay secure. We don&apos;t store your emails or any
              sensitive data. We don&apos;t use your emails for any purpose
              other than to organize them.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </main>
  );
}
