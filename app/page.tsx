import {
  CtaSection,
  FaqSection,
  FeaturesSection,
  HeroSection,
  HowItWorksSection,
  PricingSection,
  SiteFooter,
  TopNav,
  UseCasesSection,
} from "@/components/landing";

export default function Home() {
  return (
    <>
      <TopNav />
      <main className="pt-24">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <UseCasesSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
