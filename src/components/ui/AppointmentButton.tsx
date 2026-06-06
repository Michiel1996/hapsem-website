import { MEDICI_APPOINTMENT_URL } from "@/lib/constants";
import { Button } from "./Button";

interface AppointmentButtonProps {
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

/**
 * Alle afspraakknoppen verwijzen naar Medici — nooit naar afspraken.be.
 */
export function AppointmentButton({
  label = "Maak online afspraak",
  size = "md",
  variant = "primary",
  className = "",
}: AppointmentButtonProps) {
  return (
    <Button
      href={MEDICI_APPOINTMENT_URL}
      external
      variant={variant}
      size={size}
      className={className}
    >
      <CalendarIcon />
      {label}
    </Button>
  );
}

function CalendarIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}
