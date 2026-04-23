"use client";

const PHRASES = [
  "Cirugía Plástica",
  "Estética Facial",
  "Contorno Corporal",
  "Medicina Regenerativa",
  "Reconstrucción",
  "25 Años de Excelencia",
  "Santiago del Estero",
];

export default function Marquee() {
  return (
    <section className="relative bg-midnight text-ivory py-8 md:py-14 overflow-hidden border-y border-rosegold/10">
      <div className="marquee-track animate-marquee">
        {[0, 1].map((loop) => (
          <div key={loop} className="flex items-center shrink-0">
            {PHRASES.map((p, i) => (
              <span
                key={`${loop}-${i}`}
                className="flex items-center font-display font-light text-4xl sm:text-5xl md:text-7xl italic text-ivory pr-10 md:pr-16 whitespace-nowrap"
              >
                {p}
                <span className="mx-6 md:mx-10 text-rosegold not-italic text-2xl md:text-5xl font-sans">
                  ◆
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
