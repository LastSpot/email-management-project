"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { googleSignin } from "@/utils/auth";
import { useRouter } from "next/navigation";

export default function ProviderAuth() {
  const router = useRouter();

  const handleGoogleSignin = async () => {
    await googleSignin();
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
        <span className="bg-background text-muted-foreground relative z-10 px-2">
          Or continue with
        </span>
      </div>
      <div className="flex gap-4 sm:grid-cols-2">
        {/* Microsoft */}
        {/* <Button variant="outline" type="button" className="w-full">
          <Image
            src="/icons/microsoft-icon.svg"
            alt="Microsoft Icon"
            width={24}
            height={24}
          />
          Continue with Microsoft
        </Button> */}
        {/* Google */}
        <Button
          variant="outline"
          type="button"
          className="w-full cursor-pointer"
          onClick={handleGoogleSignin}
        >
          <Image
            src="/icons/google-icon.svg"
            alt="Google Icon"
            width={24}
            height={24}
          />
          Continue with Google
        </Button>
      </div>
    </div>
  );
}
