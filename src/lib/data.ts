export const DOCTOR = {
  name: "Dr. Ignacio Ormaechea",
  title: "Cirujano Plástico",
  location: "Santiago del Estero · Argentina",
  clinic: "Clínica del Pilar",
  address: "Avellaneda 421, Santiago del Estero",
  whatsapp: "3856096107",
  whatsappIntl: "5493856096107",
  instagram: "https://www.instagram.com/dr._joseignacioormaechea?igsh=aWhwOWE1bTVoMm5o",
  instagramHandle: "@dr._joseignacioormaechea",
};

export const WHATSAPP_LINK = `https://wa.me/${DOCTOR.whatsappIntl}?text=${encodeURIComponent(
  "Hola Dr. Ormaechea, me gustaría agendar una consulta."
)}`;

export const SERVICES = [
  {
    id: "botox",
    title: "Botox",
    category: "Medicina Estética",
    blurb:
      "Suavización natural de líneas de expresión. Resultados equilibrados, jamás artificiales.",
    icon: "sparkle",
  },
  {
    id: "acido-hialuronico",
    title: "Ácido Hialurónico",
    category: "Medicina Estética",
    blurb:
      "Volumen, hidratación y definición con productos de grado premium aplicados con criterio artístico.",
    icon: "droplet",
  },
  {
    id: "rinomodelacion",
    title: "Rinomodelación",
    category: "Medicina Estética",
    blurb:
      "Rediseño no quirúrgico del perfil nasal con ácido hialurónico. Sin quirófano, sin postoperatorio.",
    icon: "line",
  },
  {
    id: "hilos-tensores",
    title: "Hilos Tensores",
    category: "Medicina Estética",
    blurb:
      "Efecto lifting progresivo. Tensa, reposiciona y estimula colágeno desde dentro.",
    icon: "thread",
  },
  {
    id: "plasma",
    title: "Plasma Rico en Plaquetas",
    category: "Regeneración",
    blurb:
      "Bioestimulación celular con tu propia sangre. Piel más firme, luminosa y vital.",
    icon: "cell",
  },
  {
    id: "rinoplastia",
    title: "Rinoplastia",
    category: "Cirugía Facial",
    blurb:
      "Armonización nasal con lectura individual de cada rostro. Precisión milimétrica.",
    icon: "nose",
  },
  {
    id: "blefaroplastia",
    title: "Blefaroplastia",
    category: "Cirugía Facial",
    blurb:
      "Rejuvenecimiento de la mirada. Se devuelve frescura sin alterar la identidad.",
    icon: "eye",
  },
  {
    id: "lifting-facial",
    title: "Lifting Facial",
    category: "Cirugía Facial",
    blurb:
      "Reposicionamiento profundo de tejidos. El tiempo, en silencio, vuelve atrás.",
    icon: "face",
  },
  {
    id: "otoplastia",
    title: "Otoplastia",
    category: "Cirugía Facial",
    blurb:
      "Corrección de orejas prominentes. Una cirugía breve que cambia cómo uno se mira.",
    icon: "ear",
  },
  {
    id: "cirugia-mama",
    title: "Cirugía de Mama",
    category: "Cirugía Corporal",
    blurb:
      "Aumento, reducción, mastopexia. Diseñadas según tu anatomía, tus proporciones, tu deseo.",
    icon: "mama",
  },
  {
    id: "cirugia-gluteos",
    title: "Cirugía de Glúteos",
    category: "Cirugía Corporal",
    blurb:
      "Formación con el Dr. Raúl González en Ribeirão Preto. Escuela del mejor cirujano de glúteos del mundo.",
    icon: "curve",
    featured: true,
  },
  {
    id: "liposuccion",
    title: "Liposucción",
    category: "Cirugía Corporal",
    blurb:
      "Esculpir el cuerpo con técnica y visión. Cada contorno, trazado con intención.",
    icon: "contour",
  },
  {
    id: "dermolipectomia",
    title: "Dermolipectomía",
    category: "Cirugía Corporal",
    blurb:
      "Abdominoplastia. Recupera la arquitectura del torso tras embarazos o pérdida de peso.",
    icon: "ribbon",
  },
];

export const JOURNEY = [
  {
    year: "1998",
    place: "Tucumán · Argentina",
    title: "Formación Médica",
    text: "Se gradúa en la Universidad Nacional de Tucumán, una de las escuelas de medicina más prestigiosas del país.",
  },
  {
    year: "2001",
    place: "Ribeirão Preto · Brasil",
    title: "Residencia con el Dr. Raúl González",
    text: "Un año de entrenamiento intensivo junto al mayor referente mundial en cirugía de glúteos. Una escuela quirúrgica irrepetible.",
  },
  {
    year: "2005",
    place: "Estados Unidos",
    title: "Experiencia Internacional",
    text: "Trabaja en instituciones estadounidenses ampliando su dominio técnico y su visión estética global.",
  },
  {
    year: "2010 — Hoy",
    place: "Europa",
    title: "Congresos y Actualización Permanente",
    text: "Participa año tras año en los principales congresos europeos de cirugía plástica. Nunca deja de estudiar.",
  },
  {
    year: "Presidencia",
    place: "Santiago del Estero",
    title: "Sociedad de Cirujanos Plásticos",
    text: "Presidió la Sociedad de Cirujanos Plásticos de Santiago del Estero, aportando a la formación de nuevas generaciones.",
  },
  {
    year: "Siempre",
    place: "Hospital Público",
    title: "Cirugía Reconstructiva",
    text: "En paralelo a la estética, ejerce cirugía reconstructiva en el hospital. Porque la cirugía plástica también es devolver dignidad.",
  },
];

export const STATS = [
  { value: "25+", label: "Años de trayectoria" },
  { value: "4", label: "Países de formación" },
  { value: "1000+", label: "Pacientes atendidos" },
  { value: "∞", label: "Obsesión por el detalle" },
];
