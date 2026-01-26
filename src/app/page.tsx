import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import Topbar from "@/components/topbar";
import FooterSection from "@/components/footer-section";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Topbar />
      <main className="flex flex-col">
        <HeroSection />
        <FeaturesSection />
      </main>
      <FooterSection />
    </div>
  );
}
