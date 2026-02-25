import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { SocialProof } from "@/components/sections/social-proof";
import { FeatureOverview } from "@/components/sections/feature-overview";
import { FeatureDeepDive } from "@/components/sections/feature-deep-dive";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Benefits } from "@/components/sections/benefits";
import { ProductPreview } from "@/components/sections/product-preview";
import { CreatorPreview } from "@/components/sections/creator-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { UseCases } from "@/components/sections/use-cases";
import { Comparison } from "@/components/sections/comparison";
import { Integrations } from "@/components/sections/integrations";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { Newsletter } from "@/components/sections/newsletter";
import { FloatingCTA } from "@/components/ui/floating-cta";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { ExitIntentModal } from "@/components/ui/exit-intent-modal";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <TrustedBy />
      <SocialProof />
      <FeatureOverview />
      <FeatureDeepDive />
      <HowItWorks />
      <Benefits />
      <ProductPreview />
      <CreatorPreview />
      <Testimonials />
      <UseCases />
      <Comparison />
      <Integrations />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Newsletter />
      <FloatingCTA />
      <CookieConsent />
      <ExitIntentModal />
      <BackToTop />
    </>
  );
}
