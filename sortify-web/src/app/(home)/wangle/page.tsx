import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sortify | Wangle",
  description: "Wangle for life",
};

export default function WanglePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image src="/icons/eira.svg" alt="Sortify" width={512} height={512} />
      <div className="flex flex-row gap-3">
        <h1 className="text-4xl font-bold motion-safe:animate-spin">Eira</h1>
        <h1 className="text-4xl font-bold animate-bounce">Wangle</h1>
      </div>
    </div>
  );
}
