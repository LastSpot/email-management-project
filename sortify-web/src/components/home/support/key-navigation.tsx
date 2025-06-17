import { Button } from "@/components/ui/button";
import Link from "next/link";

import { MailOpen, CircleHelp } from "lucide-react";

export default function KeyNavigation() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Button variant="outline" className="border-2 border-black/40" asChild>
        <Link href="/contact">
          <MailOpen className="w-8 h-8 mr-2" />
          Contact or Report a Bug
        </Link>
      </Button>
      <Button variant="outline" className="border-2 border-black/40" asChild>
        <Link href="/how-it-works">
          <CircleHelp className="w-8 h-8 mr-2" />
          How it works
        </Link>
      </Button>
    </div>
  );
}
