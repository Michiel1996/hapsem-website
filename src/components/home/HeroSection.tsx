import { PRACTICE } from "@/lib/constants";
import { AppointmentButton } from "@/components/ui/AppointmentButton";
import { Button } from "@/components/ui/Button";
import { RelocationBanner } from "@/components/shared/RelocationBanner";

export function HeroSection() {
  return (
    <>
      <RelocationBanner />
      <section className="relative min-h-[85vh] overflow-hidden section-gradient">
        <div
          className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-medical-200/20 blur-3xl animate-float"
          aria-hidden
        />
        <div
          className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gold-400/5 blur-2xl"
          aria-hidden
        />

        <div className="container-wide relative flex min-h-[85vh] flex-col items-center justify-center py-20 text-center">
          <span className="mb-4 inline-block rounded-full border border-medical-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-medical-600 shadow-soft">
            Nieuwe patiënten welkom
          </span>

          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight text-medical-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Persoonlijke huisartsenzorg in{" "}
            <span className="text-medical-600">Semmerzake</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-medical-600 sm:text-xl">
            {PRACTICE.name} — uw huisarts in Semmerzake (Gavere). Twee vaste
            huisartsen, sportgeneeskunde en een toegewijd team. Online
            afspraken, videoconsultaties en zorg op maat.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <AppointmentButton size="lg" label="Maak online afspraak" />
            <Button href="/contact" variant="secondary" size="lg">
              Contact & ligging
            </Button>
          </div>

          <div className="mt-16 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { value: "2", label: "Vaste huisartsen" },
              { value: "Sport", label: "Sportgeneeskunde" },
              { value: "Online", label: "Afspraken via Medici" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-medical-100/80 bg-white/70 px-6 py-4 shadow-soft backdrop-blur-sm"
              >
                <p className="font-display text-2xl font-semibold text-medical-700">
                  {stat.value}
                </p>
                <p className="text-sm text-medical-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
