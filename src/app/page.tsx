import { DomesSection } from "@/components/home/DomesSection";
import { ExperiencesSection } from "@/components/home/ExperiencesSection";
import { HomeCTA } from "@/components/home/HomeCTA";
import { HomeHero } from "@/components/home/HomeHero";
import { IntroSection } from "@/components/home/IntroSection";
import { LocationSection } from "@/components/home/LocationSection";
import { MonteverdeSection } from "@/components/home/MonteverdeSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { StayInfoSection } from "@/components/home/StayInfoSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <IntroSection />
      <DomesSection />
      <MonteverdeSection />
      <ExperiencesSection />
      <ReviewsSection />
      <LocationSection />
      <StayInfoSection />
      <HomeCTA />
    </>
  );
}
