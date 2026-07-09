import Link from "next/link";
import { NAV_LINKS, PRACTICE, MEDICI_APPOINTMENT_URL } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-medical-100 bg-medical-900 text-medical-100">
      <div className="container-wide py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-xl font-semibold text-white">
              {PRACTICE.shortName}
            </h3>
            <p className="mt-2 text-sm text-medical-200">{PRACTICE.name}</p>
            <p className="mt-1 text-xs text-medical-300">
              {PRACTICE.address.label}
            </p>
            <address className="mt-4 not-italic text-sm leading-relaxed text-medical-200">
              {PRACTICE.address.street}
              <br />
              {PRACTICE.address.postal}
              <br />
              {PRACTICE.address.country}
            </address>
          </div>

          <div>
            <h4 className="font-semibold text-white">Navigatie</h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-medical-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-medical-200">
              <li>
                <a href={PRACTICE.phoneHref} className="transition-colors hover:text-white">
                  {PRACTICE.phone}
                </a>
              </li>
              <li>
                <a href={PRACTICE.emailHref} className="transition-colors hover:text-white">
                  {PRACTICE.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Online afspraken</h4>
            <p className="mt-4 text-sm text-medical-200">
              Plan uw consultatie eenvoudig online via Medici.
            </p>
            <a
              href={MEDICI_APPOINTMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-medical-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-medical-500"
            >
              Afspraak maken
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-medical-700 pt-8 text-center text-sm text-medical-300">
          © {currentYear} {PRACTICE.name}. Alle rechten voorbehouden. ·{" "}
          <Link href="/privacy" className="transition-colors hover:text-white underline">
            Privacyverklaring
          </Link>
        </div>
      </div>
    </footer>
  );
}
