import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { PRACTICE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description:
    "Hoe Huisartsenpraktijk Semmerzake (HAPSEM) omgaat met uw persoonsgegevens en medisch dossier — conform de GDPR/AVG.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacyverklaring"
        subtitle="Hoe wij zorgvuldig omgaan met uw persoonsgegevens."
      />

      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <div className="mx-auto max-w-3xl space-y-10 text-medical-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-medical-900">
                Wie is verantwoordelijk voor uw gegevens?
              </h2>
              <p className="mt-3">
                {PRACTICE.name} ({PRACTICE.shortName}) is de
                verwerkingsverantwoordelijke voor de persoonsgegevens die in het
                kader van uw zorg en via deze website worden verwerkt.
              </p>
              <address className="mt-3 not-italic">
                {PRACTICE.name}
                <br />
                {PRACTICE.address.street}, {PRACTICE.address.postal}
                <br />
                <a href={PRACTICE.emailHref} className="text-medical-700 font-medium hover:underline">
                  {PRACTICE.email}
                </a>{" "}
                ·{" "}
                <a href={PRACTICE.phoneHref} className="text-medical-700 font-medium hover:underline">
                  {PRACTICE.phone}
                </a>
              </address>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-medical-900">
                Welke gegevens verwerken wij?
              </h2>
              <ul className="mt-3 list-inside list-disc space-y-2">
                <li>
                  <strong>Uw medisch dossier</strong> — als huisartsenpraktijk zijn
                  wij wettelijk verplicht een patiëntendossier (o.a. het Globaal
                  Medisch Dossier) bij te houden met uw identificatiegegevens en
                  gezondheidsgegevens.
                </li>
                <li>
                  <strong>Contactgegevens</strong> — naam, telefoonnummer en
                  e-mailadres wanneer u contact opneemt of een afspraak maakt.
                </li>
                <li>
                  <strong>Via deze website</strong> — wij verzamelen zelf geen
                  persoonsgegevens via deze website; er zijn geen accounts,
                  formulieren of analytische tracking-cookies.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-medical-900">
                Externe platformen
              </h2>
              <p className="mt-3">
                Online afspraken verlopen via <strong>Medici</strong> en
                laboresultaten raadpleegt u via <strong>Helena</strong>. Wanneer u
                deze platformen gebruikt, verwerken zij uw gegevens volgens hun
                eigen privacybeleid. Op de contactpagina tonen wij een kaart van
                Google Maps; daarbij kan Google cookies plaatsen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-medical-900">
                Waarom en op welke rechtsgrond?
              </h2>
              <p className="mt-3">
                Wij verwerken uw gegevens uitsluitend voor het verlenen van
                gezondheidszorg, de organisatie van de praktijk (afspraken,
                facturatie) en het naleven van onze wettelijke verplichtingen als
                zorgverleners. Gezondheidsgegevens worden verwerkt in het kader
                van de behandelrelatie, onder het medisch beroepsgeheim.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-medical-900">
                Delen wij uw gegevens?
              </h2>
              <p className="mt-3">
                Uw gegevens worden enkel gedeeld wanneer dat nodig is voor uw
                zorg: met andere behandelende zorgverleners (bv. bij verwijzing),
                laboratoria of via de beveiligde Belgische eHealth-diensten, en
                steeds binnen het beroepsgeheim. Uw gegevens worden nooit
                verkocht of gebruikt voor commerciële doeleinden.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-medical-900">
                Hoe lang bewaren wij uw dossier?
              </h2>
              <p className="mt-3">
                Patiëntendossiers worden bewaard volgens de wettelijke
                bewaartermijn voor medische dossiers in België (minimaal 30 jaar
                na het laatste patiëntencontact).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-medical-900">Uw rechten</h2>
              <p className="mt-3">
                U heeft het recht op inzage in uw dossier, verbetering van
                onjuiste gegevens en — binnen de grenzen van de wettelijke
                bewaarplicht — verwijdering of beperking van de verwerking.
                Neem hiervoor contact op via{" "}
                <a href={PRACTICE.emailHref} className="text-medical-700 font-medium hover:underline">
                  {PRACTICE.email}
                </a>
                . Bent u niet tevreden over hoe wij met uw gegevens omgaan, dan
                kunt u een klacht indienen bij de{" "}
                <a
                  href="https://www.gegevensbeschermingsautoriteit.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-medical-700 font-medium hover:underline"
                >
                  Gegevensbeschermingsautoriteit
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-medical-900">Beveiliging</h2>
              <p className="mt-3">
                Wij nemen passende technische en organisatorische maatregelen om
                uw gegevens te beschermen. Medische dossiers worden bijgehouden
                in beveiligde, voor de zorgsector erkende software en zijn enkel
                toegankelijk voor de zorgverleners van de praktijk.
              </p>
            </div>

            <p className="text-sm text-medical-500">
              Deze privacyverklaring kan worden aangepast. Laatste update: juli 2026.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
