import { AppointmentButton } from "@/components/ui/AppointmentButton";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  showAppointment?: boolean;
}

/** Hero-banner voor subpagina's */
export function PageHero({
  title,
  subtitle,
  showAppointment = false,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-medical-50 via-white to-cream-100 py-16 md:py-24">
      {/* Decoratieve achtergrond */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-medical-200/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-gold-400/10 blur-2xl"
        aria-hidden
      />

      <div className="container-narrow relative text-center">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-medical-900 sm:text-5xl md:text-6xl animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg text-medical-600 animate-slide-up">
            {subtitle}
          </p>
        )}
        {showAppointment && (
          <div className="mt-8 flex justify-center">
            <AppointmentButton size="lg" />
          </div>
        )}
      </div>
    </section>
  );
}
