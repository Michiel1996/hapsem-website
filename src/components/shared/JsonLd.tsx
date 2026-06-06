import { PRACTICE, CONSULTING_DOCTORS, SPORT_DOCTOR } from "@/lib/constants";

/** Schema.org structured data voor SEO */
export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: PRACTICE.name,
    alternateName: PRACTICE.shortName,
    description: PRACTICE.tagline,
    url: "https://hapsem.be",
    telephone: PRACTICE.phone,
    email: PRACTICE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: PRACTICE.address.street,
      addressLocality: "Semmerzake",
      postalCode: "9890",
      addressCountry: "BE",
    },
    geo: {
      "@type": "GeoCoordinates",
      addressCountry: "BE",
    },
    medicalSpecialty: [
      "GeneralPractice",
      "SportsMedicine",
    ],
    employee: [
      ...CONSULTING_DOCTORS.map((d) => ({
        "@type": "Physician",
        name: d.name,
        medicalSpecialty: "GeneralPractice",
      })),
      {
        "@type": "Physician",
        name: SPORT_DOCTOR.name,
        medicalSpecialty: "SportsMedicine",
        description: SPORT_DOCTOR.role,
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Semmerzake",
    },
    keywords: [
      "sportarts Semmerzake",
      "sportgeneeskunde Semmerzake",
      "sportkeuring",
      "duikarts",
      "inspanningstest",
      "sportletsels",
      "echografie",
    ].join(", "),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
