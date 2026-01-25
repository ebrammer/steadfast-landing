import CallToActionSection from "@/components/call-to-action-section";
import FooterSection from "@/components/footer-section";
import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import OverviewBackgroundSection from "@/components/overview-background-section";
import PracticeSection from "@/components/practice-section";
import PreviewStripSection from "@/components/preview-strip-section";
import ScriptureSection from "@/components/scripture-section";
import TestimonialsSection from "@/components/testimonials-section";
import TheologicalOrientationSection from "@/components/theological-orientation-section";
import Topbar from "@/components/topbar";
import WhatSteadfastIsSection from "@/components/what-steadfast-is-section";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Topbar />
      <main className="flex flex-col">
        <HeroSection />
        <PreviewStripSection />
        <OverviewBackgroundSection />
        <WhatSteadfastIsSection />
        <FeaturesSection />
        <ScriptureSection />
        <TheologicalOrientationSection />
        <PracticeSection />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
      <FooterSection />
    </div>
  );
}
