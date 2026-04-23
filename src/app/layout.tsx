import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Italiana } from "next/font/google";
import "./globals.css";
import { SITE, buildJsonLd } from "@/lib/seo";

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
  metadataBase: new URL(SITE.url),
  title: {
    default: "Dr. Ignacio Ormaechea · Cirujano Plástico en Santiago del Estero",
    template: "%s · Dr. Ignacio Ormaechea",
  },
  description:
    "Cirujano plástico con más de 25 años de experiencia. Cirugía estética, contorno corporal, medicina estética y reconstructiva. Clínica del Pilar, Santiago del Estero. Agendá tu consulta.",
  applicationName: "Dr. Ignacio Ormaechea",
  authors: [{ name: "Dr. José Ignacio Ormaechea" }],
  creator: "Dr. Ignacio Ormaechea",
  publisher: "Dr. Ignacio Ormaechea",
  generator: "Next.js",
  keywords: [
    "cirujano plástico Santiago del Estero",
    "cirujano plástico Argentina",
    "Dr. Ignacio Ormaechea",
    "Dr. José Ignacio Ormaechea",
    "cirugía de glúteos Santiago del Estero",
    "rinoplastia Santiago del Estero",
    "liposucción Santiago del Estero",
    "lifting facial",
    "blefaroplastia",
    "otoplastia",
    "cirugía de mama",
    "aumento mamario",
    "mastopexia",
    "abdominoplastia",
    "dermolipectomía",
    "botox",
    "ácido hialurónico",
    "rinomodelación",
    "hilos tensores",
    "plasma rico en plaquetas",
    "medicina estética",
    "cirugía reconstructiva",
    "Clínica del Pilar",
    "Avellaneda 421",
    "cirujano plástico NOA",
    "Raúl González glúteos Brasil",
  ],
  category: "health",
  classification: "Medical · Plastic Surgery",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE.url,
    languages: {
      "es-AR": SITE.url,
      "es": SITE.url,
    },
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: "Dr. Ignacio Ormaechea · Cirujano Plástico",
    description:
      "Arte y precisión quirúrgica. Más de 25 años transformando vidas en Santiago del Estero. Formación en Argentina, Brasil y Estados Unidos.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Ignacio Ormaechea — Cirujano Plástico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Ignacio Ormaechea · Cirujano Plástico",
    description:
      "Más de 25 años de excelencia en cirugía plástica. Santiago del Estero · Clínica del Pilar.",
    images: ["/og.jpg"],
  },
  verification: {
    google: "", // ← agregar Google Search Console token
  },
  other: {
    "geo.region": "AR-G",
    "geo.placename": "Santiago del Estero",
    "geo.position": "-27.7861188;-64.2608870",
    ICBM: "-27.7861188, -64.2608870",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F0E8" },
    { media: "(prefers-color-scheme: dark)", color: "#0E0E10" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = buildJsonLd();
  return (
    <html lang="es-AR" className={`${display.variable} ${sans.variable} ${script.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
