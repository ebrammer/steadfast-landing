import FeaturesSection from "@/components/features-section";
import HeroGraphicSection from "@/components/hero-graphic-section";
import HeroSection from "@/components/hero-section";
import Topbar from "@/components/topbar";
import FooterSection from "@/components/footer-section";
import SteadfastV2Page from "@/components/landing-v2/steadfast-v2-page";

export default function Home() {
  if (process.env.NEXT_PUBLIC_LANDING_VERSION !== "v1") {
    return <SteadfastV2Page />;
  }

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Topbar />
      <main className="flex flex-col">
        <HeroSection />
        <HeroGraphicSection />
        <FeaturesSection />
      </main>
      <FooterSection />
    </div>
  );
}
