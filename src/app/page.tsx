import { DomesSection } from "@/components/home/DomesSection";
import { HomeCTA } from "@/components/home/HomeCTA";
import { HomeHero } from "@/components/home/HomeHero";
import { IntroSection } from "@/components/home/IntroSection";
import { LocationSection } from "@/components/home/LocationSection";
import { MonteverdeSection } from "@/components/home/MonteverdeSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <IntroSection />
      <DomesSection />
      <MonteverdeSection />
      <ReviewsSection />
      <LocationSection />
      <FaqSection />
      <HomeCTA />
    </>
  );
}
