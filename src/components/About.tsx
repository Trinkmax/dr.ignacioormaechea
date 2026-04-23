"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { STATS } from "@/lib/data";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="sobre" ref={ref} className="relative bg-porcelain py-20 md:py-40 overflow-hidden">
      <div className="container-editorial relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Image column */}
          <motion.div style={{ y: imgY }} className="lg:col-span-5 lg:sticky lg:top-32 order-1 lg:order-none">
            <div className="relative aspect-portrait overflow-hidden bg-bone">
              <motion.div
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.6, ease: [0.77, 0, 0.175, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/doctor-congress.jpg"
                  alt="Dr. Ignacio Ormaechea en congreso internacional"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-ivory">
                <span className="eyebrow text-rosegold">Merz Aesthetics Congress</span>
                <p className="font-display italic text-lg mt-1">
                  Actualización continua a nivel internacional
                </p>
              </div>
            </div>

            {/* Floating signature block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-8 flex items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full border border-midnight/20 flex items-center justify-center shrink-0">
                <span className="font-display italic text-2xl text-bronze">IO</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest2 text-stone">M.P. Cirujano Plástico</p>
                <p className="font-display text-lg text-midnight mt-1">Dr. José Ignacio Ormaechea</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text column */}
          <motion.div style={{ y: textY }} className="lg:col-span-7 lg:pt-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-bronze" />
              <span className="eyebrow text-bronze">Quién es el Dr. Ormaechea</span>
            </div>

            <h2 className="h-display text-midnight text-4xl sm:text-5xl md:text-7xl mb-8 md:mb-10 text-balance">
              Un cirujano formado <br className="hidden sm:block" />
              donde la cirugía <span className="italic text-bronze">se hace arte</span>.
            </h2>

            <div className="space-y-5 md:space-y-6 text-body text-midnight/75 text-base md:text-lg max-w-2xl">
              <p>
                Graduado con honores en la <strong className="text-midnight font-normal">Universidad Nacional de Tucumán</strong>,
                inició su camino quirúrgico con una convicción: la cirugía plástica no termina
                en el bisturí, empieza en la mirada.
              </p>
              <p>
                Esa búsqueda lo llevó a <strong className="text-midnight font-normal">Ribeirão Preto, Brasil</strong>,
                donde realizó una residencia de un año junto al <em className="text-bronze">Dr. Raúl González</em>,
                considerado el mejor cirujano de glúteos del mundo.
              </p>
              <p>
                Trabajó en <strong className="text-midnight font-normal">Estados Unidos</strong>, asiste a los principales
                <strong className="text-midnight font-normal"> congresos europeos</strong> cada año y presidió la
                Sociedad de Cirujanos Plásticos de Santiago del Estero. En paralelo, ejerce
                cirugía reconstructiva en el hospital público — porque la cirugía plástica,
                en su raíz, también devuelve identidad.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 pt-8 md:pt-10 border-t border-midnight/10">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.12 }}
                >
                  <div className="font-display text-3xl sm:text-4xl md:text-5xl text-midnight">{s.value}</div>
                  <div className="eyebrow text-stone mt-2 text-[10px]">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
