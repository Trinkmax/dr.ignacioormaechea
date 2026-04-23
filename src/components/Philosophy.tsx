"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PILLARS = [
  {
    n: "01",
    title: "Identidad",
    text: "No imponer un modelo. Escuchar, leer cada rostro, cada cuerpo. Potenciar lo que ya te hace única.",
  },
  {
    n: "02",
    title: "Técnica",
    text: "25 años de práctica con las escuelas más rigurosas. Procedimientos seguros, planificados y reproducibles.",
  },
  {
    n: "03",
    title: "Arte",
    text: "La proporción, la luz, la simetría. La cirugía plástica como disciplina donde ciencia y sensibilidad conviven.",
  },
];

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section id="filosofia" ref={ref} className="relative bg-bone py-20 md:py-40 overflow-hidden">
      <div className="container-editorial relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          {/* Image left */}
          <motion.div style={{ y }} className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-midnight">
              <motion.div style={{ scale }} className="absolute inset-0">
                <Image
                  src="/images/surgery.jpg"
                  alt="Dr. Ormaechea en cirugía"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-b from-midnight/10 via-transparent to-midnight/60" />

              {/* Floating caption */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute bottom-6 left-6 right-6 flex items-end justify-between"
              >
                <div className="text-ivory">
                  <span className="eyebrow text-rosegold">En quirófano</span>
                  <p className="font-display italic text-xl md:text-2xl mt-1">Precisión milimétrica</p>
                </div>
                <span className="font-display text-5xl text-rosegold/70">✦</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Pillars */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-bronze" />
              <span className="eyebrow text-bronze">Filosofía</span>
            </div>

            <h2 className="h-display text-midnight text-4xl sm:text-5xl md:text-6xl mb-10 md:mb-14 text-balance">
              Tres principios que guían <span className="italic text-bronze">cada decisión</span>.
            </h2>

            <div className="space-y-10">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className="grid grid-cols-[auto_1fr] gap-6 pb-10 border-b border-midnight/15 last:border-b-0"
                >
                  <span className="font-display italic text-3xl md:text-4xl text-bronze">{p.n}</span>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-midnight mb-2 md:mb-3">{p.title}</h3>
                    <p className="text-body text-midnight/70 text-[15px] md:text-base max-w-md">{p.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
