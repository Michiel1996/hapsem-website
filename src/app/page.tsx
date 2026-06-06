import { HeroSection } from "@/components/home/HeroSection";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { DoctorsPreview } from "@/components/home/DoctorsPreview";
import { OpeningHours } from "@/components/home/OpeningHours";
import { QuickContact } from "@/components/home/QuickContact";
import { LocationMap } from "@/components/home/LocationMap";
import { CTABanner } from "@/components/shared/CTABanner";

/**
 * Homepagina — eerste pagina die bezoekers zien.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <ServicesOverview />
      <DoctorsPreview />
      <OpeningHours />
      <QuickContact />
      <LocationMap />
      <CTABanner />
    </>
  );
}
