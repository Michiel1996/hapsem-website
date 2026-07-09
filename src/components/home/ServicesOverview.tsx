import Link from "next/link";
import { MEDICI_APPOINTMENT_URL } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function ServicesOverview() {
  const services = [
    {
      title: "Online afspraken",
      description: "Plan uw consultatie snel en eenvoudig via Medici.",
      href: MEDICI_APPOINTMENT_URL,
      external: true,
    },
    {
      title: "Team & artsen",
      description:
        "Maak kennis met onze huisartsen, sportarts en diëtiste.",
      href: "/team",
    },
    {
      title: "Sportgeneeskunde",
      description:
        "Sportmedische keuringen, inspanningstesten, sportletsels en blessurepreventie.",
      href: "/sportgeneeskunde",
    },
    {
      title: "Videoconsultaties",
      description: "Consult op afstand wanneer een fysiek bezoek niet nodig is.",
      href: "/videoconsultaties",
    },
    {
      title: "Helena laboresultaten",
      description: "Bekijk uw laboratoriumresultaten veilig online.",
      href: "/helena",
    },
    {
      title: "Praktische info",
      description: "Betalingen, voorschriften, GMD en meer.",
      href: "/praktische-info",
    },
    {
      title: "Wachtdienst",
      description: "Wat te doen buiten de spreekuren en in het weekend.",
      href: "/wachtdienst",
    },
    {
      title: "Veelgestelde vragen",
      description: "Antwoorden op de meest gestelde patiëntenvragen.",
      href: "/faq",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container-narrow">
        <SectionHeading
          title="Onze diensten"
          subtitle="Alles wat u nodig heeft voor uw gezondheid, overzichtelijk op één plek."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <AnimateOnScroll key={service.title} delay={index * 60}>
              {service.external ? (
                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-premium block h-full group"
                >
                  <ServiceCardContent {...service} />
                </a>
              ) : (
                <Link href={service.href} className="card-premium block h-full group">
                  <ServiceCardContent {...service} />
                </Link>
              )}
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCardContent({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <h3 className="text-lg font-semibold text-medical-900 group-hover:text-medical-600 transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm text-medical-600">{description}</p>
      <span className="mt-4 inline-block text-sm font-medium text-medical-500 group-hover:text-medical-700">
        Meer info →
      </span>
    </>
  );
}
