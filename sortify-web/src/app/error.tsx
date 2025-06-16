"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8 max-w-md mx-auto">
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Error
      </h1>
      <p className="mt-4 text-muted-foreground">
        We&apos;re sorry, but an unexpected error has occurred. Please try again
        later or contact support if the issue persists.
      </p>
      <Link href="/" className="mt-4">
        <Button className="cursor-pointer">Go to Homepage</Button>
      </Link>
    </div>
  );
}
