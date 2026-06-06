import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InfoCard } from "@/components/shared/InfoCard";
import { CTABanner } from "@/components/shared/CTABanner";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { AppointmentButton } from "@/components/ui/AppointmentButton";
import { RELOCATION, PRACTICE, SPORT_DOCTOR } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Over de praktijk",
  description:
    "Leer Huisartsenpraktijk Semmerzake (HAPSEM) kennen. Twee vaste huisartsen, sportgeneeskunde, geen patiëntenstop. Tijdelijke locatie Dorpstraat 60 vanaf oktober 2026.",
};

export default function OverDePraktijkPage() {
  return (
    <>
      <PageHero
        title="Over de praktijk"
        subtitle="Persoonlijke huisartsenzorg met aandacht voor u en uw gezin."
        showAppointment
      />

      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center text-lg text-medical-600 leading-relaxed">
              <p>
                In onze praktijk zijn twee vaste huisartsen werkzaam: Dr. Michiel
                Vercruysse en Dr. Loïck Vanwetter. U kiest zelf bij welke arts u
                een afspraak wenst. Alle consulterende artsen kunnen het medisch
                dossier raadplegen — indien bij uw vaste arts geen plaats meer
                vrij is en u een dringend probleem heeft, kunt u steeds terecht
                bij de collega.
              </p>
              <p className="mt-4">
                Vanaf oktober 2026 vervoegt {SPORT_DOCTOR.name} onze praktijk als
                sportarts. {SPORT_DOCTOR.disclaimer}
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={80}>
            <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50/70 p-6 text-center text-medical-700">
              <p className="font-semibold text-medical-900">Verhuis praktijk</p>
              <p className="mt-2">{RELOCATION.notice}</p>
              <p className="mt-3 text-sm">{RELOCATION.futureLocation}</p>
            </div>
          </AnimateOnScroll>

          <SectionHeading
            title="Onze visie"
            subtitle="Kwaliteit, toegankelijkheid en preventie staan centraal."
            className="mt-20"
          />

          <div className="grid gap-6 md:grid-cols-2">
            <AnimateOnScroll>
              <InfoCard title="Nieuwe patiënten welkom">
                <p>
                  Er is momenteel <strong>geen patiëntenstop</strong>. Als nieuwe
                  patiënt raden wij aan om, indien mogelijk, een
                  kennismakingsafspraak te maken bij een van onze consulterende
                  huisartsen. Zo kunnen wij uw dossier opvragen en u optimaal
                  helpen bij acute problemen in de toekomst.
                </p>
              </InfoCard>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <InfoCard title="GMD — Globaal Medisch Dossier">
                <p>
                  Wij werken met het Globaal Medisch Dossier (GMD) voor een
                  volledige en veilige opvolging van uw gezondheid. Uw dossier
                  wordt zorgvuldig bijgehouden en is toegankelijk voor alle
                  consulterende artsen binnen de praktijk.
                </p>
              </InfoCard>
            </AnimateOnScroll>
            <AnimateOnScroll delay={150}>
              <InfoCard title="Preventieve zorg & sportgeneeskunde">
                <p>
                  Preventie is essentieel. Audrey Vanwetter begeleidt u als diëtiste
                  bij gezonde voedingskeuzes. {SPORT_DOCTOR.name} versterkt ons
                  team met sportmedische begeleiding, blessurepreventie en
                  sportgerelateerde onderzoeken.
                </p>
              </InfoCard>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <InfoCard title="Digitale zorg">
                <p>
                  Online afspraken via Medici, videoconsultaties en laboresultaten
                  via Helena — wij omarmen moderne tools om u efficiënt en veilig
                  te ondersteunen.
                </p>
              </InfoCard>
            </AnimateOnScroll>
            <AnimateOnScroll delay={250}>
              <InfoCard title="Praktijklocatie">
                <p>
                  Vanaf 1 oktober 2026 verwelkomen wij u op{" "}
                  <strong>
                    {PRACTICE.address.street}, {PRACTICE.address.postal}
                  </strong>
                  . Het voormalige adres {PRACTICE.formerAddress.full} blijft
                  geen consultatieadres.
                </p>
              </InfoCard>
            </AnimateOnScroll>
          </div>

          <div className="mt-12 flex justify-center">
            <AppointmentButton label="Afspraak maken" />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
