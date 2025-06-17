import HeroSection from "@/components/home/hero-section";
import FeatureHighlight from "@/components/home/feature-highlight";
import HowItWorksSection from "@/components/home/how-it-works-section";

export default async function Home() {
  return (
    <main>
      <div className="flex flex-col gap-12 text-center items-center justify-center">
        <HeroSection />
        <FeatureHighlight />
        <HowItWorksSection />
      </div>
    </main>
  );
}
