import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/shared/JsonLd";
import { PRACTICE, SEO_KEYWORDS } from "@/lib/constants";

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
  title: {
    default: `${PRACTICE.shortName} | ${PRACTICE.name}`,
    template: `%s | ${PRACTICE.shortName}`,
  },
  description:
    "Huisartsenpraktijk Semmerzake (HAPSEM). Twee vaste huisartsen, sportgeneeskunde met Dr. Gianni Faelens, online afspraken via Medici. Praktijklocatie Dorpstraat 60, Semmerzake vanaf oktober 2026.",
  keywords: [...SEO_KEYWORDS],
  openGraph: {
    title: PRACTICE.name,
    description: PRACTICE.tagline,
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
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
