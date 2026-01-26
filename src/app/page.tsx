import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import OverviewBackgroundSection from "@/components/overview-background-section";
import PreviewStripSection from "@/components/preview-strip-section";
import Topbar from "@/components/topbar";
import FooterSection from "@/components/footer-section";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Topbar />
      <main className="flex flex-col">
        <HeroSection />
        <PreviewStripSection />
        <OverviewBackgroundSection />
        <FeaturesSection />
      </main>
      <FooterSection />
    </div>
  );
}
