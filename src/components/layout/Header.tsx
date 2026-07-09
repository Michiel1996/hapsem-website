"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_PRIMARY, NAV_PATIENT_MENU, NAV_LINKS, PRACTICE } from "@/lib/constants";
import { AppointmentButton } from "@/components/ui/AppointmentButton";
import { Logo } from "@/components/layout/Logo";

/**
 * Vaste navigatiebalk — desktop met "Voor patiënten"-dropdown, responsive mobiel menu.
 */
export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [patientMenuOpen, setPatientMenuOpen] = useState(false);
  const patientMenuRef = useRef<HTMLDivElement>(null);

  // Sluit menu's bij navigatie
  useEffect(() => {
    setMenuOpen(false);
    setPatientMenuOpen(false);
  }, [pathname]);

  // Sluit dropdown bij klik buiten of Escape
  useEffect(() => {
    if (!patientMenuOpen) return;

    const onClick = (event: MouseEvent) => {
      if (!patientMenuRef.current?.contains(event.target as Node)) {
        setPatientMenuOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPatientMenuOpen(false);
    };

    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [patientMenuOpen]);

  const isPatientPage = NAV_PATIENT_MENU.some((link) => link.href === pathname);

  const desktopLinkClass = (active: boolean) =>
    `whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      active
        ? "bg-medical-50 text-medical-700"
        : "text-medical-600 hover:bg-medical-50 hover:text-medical-800"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-medical-100/60 bg-white/90 backdrop-blur-md">
      <div className="container-wide flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" aria-label={`${PRACTICE.shortName} — naar de homepagina`}>
          <Logo />
        </Link>

        {/* Desktop navigatie */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hoofdnavigatie">
          {NAV_PRIMARY.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={desktopLinkClass(pathname === link.href)}
            >
              {link.label}
            </Link>
          ))}

          {/* Dropdown: Voor patiënten */}
          <div className="relative" ref={patientMenuRef}>
            <button
              type="button"
              className={`flex items-center gap-1 ${desktopLinkClass(isPatientPage)}`}
              onClick={() => setPatientMenuOpen(!patientMenuOpen)}
              aria-expanded={patientMenuOpen}
              aria-haspopup="true"
            >
              Voor patiënten
              <svg
                className={`h-4 w-4 transition-transform ${patientMenuOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {patientMenuOpen && (
              <div className="absolute left-0 top-full mt-2 w-60 rounded-2xl border border-medical-100 bg-white p-2 shadow-card">
                {NAV_PATIENT_MENU.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "bg-medical-50 text-medical-700"
                        : "text-medical-600 hover:bg-medical-50 hover:text-medical-800"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" className={desktopLinkClass(pathname === "/contact")}>
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <AppointmentButton size="sm" />
        </div>

        {/* Mobiel menu-knop */}
        <button
          type="button"
          className="rounded-lg p-2 text-medical-700 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
        >
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobiel menu */}
      {menuOpen && (
        <nav
          className="border-t border-medical-100 bg-white px-4 py-4 lg:hidden"
          aria-label="Mobiel menu"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-4 py-3 font-medium ${
                    pathname === link.href
                      ? "bg-medical-50 text-medical-700"
                      : "text-medical-600"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="flex flex-col gap-3 pt-4">
              <a
                href={PRACTICE.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-medical-200 bg-white px-6 py-3 font-medium text-medical-700 transition-colors hover:bg-medical-50"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel {PRACTICE.phone}
              </a>
              <AppointmentButton className="w-full justify-center" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
