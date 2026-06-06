import type { FAQItem } from "@/components/faq/FAQAccordion";
import { PRACTICE, SPORT_DOCTOR, FORMER_CONSULTING_DOCTOR, RELOCATION } from "./constants";

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Hoe maak ik een afspraak?",
    answer:
      "U maakt het beste online een afspraak via Medici. Klik op 'Maak online afspraak' op onze website. Heeft u een dringend probleem en zijn er online geen plaatsen meer vrij, bel dan telefonisch naar 09 384 48 70.",
  },
  {
    question: "Kan ik kiezen bij welke arts ik terecht?",
    answer:
      "Ja. U kiest zelf bij welke van onze twee consulterende huisartsen u een afspraak wenst: Dr. Michiel Vercruysse of Dr. Loïck Vanwetter. Alle consulterende artsen kunnen uw medisch dossier raadplegen. Bij dringende problemen kunt u ook terecht bij een collega als uw vaste arts volzet is.",
  },
  {
    question: "Waar vindt de praktijk plaats vanaf oktober 2026?",
    answer: `${RELOCATION.notice} ${RELOCATION.futureLocation}`,
  },
  {
    question: "Kan ik nog terecht bij Dr. Dirk Lauwerier?",
    answer: `${FORMER_CONSULTING_DOCTOR.note} Voor nieuwe afspraken of consultaties in de praktijk kiest u bij Dr. Vercruysse of Dr. Vanwetter.`,
  },
  {
    question: "Wat doet Dr. Gianni Faelens in de praktijk?",
    answer: `${SPORT_DOCTOR.intro} ${SPORT_DOCTOR.summary} ${SPORT_DOCTOR.disclaimer} Meer info op de pagina Sportgeneeskunde.`,
  },
  {
    question: "Zijn nieuwe patiënten welkom?",
    answer:
      "Ja, er is momenteel geen patiëntenstop. Nieuwe patiënten zijn welkom bij onze consulterende huisartsen. Wij raden aan om een kennismakingsafspraak te maken zodat wij uw dossier kunnen opvragen.",
  },
  {
    question: "Hoe vraag ik een voorschrift of attest aan?",
    answer:
      "Voor voorschriften en attesten gelieve steeds een afspraak te maken — bij voorkeur online. Zo kunnen wij uw gezondheidstoestand beter opvolgen.",
  },
  {
    question: "Welke betaalmethoden worden aanvaard?",
    answer:
      "Betalingen zijn mogelijk via contant geld, bankapp (QR-code scannen) en Payconiq.",
  },
  {
    question: "Wat zijn videoconsultaties?",
    answer:
      "Sinds telefonische consultaties vanuit hogerhand zijn afgeschaft, bieden wij videoconsultaties aan als volwaardig alternatief. U wordt op een efficiënte en veilige manier ondersteund zonder fysiek naar de praktijk te komen. Meer info op de pagina Videoconsultaties.",
  },
  {
    question: "Hoe bekijk ik mijn laboresultaten?",
    answer:
      "Laboresultaten worden zoveel mogelijk meegedeeld via de webapplicatie Helena. Ga naar de pagina Helena op onze website voor instructies en de link.",
  },
  {
    question: "Wat moet ik doen bij spoed buiten de spreekuren?",
    answer:
      "Bel eerst uw huisarts op 09 384 48 70. In het weekend (vrijdag 19u tot maandag 8u) en op feestdagen: bel 1733 voor de wachtdienst. Bij levensbedreigende situaties: bel 112.",
  },
  {
    question: "Komen jullie aan huis voor huisbezoeken?",
    answer: `Huisbezoeken zijn mogelijk wanneer u niet naar de praktijk kunt komen. Bel de praktijk op ${PRACTICE.phone} om dit te bespreken. ${FORMER_CONSULTING_DOCTOR.note}`,
  },
];
