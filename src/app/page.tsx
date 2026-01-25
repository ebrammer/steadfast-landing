import CallToActionSection from "@/components/call-to-action-section";
import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import ScriptureSection from "@/components/scripture-section";
import TheologicalOrientationSection from "@/components/theological-orientation-section";
import WhatSteadfastIsSection from "@/components/what-steadfast-is-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="flex flex-col">
        <HeroSection />
        <WhatSteadfastIsSection />
        <FeaturesSection />
        <ScriptureSection />
        <TheologicalOrientationSection />
        <CallToActionSection />
      </main>
    </div>
  );
}
