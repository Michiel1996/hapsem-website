import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CTABanner } from "@/components/shared/CTABanner";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { AppointmentButton } from "@/components/ui/AppointmentButton";

export const metadata: Metadata = {
  title: "Videoconsultaties",
  description:
    "Videoconsultaties bij HAPSEM — efficiënt en veilig consult op afstand zonder naar de praktijk te komen.",
};

export default function VideoconsultatiesPage() {
  const steps = [
    {
      step: "1",
      title: "Maak een afspraak",
      text: "Boek online een videoconsultatie via Medici, net zoals een gewone consultatie.",
    },
    {
      step: "2",
      title: "Ontvang instructies",
      text: "U ontvangt van de praktijk de nodige info om deel te nemen aan het videogesprek.",
    },
    {
      step: "3",
      title: "Start het consult",
      text: "Op het afgesproken tijdstip verbindt u zich met uw huisarts via de aangegeven link.",
    },
  ];

  return (
    <>
      <PageHero
        title="Videoconsultaties"
        subtitle="Consult op afstand — efficiënt, veilig en persoonlijk."
        showAppointment
      />

      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl space-y-6 text-lg text-medical-600 leading-relaxed">
              <p>
                Sinds <strong>15 februari 2025</strong> zijn telefonische consultaties vanuit
                hogerhand afgeschaft. Consultaties op afstand blijven echter een belangrijk
                onderdeel van de zorg.
              </p>
              <p>
                Daarom bieden wij <strong>videoconsultaties</strong> aan als volwaardig
                alternatief. Dit stelt ons in staat om u op een efficiënte en veilige manier te
                blijven ondersteunen, zonder dat u fysiek naar de praktijk hoeft te komen.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {steps.map((item, index) => (
              <AnimateOnScroll key={item.step} delay={index * 100}>
                <div className="card-premium text-center h-full">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-medical-600 font-display text-xl font-semibold text-white">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-medical-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-medical-600">{item.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-medical-100 bg-medical-50/50 p-8 text-center">
            <h3 className="text-lg font-semibold text-medical-900">
              Wanneer is een videoconsultatie geschikt?
            </h3>
            <p className="mt-3 text-medical-600 max-w-2xl mx-auto">
              Voor opvolging, bespreking van resultaten, bepaalde klachten of wanneer een
              fysiek onderzoek niet strikt nodig is. Bij twijfel: bel de praktijk of maak een
              afspraak — wij adviseren u graag.
            </p>
            <div className="mt-6 flex justify-center">
              <AppointmentButton label="Boek consultatie" />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Plan uw videoconsultatie"
        description="Reserveer online via Medici — kies een geschikt tijdstip bij de arts van uw keuze."
      />
    </>
  );
}
