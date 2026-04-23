import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Italiana } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const script = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Ignacio Ormaechea — Cirujano Plástico | Santiago del Estero",
  description:
    "Más de 25 años transformando vidas. Cirugía plástica, estética y reconstructiva. Formado en Argentina, Brasil y Estados Unidos. Clínica del Pilar, Santiago del Estero.",
  keywords: [
    "cirujano plástico Santiago del Estero",
    "Dr. Ignacio Ormaechea",
    "cirugía de glúteos",
    "rinoplastia",
    "liposucción",
    "Clínica del Pilar",
  ],
  openGraph: {
    title: "Dr. Ignacio Ormaechea — Cirujano Plástico",
    description: "Arte y precisión. 25 años de excelencia quirúrgica.",
    type: "website",
    locale: "es_AR",
  },
};

export const viewport = {
  themeColor: "#F5F0E8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable} ${script.variable}`}>
      <body>{children}</body>
    </html>
  );
}
