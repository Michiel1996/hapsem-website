interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

/** Consistente sectiekoppen op alle pagina's */
export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 md:mb-14 ${centered ? "text-center" : ""} ${className}`}
    >
      <h2 className="font-display text-3xl font-semibold tracking-tight text-medical-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-medical-600">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-medical-400 to-gold-400 ${centered ? "mx-auto" : ""}`}
        aria-hidden
      />
    </div>
  );
}
