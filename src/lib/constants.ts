/**
 * Centrale praktijkinformatie — één plek om gegevens te wijzigen.
 * Alle pagina's halen hun data hier vandaan.
 */

export const RELOCATION = {
  date: "1 oktober 2026",
  notice:
    "Vanaf 1 oktober 2026 verhuist onze praktijk naar Dorpstraat 60 te Semmerzake. Alle consultaties vinden vanaf die datum plaats op deze locatie. Er vinden vanaf die datum geen consultaties meer plaats op het adres Opperweg 23.",
  futureLocation:
    "In de toekomst zal onze praktijk verder uitbreiden in de volledig vernieuwde site van Schoenen Fami.",
  welcomeAtNewLocation:
    "Vanaf 1 oktober 2026 verwelkomen wij u op onze nieuwe praktijklocatie",
} as const;

export const PRACTICE = {
  name: "Huisartsenpraktijk Semmerzake",
  shortName: "HAPSEM",
  tagline: "Persoonlijke huisartsenzorg en sportgeneeskunde in Semmerzake",
  address: {
    street: "Dorpstraat 60",
    postal: "9890 Semmerzake",
    country: "België",
    full: "Dorpstraat 60, 9890 Semmerzake, België",
    label: "Nieuwe praktijklocatie vanaf 1 oktober 2026",
  },
  /** Voormalig consultatieadres — geen consultaties meer vanaf 1 oktober 2026 */
  formerAddress: {
    street: "Opperweg 23",
    postal: "9890 Gavere",
    country: "België",
    full: "Opperweg 23, 9890 Gavere",
  },
  phone: "09 384 48 70",
  phoneHref: "tel:+3293844870",
  email: "info@hapsem.be",
  emailHref: "mailto:info@hapsem.be",
} as const;

/** Medici — officiële link voor alle online afspraken */
export const MEDICI_APPOINTMENT_URL =
  "https://www.mtc-it4.be/patient/index.html#/appointments/day/bjNkcWkyQmFRMkpDVTRFNndleFgzTEg2UjB3RDlUcm5GS2RxUEpDcUtPZW9BSXJoMWVvNFJzakxua202b1YwaQ==";

export const HELENA_URL = "https://helena.care/";

/** Uitgebreid profiel Dr. Michiel Vercruysse */
export const DR_MICHEL_VERCRUYSSE = {
  name: "Dr. Michiel Vercruysse",
  role: "Huisarts",
  image: "/images/michiel-vercruysse.webp",
  imageThumb: "/images/michiel-vercruysse-thumb.webp",
  imageAlt: "Dr. Michiel Vercruysse, huisarts te Semmerzake",
  paragraphs: [
    "In 2020 behaalde ik mijn diploma Geneeskunde aan de Universiteit Gent. Vervolgens volgde ik mijn opleiding tot huisarts in Sijsele en Gent. Sinds 2023 ben ik als vaste huisarts verbonden aan Huisartsenpraktijk Semmerzake.",
    "De huisartsgeneeskunde spreekt mij aan door de combinatie van medische uitdaging, persoonlijk contact en langdurige begeleiding van patiënten. Ik hecht veel belang aan open communicatie en een vertrouwensrelatie, zodat u met al uw vragen en bezorgdheden bij mij terecht kunt. De brede waaier aan medische problematieken binnen de eerstelijnszorg maakt het vak bijzonder boeiend en afwisselend.",
    "Mijn interesse gaat uit naar alle aspecten van de huisartsgeneeskunde, met bijzondere aandacht voor preventieve gezondheidszorg, cardiovasculaire risicofactoren en een persoonlijke, patiëntgerichte aanpak.",
    "Naast mijn werk als huisarts ben ik een fervent sportliefhebber. Gedurende vele jaren speelde ik basketbal in clubverband, een sport waarin samenwerking, engagement en teamspirit centraal staan. Ook buiten de praktijk besteed ik graag tijd aan familie en vrienden.",
    "Samen met mijn echtgenote Iris ben ik trotse ouder van onze dochter Jutta. Het gezinsleven vormt een belangrijke bron van energie en inspiratie, en helpt mij dagelijks om met betrokkenheid en empathie klaar te staan voor mijn patiënten.",
  ],
} as const;

