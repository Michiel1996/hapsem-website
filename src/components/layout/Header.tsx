"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, PRACTICE } from "@/lib/constants";
import { AppointmentButton } from "@/components/ui/AppointmentButton";

/**
 * Vaste navigatiebalk — responsive met mobiel menu.
 */
export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-medical-100/60 bg-white/90 backdrop-blur-md">
      <div className="container-wide flex h-18 items-center justify-between py-4">
        {/* Logo / praktijknaam */}
        <Link href="/" className="group flex flex-col">
          <span className="font-display text-xl font-semibold text-medical-800 transition-colors group-hover:text-medical-600 sm:text-2xl">
            {PRACTICE.shortName}
          </span>
          <span className="hidden text-xs text-medical-500 sm:block">
            {PRACTICE.name}
          </span>
        </Link>

        {/* Desktop navigatie */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hoofdnavigatie">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-medical-50 text-medical-700"
                  : "text-medical-600 hover:bg-medical-50 hover:text-medical-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
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
            <li className="pt-4">
              <AppointmentButton className="w-full justify-center" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
