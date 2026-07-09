import { PRACTICE } from "@/lib/constants";

interface LogoProps {
  /** "light" voor donkere achtergronden (footer) */
  variant?: "default" | "light";
}

/**
 * Praktijklogo — beeldmerk (H-monogram met gouden accent) + woordmerk.
 * Zelfde vormtaal als het favicon (src/app/icon.svg).
 */
export function Logo({ variant = "default" }: LogoProps) {
  const light = variant === "light";

  return (
    <span className="flex items-center gap-3">
      <svg
        viewBox="0 0 512 512"
        className="h-10 w-10 shrink-0 sm:h-11 sm:w-11"
        aria-hidden
      >
        <defs>
          <linearGradient id="hapsem-logo-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3a6a82" />
            <stop offset="1" stopColor="#284556" />
          </linearGradient>
        </defs>
        <rect width="512" height="512" rx="112" fill="url(#hapsem-logo-bg)" />
        <text
          x="256"
          y="316"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="280"
          fontWeight="600"
          fill="#ffffff"
          textAnchor="middle"
        >
          H
        </text>
        <rect x="196" y="372" width="120" height="14" rx="7" fill="#c9a962" />
      </svg>
      <span className="flex flex-col leading-tight">
        <span
          className={`font-display text-xl font-semibold tracking-tight sm:text-2xl ${
            light ? "text-white" : "text-medical-800"
          }`}
        >
          {PRACTICE.shortName}
        </span>
        <span
          className={`text-xs ${
            light ? "block text-medical-200" : "hidden text-medical-500 sm:block"
          }`}
        >
          {PRACTICE.name}
        </span>
      </span>
    </span>
  );
}
