import { PRACTICE, MEDICI_APPOINTMENT_URL } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AppointmentButton } from "@/components/ui/AppointmentButton";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

/** Snelle contactknoppen — telefoon, e-mail, afspraak */
export function QuickContact() {
  const actions = [
    {
      title: "Bel de praktijk",
      description: PRACTICE.phone,
      href: PRACTICE.phoneHref,
      icon: PhoneIcon,
    },
    {
      title: "Stuur een e-mail",
      description: PRACTICE.email,
      href: PRACTICE.emailHref,
      icon: MailIcon,
    },
    {
      title: "Online afspraak",
      description: "Via Medici — 24/7 beschikbaar",
      href: MEDICI_APPOINTMENT_URL,
      icon: CalendarIcon,
      external: true,
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container-narrow">
        <SectionHeading
          title="Snel contact"
          subtitle="Kies de manier die het beste bij uw situatie past."
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {actions.map((action, index) => (
            <AnimateOnScroll key={action.title} delay={index * 80}>
              <a
                href={action.href}
                {...(action.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="card-premium flex h-full flex-col items-center text-center group"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-medical-50 text-medical-600 transition-colors group-hover:bg-medical-100">
                  <action.icon />
                </div>
                <h3 className="font-semibold text-medical-900">{action.title}</h3>
                <p className="mt-2 text-sm text-medical-600">{action.description}</p>
              </a>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <AppointmentButton size="lg" label="Boek consultatie" />
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}
