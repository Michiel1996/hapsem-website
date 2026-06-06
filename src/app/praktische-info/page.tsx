import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { InfoCard } from "@/components/shared/InfoCard";
import { CTABanner } from "@/components/shared/CTABanner";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { AppointmentButton } from "@/components/ui/AppointmentButton";
import { PRACTICE, RELOCATION } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Praktische info",
  description:
    "Betalingen, voorschriften, huisbezoeken, spoedgevallen, GMD en tarieven. Praktijklocatie Dorpstraat 60, Semmerzake vanaf oktober 2026.",
};

export default function PraktischeInfoPage() {
  return (
    <>
      <PageHero
        title="Praktische info"
        subtitle="Alles wat u moet weten voor uw bezoek aan de praktijk."
      />

      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <AnimateOnScroll>
            <div className="mb-10 rounded-2xl border border-amber-200 bg-amber-50/70 p-6 text-medical-700">
              <p className="font-semibold text-medical-900">Praktijklocatie</p>
              <p className="mt-2">{RELOCATION.notice}</p>
              <p className="mt-3 text-sm">
                Huidig consultatieadres tot 1 oktober 2026: {PRACTICE.formerAddress.full}.
                Daarna: <strong>{PRACTICE.address.full}</strong>.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid gap-6 md:grid-cols-2">
            <AnimateOnScroll>
              <InfoCard title="Betalingen">
                <p>Betalingen zijn mogelijk via:</p>
                <ul className="mt-3 list-inside list-disc space-y-1">
                  <li>Contant geld</li>
                  <li>Bankapp (QR-code scannen)</li>
                  <li>Payconiq</li>
                </ul>
              </InfoCard>
            </AnimateOnScroll>

            <AnimateOnScroll delay={80}>
              <InfoCard title="Voorschriften & attesten">
                <p>
                  Gelieve voor voorschriften en attesten <strong>steeds een afspraak</strong> te
                  maken — bij voorkeur online. Zo kunnen wij uw gezondheidstoestand beter
                  opvolgen en de juiste zorg verlenen.
                </p>
                <div className="mt-4">
                  <AppointmentButton size="sm" label="Afspraak maken" />
                </div>
              </InfoCard>
            </AnimateOnScroll>

            <AnimateOnScroll delay={120}>
              <InfoCard title="Huisbezoeken">
                <p>
                  Indien u niet naar de praktijk kunt komen, zijn huisbezoeken mogelijk.
                  Bel{" "}
                  <a
                    href={PRACTICE.phoneHref}
                    className="text-medical-600 font-medium hover:underline"
                  >
                    {PRACTICE.phone}
                  </a>{" "}
                  om dit te bespreken. Dr. Dirk Lauwerier voert vanaf oktober 2026 enkel nog
                  huisbezoeken uit voor zijn bestaande patiënten.
                </p>
              </InfoCard>
            </AnimateOnScroll>

            <AnimateOnScroll delay={160}>
              <InfoCard title="Spoedgevallen">
                <p>
                  Bij dringende hulp: bel eerst <strong>{PRACTICE.phone}</strong>. Uw huisarts
                  kent u, is in de buurt en kan efficiënt ingrijpen. Vaak kunt u naar de
                  praktijk komen; indien nodig komt de arts langs.
                </p>
                <p className="mt-3 text-sm">
                  Bij levensbedreigende situaties: <strong>112</strong>.
                </p>
              </InfoCard>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <InfoCard title="GMD — Globaal Medisch Dossier">
                <p>
                  Wij werken met het GMD voor een volledige opvolging. Uw dossier wordt
                  zorgvuldig bijgehouden en is toegankelijk voor alle consulterende artsen in
                  de praktijk.
                </p>
              </InfoCard>
            </AnimateOnScroll>

            <AnimateOnScroll delay={240}>
              <InfoCard title="Tarieven">
                <p>
                  De geldende tarieven zijn conform de <strong>RIZIV-normen</strong> (Belgische
                  zorgverzekering). Voor specifieke vragen over kosten, neem contact op met de
                  praktijk.
                </p>
              </InfoCard>
            </AnimateOnScroll>

            <AnimateOnScroll delay={280}>
              <InfoCard title="Nieuwe patiënten">
                <p>
                  Er is <strong>geen patiëntenstop</strong>. Nieuwe patiënten zijn welkom bij
                  Dr. Michiel Vercruysse en Dr. Loïck Vanwetter. Maak een kennismakingsafspraak
                  zodat wij uw dossier kunnen opvragen.
                </p>
              </InfoCard>
            </AnimateOnScroll>

            <AnimateOnScroll delay={320}>
              <InfoCard title="Sportgeneeskunde">
                <p>
                  Vanaf oktober 2026 bieden wij sportmedische consultaties aan via Dr. Gianni
                  Faelens. Zie de pagina Sportgeneeskunde voor inspanningstesten, sportkeuringen,
                  duikmedische keuringen en meer.
                </p>
              </InfoCard>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
