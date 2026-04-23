import { DOCTOR, SERVICES } from "./data";

export const SITE = {
  url: "https://drignacioormaechea.com",
  name: "Dr. Ignacio Ormaechea — Cirujano Plástico",
  locale: "es_AR",
  language: "es-AR",
};

const PROCEDURE_TYPES: Record<string, "CosmeticProcedure" | "SurgicalProcedure" | "TherapeuticProcedure"> = {
  botox: "CosmeticProcedure",
  "acido-hialuronico": "CosmeticProcedure",
  rinomodelacion: "CosmeticProcedure",
  "hilos-tensores": "CosmeticProcedure",
  plasma: "TherapeuticProcedure",
  rinoplastia: "SurgicalProcedure",
  blefaroplastia: "SurgicalProcedure",
  "lifting-facial": "SurgicalProcedure",
  otoplastia: "SurgicalProcedure",
  "cirugia-mama": "SurgicalProcedure",
  "cirugia-gluteos": "SurgicalProcedure",
  liposuccion: "SurgicalProcedure",
  dermolipectomia: "SurgicalProcedure",
};

export function buildJsonLd() {
  const physician = {
    "@context": "https://schema.org",
    "@type": ["Physician", "LocalBusiness"],
    "@id": `${SITE.url}/#physician`,
    name: DOCTOR.name,
    alternateName: "Dr. José Ignacio Ormaechea",
    medicalSpecialty: ["PlasticSurgery", "CosmeticProcedure"],
    image: `${SITE.url}/images/doctor-congress.jpg`,
    url: SITE.url,
    description:
      "Cirujano plástico con más de 25 años de experiencia en Santiago del Estero, Argentina. Formado en Argentina, Brasil (Dr. Raúl González, Ribeirão Preto) y Estados Unidos. Especialista en cirugía estética, reconstructiva y medicina estética.",
    telephone: `+54${DOCTOR.whatsappIntl.slice(2)}`,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avellaneda 421",
      addressLocality: "Santiago del Estero",
      addressRegion: "Santiago del Estero",
      postalCode: "G4200",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -27.7861188,
      longitude: -64.2608870,
    },
    hasMap: "https://maps.google.com/?q=Cl%C3%ADnica+del+Pilar+Avellaneda+421+Santiago+del+Estero",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    sameAs: [DOCTOR.instagram],
    availableService: SERVICES.map((s) => ({
      "@type": PROCEDURE_TYPES[s.id] ?? "MedicalProcedure",
      name: s.title,
      description: s.blurb,
    })),
    memberOf: {
      "@type": "Organization",
      name: "Sociedad de Cirujanos Plásticos de Santiago del Estero",
      description: "Ex Presidente",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Universidad Nacional de Tucumán",
        address: { "@type": "PostalAddress", addressCountry: "AR" },
      },
    ],
    knowsAbout: [
      "Cirugía de glúteos",
      "Rinoplastia",
      "Liposucción",
      "Cirugía de mama",
      "Lifting facial",
      "Blefaroplastia",
      "Otoplastia",
      "Botox",
      "Ácido hialurónico",
      "Medicina estética",
      "Cirugía reconstructiva",
    ],
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE.url}/#clinic`,
    name: "Consultorio Dr. Ignacio Ormaechea · Clínica del Pilar",
    image: `${SITE.url}/images/mark.png`,
    url: SITE.url,
    telephone: `+54${DOCTOR.whatsappIntl.slice(2)}`,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avellaneda 421",
      addressLocality: "Santiago del Estero",
      addressRegion: "Santiago del Estero",
      postalCode: "G4200",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -27.7861188,
      longitude: -64.2608870,
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: SITE.language,
    publisher: { "@id": `${SITE.url}/#physician` },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Dr. Ormaechea", item: `${SITE.url}/#sobre` },
      { "@type": "ListItem", position: 3, name: "Tratamientos", item: `${SITE.url}/#servicios` },
      { "@type": "ListItem", position: 4, name: "Consulta", item: `${SITE.url}/#contacto` },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Dónde atiende el Dr. Ormaechea?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En la Clínica del Pilar, Avellaneda 421, Santiago del Estero, Argentina.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo se agenda una consulta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Por WhatsApp al +54 9 ${DOCTOR.whatsapp} o a través de Instagram ${DOCTOR.instagramHandle}.`,
        },
      },
      {
        "@type": "Question",
        name: "¿Qué tratamientos realiza?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cirugía de mama, glúteos, liposucción, dermolipectomía, rinoplastia, blefaroplastia, otoplastia, lifting facial; y tratamientos de medicina estética como botox, ácido hialurónico, rinomodelación, hilos tensores y plasma rico en plaquetas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es la formación del Dr. Ormaechea?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Más de 25 años de experiencia. Graduado de la Universidad Nacional de Tucumán, residencia de un año en Ribeirão Preto, Brasil, con el Dr. Raúl González. Experiencia en Estados Unidos y participación continua en congresos europeos. Ex presidente de la Sociedad de Cirujanos Plásticos de Santiago del Estero.",
        },
      },
    ],
  };

  return [website, physician, organization, breadcrumb, faq];
}
