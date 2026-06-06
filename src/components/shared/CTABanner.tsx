import { AppointmentButton } from "@/components/ui/AppointmentButton";

interface CTABannerProps {
  title?: string;
  description?: string;
}

/** Oproep-tot-actie banner — herbruikbaar onderaan pagina's */
export function CTABanner({
  title = "Klaar om een afspraak te maken?",
  description = "Plan uw consultatie online via Medici. Snel, eenvoudig en beschikbaar wanneer het u uitkomt.",
}: CTABannerProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-medical-600 to-medical-800 px-8 py-12 text-center shadow-glow md:px-16 md:py-16">
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
            aria-hidden
          />
          <h2 className="relative font-display text-2xl font-semibold text-white sm:text-3xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-medical-100">
            {description}
          </p>
          <div className="relative mt-8 flex justify-center">
            <AppointmentButton
              size="lg"
              label="Online boeken"
              variant="secondary"
              className="!bg-white !text-medical-700 hover:!bg-cream-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
