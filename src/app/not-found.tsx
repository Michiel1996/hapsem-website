import { Button } from "@/components/ui/Button";
import { PRACTICE } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="section-gradient flex min-h-[60vh] items-center py-20">
      <div className="container-narrow text-center">
        <p className="font-display text-6xl font-semibold text-medical-300">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-medical-900 sm:text-4xl">
          Pagina niet gevonden
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-medical-600">
          De pagina die u zoekt bestaat niet (meer). Ga terug naar de homepagina
          of neem contact op met {PRACTICE.name}.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button href="/">Naar de homepagina</Button>
          <Button href="/contact" variant="secondary">
            Contact & ligging
          </Button>
        </div>
        <p className="mt-8 text-sm text-medical-500">
          Of bel ons op{" "}
          <a href={PRACTICE.phoneHref} className="font-medium text-medical-700 hover:underline">
            {PRACTICE.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
