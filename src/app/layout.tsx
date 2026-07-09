import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/shared/JsonLd";
import { PRACTICE, SEO_KEYWORDS, SITE_URL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PRACTICE.name} (${PRACTICE.shortName}) | Huisarts Semmerzake & Gavere`,
    template: `%s | ${PRACTICE.shortName}`,
  },
  description:
    "Huisartsenpraktijk Semmerzake (HAPSEM) — huisarts in Semmerzake en Gavere. Twee vaste huisartsen, sportgeneeskunde met Dr. Gianni Faelens, online afspraken via Medici. Dorpstraat 60, Semmerzake vanaf oktober 2026.",
  keywords: [...SEO_KEYWORDS],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: `${PRACTICE.name} (${PRACTICE.shortName})`,
    description: PRACTICE.tagline,
    url: SITE_URL,
    siteName: PRACTICE.name,
    locale: "nl_BE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <a
          href="#inhoud"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-medical-700 focus:px-4 focus:py-2 focus:text-white"
        >
          Ga naar inhoud
        </a>
        <JsonLd />
        <Header />
        <main id="inhoud" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
