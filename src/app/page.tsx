import CallToActionSection from "@/components/call-to-action-section";
import FooterSection from "@/components/footer-section";
import GallerySection from "@/components/gallery-section";
import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import NewsletterSection from "@/components/newsletter-section";
import OverviewBackgroundSection from "@/components/overview-background-section";
import PreviewStripSection from "@/components/preview-strip-section";
import SecondaryFeatureSection from "@/components/secondary-feature-section";
import SocialProofSection from "@/components/social-proof-section";
import TestimonialsSection from "@/components/testimonials-section";
import Topbar from "@/components/topbar";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Topbar />
      <main className="flex flex-col">
        <HeroSection />
        <PreviewStripSection />
        <OverviewBackgroundSection />
        <FeaturesSection />
        <SecondaryFeatureSection />
        <SocialProofSection />
        <GallerySection />
        <TestimonialsSection />
        <CallToActionSection />
        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  );
}
