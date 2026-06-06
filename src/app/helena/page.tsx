import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { HELENA_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/shared/CTABanner";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Helena laboresultaten",
  description:
    "Bekijk uw laboratoriumresultaten veilig online via Helena — Huisartsenpraktijk Semmerzake.",
};

export default function HelenaPage() {
  return (
    <>
      <PageHero
        title="Helena laboresultaten"
        subtitle="Uw laboratoriumresultaten veilig en digitaal beschikbaar."
      />

      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl card-premium text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-medical-100 text-medical-600">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-medical-900">
                Laboresultaten via Helena
              </h2>
              <p className="mt-4 text-medical-600 leading-relaxed">
                Laboresultaten worden zoveel mogelijk via de webapplicatie{" "}
                <strong>Helena</strong> meegedeeld. Helena is het beveiligde platform
                waarmee u als patiënt uw medische gegevens en laboratoriumresultaten kunt
                raadplegen.
              </p>
              <p className="mt-4 text-medical-600 leading-relaxed">
                Heeft u problemen met het openen van uw resultaten? Neem contact op met de
                praktijk — wij helpen u graag verder.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button href={HELENA_URL} external size="lg">
                  Open Helena
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Contact praktijk
                </Button>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="mt-12 grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {[
              {
                title: "Veilig",
                text: "Uw gegevens zijn beveiligd en alleen toegankelijk voor u en uw zorgverleners.",
              },
              {
                title: "Snel",
                text: "Resultaten verschijnen zodra ze beschikbaar zijn — zonder extra bezoek.",
              },
              {
                title: "Overzichtelijk",
                text: "Al uw laboresultaten op één plek, overzichtelijk weergegeven.",
              },
            ].map((item, index) => (
              <AnimateOnScroll key={item.title} delay={index * 80}>
                <div className="card-premium text-center h-full">
                  <h3 className="font-semibold text-medical-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-medical-600">{item.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Vragen over uw resultaten?"
        description="Bel 09 384 48 70 of maak een afspraak voor overleg met uw huisarts."
      />
    </>
  );
}
