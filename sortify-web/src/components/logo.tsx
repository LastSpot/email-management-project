import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-1 items-center gap-2">
      <Image src="/icons/sortify.png" alt="Logo" width={32} height={32} />
      <span className="text-2xl font-bold">Sortify</span>
    </div>
  );
}