/** Uitgebreid profiel Dr. Loïck Vanwetter */
export const DR_LOICK_VANWETTER = {
  name: "Dr. Loïck Vanwetter",
  role: "Huisarts",
  image: "/images/loick-vanwetter.webp",
  imageThumb: "/images/loick-vanwetter-thumb.webp",
  imageAlt: "Dr. Loïck Vanwetter, huisarts te Semmerzake",
  paragraphs: [
    "In 2021 behaalde ik mijn diploma Geneeskunde aan de Universiteit Gent. Vervolgens volgde ik mijn opleiding tot huisarts in Gent. Sinds 2024 ben ik als vaste huisarts verbonden aan Huisartsenpraktijk Semmerzake.",
    "Wat mij aanspreekt in de huisartsgeneeskunde is de combinatie van medische uitdaging, persoonlijk contact en de mogelijkheid om patiënten gedurende verschillende fases van hun leven te begeleiden. Ik hecht veel belang aan open communicatie en een vertrouwensrelatie, zodat u met al uw vragen en bezorgdheden bij mij terecht kunt. Op die manier wil ik een laagdrempelig aanspreekpunt zijn voor alle aspecten van uw gezondheid.",
    "Mijn interesse gaat uit naar de volledige breedte van de huisartsgeneeskunde, met bijzondere aandacht voor preventieve gezondheidszorg, leefstijlgerelateerde aandoeningen en een persoonlijke, patiëntgerichte aanpak.",
    "Naast mijn werk als huisarts ben ik een fervent sportliefhebber. Gedurende vele jaren speelde ik hockey in clubverband, een sport waarin samenwerking, discipline en teamspirit centraal staan. Ook buiten de praktijk besteed ik graag tijd aan familie en vrienden.",
  ],
} as const;

/** Volgorde van uitgebreide huisartsenprofielen op de teampagina */
export const CONSULTING_DOCTOR_PROFILES = [
  DR_MICHEL_VERCRUYSSE,
  DR_LOICK_VANWETTER,
] as const;

