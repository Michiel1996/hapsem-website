import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { FAQ_ITEMS } from "@/lib/faq-data";
import { CTABanner } from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description:
    "Antwoorden op veelgestelde vragen: afspraak maken, nieuwe patiënten, voorschriften, huisbezoeken, wachtdienst en laboresultaten. Huisartsenpraktijk Semmerzake (HAPSEM), Gavere.",
};

/** FAQPage structured data — maakt de vragen zichtbaar voor Google rich results */
function FaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function FAQPage() {
  return (
    <>
      <FaqJsonLd />
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
