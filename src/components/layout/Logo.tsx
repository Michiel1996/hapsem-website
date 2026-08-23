import Image from "next/image";
import { PRACTICE } from "@/lib/constants";

interface LogoProps {
  /** "light" voor donkere achtergronden (footer) — toont zegel op lichte cirkel */
  variant?: "default" | "light";
}

/**
 * Officieel HAPSEM-logo.
 * Header: horizontale banner (huis + kruis + hand + woordmerk).
 * Footer: cirkelzegel (past beter op donkere achtergrond).
 */
export function Logo({ variant = "default" }: LogoProps) {
  if (variant === "light") {
    return (
      <span className="inline-flex items-center gap-3">
        <Image
          src="/images/logo-hapsem-seal.webp"
          alt={`${PRACTICE.shortName} — ${PRACTICE.name}`}
          width={72}
          height={72}
          className="h-16 w-16 rounded-full bg-white shadow-soft sm:h-[72px] sm:w-[72px]"
          priority
        />
        <span className="flex flex-col leading-tight">
          <span className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
            {PRACTICE.shortName}
          </span>
          <span className="text-xs text-medical-200">{PRACTICE.name}</span>
        </span>
      </span>
    );
  }

  return (
    <Image
      src="/images/logo-hapsem.webp"
      alt={`${PRACTICE.shortName} — ${PRACTICE.name}`}
      width={240}
      height={80}
      className="h-10 w-auto sm:h-12"
      priority
    />
  );
}
