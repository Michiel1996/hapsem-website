import { OPENING_HOURS, PRACTICE } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

/** Spreekuren op homepagina */
export function OpeningHours() {
  return (
    <section className="section-gradient py-20 md:py-28">
      <div className="container-narrow">
        <SectionHeading
          title="Openingsuren"
          subtitle={`Vanaf 1 oktober 2026: ${PRACTICE.address.street}, ${PRACTICE.address.postal}`}
        />

        <AnimateOnScroll>
          <div className="mx-auto max-w-lg card-premium">
            <ul className="divide-y divide-medical-100">
              {OPENING_HOURS.map((item) => (
                <li
                  key={item.day}
                  className="flex justify-between py-3 first:pt-0 last:pb-0"
                >
                  <span className="font-medium text-medical-800">
                    {item.day}
                  </span>
                  <span
                    className={
                      item.hours === "Gesloten"
                        ? "text-medical-400"
                        : "text-medical-600"
                    }
                  >
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-center text-sm text-medical-500">
              Voor dringende gevallen buiten de spreekuren: zie{" "}
              <a href="/wachtdienst" className="text-medical-600 underline hover:text-medical-800">
                wachtdienst
              </a>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
