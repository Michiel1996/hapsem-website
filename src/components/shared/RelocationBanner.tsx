import { RELOCATION } from "@/lib/constants";

interface RelocationBannerProps {
  /** Toon ook info over toekomstige uitbreiding (Schoenen Fami) */
  showFutureLocation?: boolean;
  className?: string;
}

/** Opvallende melding over de verhuis vanaf 1 oktober 2026 */
export function RelocationBanner({
  showFutureLocation = false,
  className = "",
}: RelocationBannerProps) {
  return (
    <div
      role="note"
      className={`border-b border-amber-200 bg-gradient-to-r from-amber-50 via-amber-50/90 to-medical-50 px-4 py-4 sm:px-6 ${className}`}
    >
      <div className="container-wide flex gap-3">
        <span className="mt-0.5 shrink-0 text-amber-600" aria-hidden>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        <div className="text-sm leading-relaxed text-medical-800 sm:text-base">
          <p className="font-semibold text-medical-900">Belangrijke mededeling</p>
          <p className="mt-1">{RELOCATION.notice}</p>
          {showFutureLocation && (
            <p className="mt-3 text-medical-700">{RELOCATION.futureLocation}</p>
          )}
        </div>
      </div>
    </div>
  );
}
