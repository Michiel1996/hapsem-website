import Link from "next/link";
import Image from "next/image";
import { CONSULTING_DOCTORS, SPORT_DOCTOR } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function DoctorsPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-narrow">
        <SectionHeading
          title="Ons team"
          subtitle="Twee vaste huisartsen en een sportarts. U kiest bij wie u een afspraak maakt — alle artsen kunnen uw dossier raadplegen."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {CONSULTING_DOCTORS.map((doctor, index) => (
            <AnimateOnScroll key={doctor.name} delay={index * 100}>
              <article className="card-premium group h-full text-center">
                {doctor.image ? (
                  <div className="relative mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full ring-2 ring-medical-100 transition-transform group-hover:scale-105">
                    <Image
                      src={doctor.image}
                      alt={doctor.imageAlt ?? doctor.name}
                      fill
                      quality={95}
                      className="object-cover object-top"
                      sizes="160px"
                    />
                  </div>
                ) : (
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-medical-100 to-medical-200 text-2xl font-display font-semibold text-medical-700 transition-transform group-hover:scale-105">
                    {doctor.name.split(" ").pop()?.charAt(0)}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-medical-900">
                  {doctor.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-medical-500">
                  {doctor.role}
                </p>
                <p className="mt-3 text-sm text-medical-600">
                  {doctor.description}
                </p>
              </article>
            </AnimateOnScroll>
          ))}

          <AnimateOnScroll delay={200}>
            <article className="card-premium group h-full text-center">
              <div className="relative mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full ring-2 ring-gold-400/40">
                <Image
                  src={SPORT_DOCTOR.imageThumb}
                  alt={SPORT_DOCTOR.name}
                  fill
                  quality={95}
                  className="object-cover object-top"
                  sizes="160px"
                />
              </div>
              <h3 className="text-xl font-semibold text-medical-900">
                {SPORT_DOCTOR.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-gold-500">
                {SPORT_DOCTOR.role}
              </p>
              <p className="mt-3 text-sm text-medical-600">
                {SPORT_DOCTOR.summary}
              </p>
              <Link
                href="/sportgeneeskunde"
                className="mt-4 inline-block text-sm font-medium text-medical-600 hover:text-medical-800"
              >
                Meer over sportgeneeskunde →
              </Link>
            </article>
          </AnimateOnScroll>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/team"
            className="text-medical-600 font-medium hover:text-medical-800 transition-colors"
          >
            Bekijk het volledige team →
          </Link>
        </div>
      </div>
    </section>
  );
}
