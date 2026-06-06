import Image from "next/image";

export interface DoctorProfileFeaturedProps {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  paragraphs: readonly string[];
}

/**
 * Uitgebreid artsenprofiel — foto links, tekst rechts (desktop).
 * Op mobiel: foto boven de tekst.
 */
export function DoctorProfileFeatured({
  name,
  role,
  image,
  imageAlt,
  paragraphs,
}: DoctorProfileFeaturedProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-medical-100/80 bg-white shadow-card">
      <div className="grid gap-0 lg:grid-cols-[minmax(280px,2fr)_minmax(0,3fr)] lg:items-stretch">
        {/* Foto — links op desktop, boven op mobiel */}
        <div className="relative aspect-[4/5] min-h-[320px] bg-medical-50 lg:aspect-auto lg:min-h-[480px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-medical-900/10 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/20"
            aria-hidden
          />
        </div>

        {/* Tekst — rechts op desktop */}
        <div className="flex flex-col justify-center px-8 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-medical-900 sm:text-4xl">
            {name}
          </h2>
          <p className="mt-2 text-lg font-medium text-gold-500">{role}</p>

          <div className="mt-8 space-y-5 text-medical-600 leading-relaxed">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
