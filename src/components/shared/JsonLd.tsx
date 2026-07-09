import {
  PRACTICE,
  PRACTICE_GEO,
  CONSULTING_DOCTORS,
  SPORT_DOCTOR,
  SITE_URL,
  MAP_LINK,
} from "@/lib/constants";

/** Schema.org structured data voor lokale SEO (MedicalClinic) */
export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${SITE_URL}/#praktijk`,
    name: PRACTICE.name,
    alternateName: PRACTICE.shortName,
    description: PRACTICE.tagline,
    url: SITE_URL,
    telephone: "+32 9 384 48 70",
    email: PRACTICE.email,
    image: `${SITE_URL}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: PRACTICE.address.street,
      addressLocality: "Semmerzake",
      addressRegion: "Oost-Vlaanderen",
      postalCode: "9890",
      addressCountry: "BE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: PRACTICE_GEO.latitude,
      longitude: PRACTICE_GEO.longitude,
    },
    hasMap: MAP_LINK,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    medicalSpecialty: ["PrimaryCare", "SportsMedicine"],
    employee: [
      ...CONSULTING_DOCTORS.map((d) => ({
        "@type": "Physician",
        name: d.name,
        jobTitle: "Huisarts",
        medicalSpecialty: "PrimaryCare",
        worksFor: PRACTICE.name,
      })),
      {
        "@type": "Physician",
        name: SPORT_DOCTOR.name,
        jobTitle: SPORT_DOCTOR.role,
        medicalSpecialty: "SportsMedicine",
        worksFor: PRACTICE.name,
      },
    ],
    areaServed: [
      "Semmerzake",
      "Gavere",
      "Asper",
      "Baaigem",
      "Dikkelvenne",
      "Vurste",
    ].map((name) => ({ "@type": "City", name })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
