import { MAP_EMBED_URL, MAP_LINK, PRACTICE, RELOCATION } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";

export function LocationMap() {
  return (
    <section className="section-gradient py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading
          title="Locatie"
          subtitle="Onze praktijklocatie in Semmerzake — vanaf 1 oktober 2026."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <AnimateOnScroll>
            <div className="card-premium">
              <p className="text-sm font-medium text-gold-500">
                {PRACTICE.address.label}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-medical-900">Adres</h3>
              <address className="mt-4 not-italic text-medical-600 leading-relaxed">
                <strong className="text-medical-800">{PRACTICE.name}</strong>
                <br />
                {PRACTICE.address.street}
                <br />
                {PRACTICE.address.postal}
                <br />
                {PRACTICE.address.country}
              </address>
              <p className="mt-4 text-sm text-medical-500">
                Voormalig consultatieadres ({PRACTICE.formerAddress.full}): geen
                consultaties meer vanaf 1 oktober 2026.
              </p>
              <p className="mt-3 text-sm text-medical-600">{RELOCATION.futureLocation}</p>
              <div className="mt-6">
                <Button href={MAP_LINK} external variant="outline">
                  Route plannen in Google Maps
                </Button>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="overflow-hidden rounded-2xl border border-medical-100 shadow-card">
              <iframe
                title={`Kaart ${PRACTICE.name}`}
                src={MAP_EMBED_URL}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
