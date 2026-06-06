import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import {
  TEAM_EXTRA,
  SPORT_DOCTOR,
  FORMER_CONSULTING_DOCTOR,
  CONSULTING_DOCTOR_PROFILES,
} from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { AppointmentButton } from "@/components/ui/AppointmentButton";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";
import { DoctorProfileFeatured } from "@/components/team/DoctorProfileFeatured";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team & artsen",
  description:
    "Maak kennis met Dr. Michiel Vercruysse, Dr. Loïck Vanwetter, Dr. Gianni Faelens (sportarts) en Audrey Vanwetter (diëtiste). Huisartsenpraktijk Semmerzake.",
  keywords: [
    "huisarts Semmerzake",
    "Dr. Michiel Vercruysse",
    "Dr. Loïck Vanwetter",
    "sportarts Semmerzake",
    "team HAPSEM",
    "sportgeneeskunde",
  ],
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Ons team"
        subtitle="Twee vaste huisartsen, een sportarts en een diëtiste — één team, persoonlijke zorg."
      />

      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <SectionHeading title="Huisartsen" />

          <div className="space-y-12">
            {CONSULTING_DOCTOR_PROFILES.map((doctor, index) => (
              <AnimateOnScroll key={doctor.name} delay={index * 80}>
                <DoctorProfileFeatured
                  name={doctor.name}
                  role={doctor.role}
                  image={doctor.image}
                  imageAlt={doctor.imageAlt}
                  paragraphs={doctor.paragraphs}
                />
              </AnimateOnScroll>
            ))}
          </div>

          <SectionHeading
            title="Sportgeneeskunde"
            subtitle="Vanaf 1 oktober 2026 — sportmedische begeleiding binnen onze praktijk."
            className="mt-20"
          />

          <div className="max-w-2xl mx-auto">
            <AnimateOnScroll>
              <TeamMemberCard
                name={SPORT_DOCTOR.name}
                role={SPORT_DOCTOR.role}
                description={`${SPORT_DOCTOR.intro} ${SPORT_DOCTOR.description}`}
                image={SPORT_DOCTOR.image}
                imageCredit={SPORT_DOCTOR.imageCredit}
                variant="sport"
              >
                <p className="mt-4 text-sm font-medium text-medical-700">
                  {SPORT_DOCTOR.disclaimer}
                </p>
                <ul className="mt-6 space-y-2 text-left text-sm text-medical-600">
                  {SPORT_DOCTOR.services.map((service) => (
                    <li key={service} className="flex items-start gap-2">
                      <span className="mt-0.5 text-medical-500" aria-hidden>
                        ✓
                      </span>
                      {service}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/sportgeneeskunde"
                  className="mt-4 inline-block text-sm font-medium text-medical-600 hover:text-medical-800"
                >
                  Meer over sportgeneeskunde →
                </Link>
              </TeamMemberCard>
            </AnimateOnScroll>
          </div>

          <SectionHeading
            title="Aanvullend team"
            subtitle="Preventieve zorg en voedingsbegeleiding."
            className="mt-20"
          />

          <div className="grid gap-8 md:grid-cols-2 max-w-2xl mx-auto">
            {TEAM_EXTRA.map((member, index) => (
              <AnimateOnScroll key={member.name} delay={index * 100}>
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  description={member.description}
                  initials="AV"
                >
                  <div className="mt-6">
                    <AppointmentButton size="sm" label="Afspraak met diëtiste" />
                  </div>
                </TeamMemberCard>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={100}>
            <div className="mt-16 mx-auto max-w-3xl rounded-2xl border border-medical-200 bg-medical-50/60 p-6 text-center">
              <h3 className="font-semibold text-medical-900">
                {FORMER_CONSULTING_DOCTOR.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-medical-500">
                {FORMER_CONSULTING_DOCTOR.role}
              </p>
              <p className="mt-3 text-medical-600 leading-relaxed">
                {FORMER_CONSULTING_DOCTOR.note}
              </p>
            </div>
          </AnimateOnScroll>

          <p className="mt-12 text-center text-medical-600 max-w-2xl mx-auto">
            U kiest bij welke huisarts u een afspraak maakt. Alle consulterende
            artsen hebben toegang tot uw medisch dossier voor een vlotte en veilige
            opvolging.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
