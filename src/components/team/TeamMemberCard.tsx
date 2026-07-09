import Image from "next/image";

interface TeamMemberCardProps {
  name: string;
  role: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  imageCredit?: string;
  initials?: string;
  children?: React.ReactNode;
  variant?: "default" | "sport" | "note";
}

/** Herbruikbare teamkaart voor artsen en andere teamleden */
export function TeamMemberCard({
  name,
  role,
  description,
  image,
  imageAlt,
  imageCredit,
  initials,
  children,
  variant = "default",
}: TeamMemberCardProps) {
  const avatarClass =
    variant === "sport"
      ? "bg-gradient-to-br from-gold-400/30 to-medical-100"
      : variant === "note"
        ? "bg-gradient-to-br from-medical-100 to-medical-200"
        : "bg-gradient-to-br from-medical-100 to-medical-300";

  return (
    <article className="card-premium h-full text-center">
      {image ? (
        <div className="relative mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full ring-4 ring-medical-100">
          <Image
            src={image}
            alt={imageAlt ?? name}
            fill
            quality={95}
            className="object-cover object-top"
            sizes="224px"
          />
        </div>
      ) : (
        <div
          className={`mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full font-display text-3xl font-semibold text-medical-800 ${avatarClass}`}
        >
          {initials}
        </div>
      )}

      <h3 className="text-xl font-semibold text-medical-900">{name}</h3>
      <p className="mt-1 text-sm font-medium text-gold-500">{role}</p>

      {description && (
        <p className="mt-4 text-medical-600 leading-relaxed">{description}</p>
      )}

      {children}

      {imageCredit && (
        <p className="mt-4 text-xs text-medical-500">{imageCredit}</p>
      )}
    </article>
  );
}
