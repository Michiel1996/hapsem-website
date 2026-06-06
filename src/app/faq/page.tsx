import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { FAQ_ITEMS } from "@/lib/faq-data";
import { CTABanner } from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description: "FAQ voor patiënten van Huisartsenpraktijk Semmerzake (HAPSEM).",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        title="Veelgestelde vragen"
        subtitle="Antwoorden op de meest gestelde vragen van onze patiënten."
      />

      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      <CTABanner
        title="Staat uw vraag er niet bij?"
        description="Bel ons op 09 384 48 70 of maak online een afspraak via Medici."
      />
    </>
  );
}
