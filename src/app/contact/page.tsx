import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { PRACTICE, OPENING_HOURS, MAP_EMBED_URL, MAP_LINK, RELOCATION } from "@/lib/constants";
import { AppointmentButton } from "@/components/ui/AppointmentButton";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { RelocationBanner } from "@/components/shared/RelocationBanner";

export const metadata: Metadata = {
  title: "Contact & ligging",
  description:
    "Contactgegevens en locatie van Huisartsenpraktijk Semmerzake — Dorpstraat 60, 9890 Semmerzake. Tijdelijke praktijklocatie vanaf 1 oktober 2027.",
  keywords: ["contact huisarts Semmerzake", "Dorpstraat 60", "HAPSEM", "sportarts Semmerzake"],
};

export default function ContactPage() {
  return (
    <>
      <RelocationBanner showFutureLocation />
      <PageHero
        title="Contact & ligging"
        subtitle="Wij staan voor u klaar — bereik ons via telefoon, e-mail of online."
      />

      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <AnimateOnScroll>
                <div className="card-premium">
                  <p className="text-sm font-medium text-gold-500">
                    {PRACTICE.address.label}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-medical-900">Adres</h2>
                  <address className="mt-4 not-italic text-medical-600 leading-relaxed">
                    <strong>{PRACTICE.name}</strong>
                    <br />
                    {PRACTICE.address.street}
                    <br />
                    {PRACTICE.address.postal}
                    <br />
                    {PRACTICE.address.country}
                  </address>
                  <p className="mt-4 text-sm text-medical-500">
                    Voormalig consultatieadres: {PRACTICE.formerAddress.full}. Geen
                    consultaties meer vanaf 1 oktober 2027.
                  </p>
                  <Button href={MAP_LINK} external variant="outline" className="mt-6">
                    Route in Google Maps
                  </Button>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={80}>
                <div className="card-premium">
                  <h2 className="text-xl font-semibold text-medical-900">Telefoon</h2>
                  <a
                    href={PRACTICE.phoneHref}
                    className="mt-4 block font-display text-2xl font-semibold text-medical-700 hover:text-medical-900"
                  >
                    {PRACTICE.phone}
                  </a>
                  <p className="mt-2 text-sm text-medical-500">
                    Bij dringende problemen buiten spreekuren: zie wachtdienst.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={120}>
                <div className="card-premium">
                  <h2 className="text-xl font-semibold text-medical-900">E-mail</h2>
                  <a
                    href={PRACTICE.emailHref}
                    className="mt-4 block text-medical-700 hover:text-medical-900 font-medium"
                  >
                    {PRACTICE.email}
                  </a>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={140}>
                <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 text-sm text-medical-700 leading-relaxed">
                  <p className="font-semibold text-medical-900">Toekomstige locatie</p>
                  <p className="mt-2">{RELOCATION.futureLocation}</p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={160}>
                <AppointmentButton
                  size="lg"
                  label="Maak online afspraak"
                  className="w-full sm:w-auto justify-center"
                />
              </AnimateOnScroll>
            </div>

            <div className="space-y-6">
              <AnimateOnScroll>
                <div className="overflow-hidden rounded-2xl border border-medical-100 shadow-card">
                  <iframe
                    title="Kaart HAPSEM"
                    src={MAP_EMBED_URL}
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="w-full"
                  />
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <div className="card-premium">
                  <h2 className="text-xl font-semibold text-medical-900">Openingsuren</h2>
                  <ul className="mt-4 divide-y divide-medical-100">
                    {OPENING_HOURS.map((item) => (
                      <li
                        key={item.day}
                        className="flex justify-between py-2.5 text-sm"
                      >
                        <span className="font-medium text-medical-800">{item.day}</span>
                        <span className="text-medical-600">{item.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
