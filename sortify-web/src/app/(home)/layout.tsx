import { Navigation } from "@/components/home/navigation";
import { Footer } from "@/components/home/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sortify",
  description: "Sortify",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navigation />
      {children}
      <Footer />
    </main>
  );
}
