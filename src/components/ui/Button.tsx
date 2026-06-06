import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-medical-600 text-white hover:bg-medical-700 shadow-soft hover:shadow-card",
  secondary:
    "bg-white text-medical-700 border border-medical-200 hover:border-medical-400 hover:bg-medical-50",
  outline:
    "border-2 border-medical-500 text-medical-600 hover:bg-medical-50",
  ghost: "text-medical-600 hover:bg-medical-50",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

/**
 * Herbruikbare knop — ondersteunt interne links (Next.js) en externe URLs.
 */
export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseClass = `inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-medical-400 focus:ring-offset-2 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClass}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
}