export type ConsultingDoctor = {
  name: string;
  role: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

/** Actief consulterende huisartsen — online afspraken en nieuwe patiënten */
export const CONSULTING_DOCTORS: ConsultingDoctor[] = [
  {
    name: DR_MICHEL_VERCRUYSSE.name,
    role: DR_MICHEL_VERCRUYSSE.role,
    description:
      "Vaste huisarts sinds 2023. Persoonlijke, patiëntgerichte aanpak met aandacht voor preventieve zorg.",
    image: DR_MICHEL_VERCRUYSSE.imageThumb,
    imageAlt: DR_MICHEL_VERCRUYSSE.imageAlt,
  },
  {
    name: DR_LOICK_VANWETTER.name,
    role: DR_LOICK_VANWETTER.role,
    description:
      "Vaste huisarts sinds 2024. Laagdrempelig aanspreekpunt met aandacht voor preventieve zorg.",
    image: DR_LOICK_VANWETTER.imageThumb,
    imageAlt: DR_LOICK_VANWETTER.imageAlt,
  },
];

/** @deprecated Gebruik CONSULTING_DOCTORS — behouden voor backwards compatibility */
export const DOCTORS = CONSULTING_DOCTORS;

/** Dr. Dirk Lauwerier — geen consultaties meer vanaf oktober 2026 */
export const FORMER_CONSULTING_DOCTOR = {
  name: "Dr. Dirk Lauwerier",
  role: "Huisbezoeken (bestaande patiënten)",
  note:
    "Dr. Dirk Lauwerier voert vanaf oktober 2026 enkel nog huisbezoeken uit voor zijn bestaande patiënten en houdt geen consultaties meer in de praktijk.",
} as const;

/** Sportarts — vanaf 1 oktober 2026 */
export const SPORT_DOCTOR = {
  name: "Dr. Gianni Faelens",
  role: "Sportarts · Keuringsarts · Duikarts",
  image: "/images/gianni-faelens.webp",
  imageThumb: "/images/gianni-faelens-thumb.webp",
  imageCredit: "Foto: HERO Edegem",
  intro:
    "Vanaf 1 oktober 2026 vervoegt Dr. Gianni Faelens onze praktijk als sportarts, keuringsarts en duikarts.",
  description:
    "Dr. Faelens is sportarts, keuringsarts en duikarts. Binnen onze praktijk richt hij zich op sportgeneeskunde, blessurepreventie, sportmedische keuringen en de begeleiding van zowel recreatieve als competitieve sporters.",
  disclaimer:
    "Dr. Faelens voert binnen onze praktijk geen consultaties algemene huisartsgeneeskunde uit.",
  services: [
    "Inspanningstesten",
    "Bloedanalyses",
    "Sportmedische keuringen",
    "Duikmedische keuringen",
    "Diagnostiek van sportletsels met echografie",
    "Injecties onder echografie, waaronder hyaluronzuur en PRP",
    "Shockwave-therapie (ESWT)",
    "Preventie van sportblessures",
    "Advies rond veilige en doelgerichte training",
  ],
  summary:
    "U kan bij hem terecht voor sportmedische consultaties, blessurepreventie, sportletsels, inspanningsadvies en sportgerelateerde onderzoeken.",
} as const;

export const TEAM_EXTRA = [
  {
    name: "Audrey Vanwetter",
    role: "Diëtiste",
    description:
      "Begeleidt u bij gezonde voedingskeuzes. Preventieve zorg staat centraal in onze praktijk.",
  },
] as const;

/** Spreekuren — pas aan indien nodig */
export const OPENING_HOURS = [
  { day: "Maandag", hours: "08:00 – 19:00" },
  { day: "Dinsdag", hours: "08:00 – 19:00" },
  { day: "Woensdag", hours: "08:00 – 19:00" },
  { day: "Donderdag", hours: "08:00 – 19:00" },
  { day: "Vrijdag", hours: "08:00 – 19:00" },
  { day: "Zaterdag", hours: "Gesloten" },
  { day: "Zondag", hours: "Gesloten" },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/over-de-praktijk", label: "Over de praktijk" },
  { href: "/team", label: "Team" },
  { href: "/sportgeneeskunde", label: "Sportgeneeskunde" },
  { href: "/praktische-info", label: "Praktische info" },
  { href: "/videoconsultaties", label: "Videoconsultaties" },
  { href: "/wachtdienst", label: "Wachtdienst" },
  { href: "/helena", label: "Helena" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const SEO_KEYWORDS = [
  "huisarts",
  "Semmerzake",
  "HAPSEM",
  "huisartsenpraktijk",
  "afspraak",
  "videoconsultatie",
  "sportarts Semmerzake",
  "sportgeneeskunde Semmerzake",
  "sportkeuring",
  "duikarts",
  "inspanningstest",
  "sportletsels",
  "echografie",
  "Dorpstraat 60",
] as const;

export const USEFUL_NUMBERS = [
  { label: "Algemene huisartsenwachtdienst", number: "1733", href: "tel:1733" },
  { label: "Ziekenhuis spoedgevallen", number: "112", href: "tel:112" },
  { label: "Antigifcentrum", number: "070 245 245", href: "tel:+3270245245" },
  { label: "Zelfmoordlijn", number: "1813", href: "tel:1813" },
] as const;

/** Google Maps — Dorpstraat 60, 9890 Semmerzake */
export const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Dorpstraat+60,+9890+Semmerzake,+Belgi%C3%AB&hl=nl&z=16&output=embed";

export const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=Dorpstraat+60,+9890+Semmerzake,+België";
