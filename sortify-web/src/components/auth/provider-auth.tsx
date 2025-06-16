"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { googleSignin } from "@/utils/auth";

export default function ProviderAuth() {
  const handleGoogleSignin = async () => {
    await googleSignin();
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Google */}
      <Button
        variant="outline"
        type="button"
        className="w-full hover:bg-black hover:text-white cursor-pointer"
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
  );
}
