import { PRACTICE } from "@/lib/constants";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

/** Welkomstsectie — direct onder de hero op de homepagina */
export function WelcomeSection() {
  return (
    <section className="border-b border-medical-100/60 bg-white py-20 md:py-28">
      <div className="container-narrow">
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-gold-500">
              Welkom
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-medical-900 sm:text-4xl md:text-5xl">
              Welkom bij {PRACTICE.name}
            </h2>
            <div
              className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-medical-400 to-gold-400"
              aria-hidden
            />
            <p className="mt-8 text-lg leading-relaxed text-medical-600 sm:text-xl">
              Wij bieden toegankelijke en kwaliteitsvolle eerstelijnszorg voor
              patiënten uit Semmerzake, Gavere en omgeving. Ons team van
              huisartsen en sportarts begeleidt u bij zowel acute als chronische
              gezondheidsproblemen, met bijzondere aandacht voor preventie,
              continuïteit van zorg en een persoonlijke aanpak.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
