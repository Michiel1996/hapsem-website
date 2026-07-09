import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { SPORT_DOCTOR, PRACTICE } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { AppointmentButton } from "@/components/ui/AppointmentButton";
import { InfoCard } from "@/components/shared/InfoCard";

export const metadata: Metadata = {
  title: "Sportgeneeskunde",
  description:
    "Sportarts Dr. Gianni Faelens bij HAPSEM Semmerzake (regio Gavere–Gent). Sportkeuring, duikarts, inspanningstest, sportletsels, echografie en blessurepreventie. Vanaf 1 oktober 2026.",
  keywords: [
    "sportarts Semmerzake",
    "sportarts Gavere",
    "sportgeneeskunde Semmerzake",
    "sportkeuring",
    "duikarts",
    "inspanningstest",
    "sportletsels",
    "echografie",
    "ESWT",
    "PRP",
  ],
};

export default function SportgeneeskundePage() {
  return (
    <>
      <PageHero
        title="Sportgeneeskunde"
        subtitle="Sportmedische begeleiding binnen onze praktijk — vanaf 1 oktober 2026."
        showAppointment
      />

      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <AnimateOnScroll>
              <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-3xl shadow-card">
                <Image
                  src={SPORT_DOCTOR.image}
                  alt={SPORT_DOCTOR.name}
                  fill
                  quality={95}
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 480px"
                  priority
                />
              </div>
              <p className="mt-3 text-center text-xs text-medical-400">
                {SPORT_DOCTOR.imageCredit}
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div>
                <h2 className="font-display text-3xl font-semibold text-medical-900">
                  {SPORT_DOCTOR.name}
                </h2>
                <p className="mt-2 text-lg font-medium text-gold-500">
                  {SPORT_DOCTOR.role}
                </p>
                <p className="mt-6 text-medical-600 leading-relaxed">
                  {SPORT_DOCTOR.intro}
                </p>
                <p className="mt-4 text-medical-600 leading-relaxed">
                  {SPORT_DOCTOR.description}
                </p>
                <p className="mt-6 rounded-xl border border-amber-200 bg-amber-50/80 px-4 py-3 text-sm font-medium text-medical-800">
                  {SPORT_DOCTOR.disclaimer}
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          <SectionHeading
            title="Waarvoor kan u terecht?"
            subtitle="Sportmedische consultaties en onderzoeken op maat."
            className="mt-20"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SPORT_DOCTOR.services
              .filter((service) => service !== "Bloedanalyses")
              .map((service, index) => (
              <AnimateOnScroll key={service} delay={index * 50}>
                <div className="card-premium flex h-full items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-medical-100 text-xs font-semibold text-medical-600">
                    ✓
                  </span>
                  <p className="text-medical-700">{service}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <AnimateOnScroll>
              <InfoCard title="Sportletsels & blessurepreventie">
                <p>
                  Diagnostiek met echografie, gerichte behandelingen zoals
                  shockwave-therapie (ESWT) en injecties onder echogeleiding.
                  Advies voor veilige en doelgerichte training.
                </p>
              </InfoCard>
            </AnimateOnScroll>
            <AnimateOnScroll delay={80}>
              <InfoCard title="Keuringen & inspanning">
                <p>
                  Sportmedische en duikmedische keuringen en inspanningstesten
                  voor een volledig sportmedisch beeld.
                </p>
              </InfoCard>
            </AnimateOnScroll>
          </div>

          <p className="mt-10 text-center text-sm text-medical-500">
            Consultaties vinden plaats op onze praktijklocatie {PRACTICE.address.street},{" "}
            {PRACTICE.address.postal} (vanaf 1 oktober 2026).
          </p>

          <div className="mt-8 flex justify-center">
            <AppointmentButton label="Boek consultatie" size="lg" />
          </div>
        </div>
      </section>

      <CTABanner
        title="Sportmedische afspraak maken?"
        description="Plan uw consultatie online via Medici bij Dr. Gianni Faelens."
      />
    </>
  );
}
