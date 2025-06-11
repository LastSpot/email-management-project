import { Navigation } from "@/components/home/navigation";
import { Footer } from "@/components/home/footer";

export default async function Home() {
  return (
    <main>
      {/* Navigation */}
      <Navigation />
      <div className="flex flex-col gap-12 text-center items-center justify-center">
        <div>Hero</div>
        <div>Put content here</div>
        <div>Features</div>
        <div>How It Works</div>
        <div>About Us</div>
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
}
