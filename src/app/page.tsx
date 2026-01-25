import CallToActionSection from "@/components/call-to-action-section";
import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import TheologicalOrientationSection from "@/components/theological-orientation-section";
import WhatSteadfastIsSection from "@/components/what-steadfast-is-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="flex flex-col">
        <HeroSection />
        <WhatSteadfastIsSection />
        <FeaturesSection />
        <TheologicalOrientationSection />
        <CallToActionSection />
      </main>
    </div>
  );
}
