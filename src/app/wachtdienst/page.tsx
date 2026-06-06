import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { USEFUL_NUMBERS, PRACTICE } from "@/lib/constants";
import { InfoCard } from "@/components/shared/InfoCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Wachtdienst",
  description:
    "Wachtdienstinformatie voor HAPSEM — weekend, feestdagen en nuttige telefoonnummers.",
};

export default function WachtdienstPage() {
  return (
    <>
      <PageHero
        title="Wachtdienst"
        subtitle="Wat te doen buiten de gewone spreekuren."
      />

      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <AnimateOnScroll>
            <div className="card-premium max-w-3xl mx-auto">
              <h2 className="text-xl font-semibold text-medical-900">
                Weekendwacht
              </h2>
              <p className="mt-4 text-medical-600 leading-relaxed">
                Er is voor huisartsen een <strong>wettelijke wachtregeling</strong> in het
                weekend: vanaf <strong>vrijdag 19:00</strong> tot{" "}
                <strong>maandag 08:00</strong>, en op wettelijke feestdagen tussen{" "}
                <strong>19:00</strong> de avond voordien en <strong>08:00</strong> de ochtend
                erna.
              </p>
              <p className="mt-4 text-medical-600 leading-relaxed">
                Op deze momenten kunt u terecht bij de wachtdienst van uw eigen gemeente.
                Bel hiervoor naar{" "}
                <a href="tel:1733" className="font-semibold text-medical-700 hover:underline">
                  1733
                </a>
                .
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <AnimateOnScroll>
              <InfoCard title="Tijdens spreekuren — dringend">
                <p>
                  Bel eerst onze praktijk op{" "}
                  <a
                    href={PRACTICE.phoneHref}
                    className="font-semibold text-medical-700 hover:underline"
                  >
                    {PRACTICE.phone}
                  </a>
                  . De huisarts kan telefonisch de ernst inschatten en u adviseren wat te
                  doen.
                </p>
              </InfoCard>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <InfoCard title="Spoed — levensbedreigend">
                <p>
                  Bij levensbedreigende situaties: bel onmiddellijk{" "}
                  <a href="tel:112" className="font-semibold text-medical-700 hover:underline">
                    112
                  </a>
                  .
                </p>
              </InfoCard>
            </AnimateOnScroll>
          </div>

          <SectionHeading
            title="Nuttige telefoonnummers"
            subtitle="Bewaar deze nummers — ze kunnen levens redden."
            className="mt-20"
          />

          <div className="grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
            {USEFUL_NUMBERS.map((item, index) => (
              <AnimateOnScroll key={item.label} delay={index * 60}>
                <a
                  href={item.href}
                  className="card-premium flex items-center justify-between group"
                >
                  <span className="font-medium text-medical-800">{item.label}</span>
                  <span className="font-display text-xl font-semibold text-medical-600 group-hover:text-medical-800">
                    {item.number}
                  </span>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
