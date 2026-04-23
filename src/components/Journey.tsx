"use client";

import { motion } from "framer-motion";
import { JOURNEY } from "@/lib/data";

export default function Journey() {
  return (
    <section id="trayectoria" className="relative bg-midnight text-ivory py-20 md:py-40 overflow-hidden">
      {/* Subtle gold gradient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(201,162,122,0.35), transparent 60%), radial-gradient(ellipse 60% 30% at 80% 100%, rgba(201,162,122,0.25), transparent 60%)",
        }}
      />
      <div className="container-editorial relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-rosegold" />
              <span className="eyebrow text-rosegold">Trayectoria</span>
            </div>
            <h2 className="h-display text-ivory text-4xl sm:text-5xl md:text-7xl text-balance max-w-3xl">
              Una escuela <span className="italic text-rosegold">construida</span> en tres continentes.
            </h2>
          </div>
          <p className="text-body text-ivory/70 max-w-sm">
            El oficio quirúrgico se transmite de maestro a discípulo. Cada uno de estos capítulos
            dejó una huella en la forma de operar del Dr. Ormaechea.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rosegold/0 via-rosegold/40 to-rosegold/0" />

          <div className="space-y-14 md:space-y-28">
            {JOURNEY.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.article
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative grid md:grid-cols-2 gap-6 md:gap-16 ${
                    isLeft ? "" : "md:[&>*:first-child]:col-start-2"
                  }`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-rosegold"
                  >
                    <span className="absolute inset-0 rounded-full bg-rosegold animate-pulse-ring" />
                  </motion.div>

                  <div className={`pl-10 md:pl-0 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:col-start-2"}`}>
                    <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 mb-3 ${isLeft ? "md:justify-end" : ""}`}>
                      <span className="font-display italic text-rosegold text-xl md:text-2xl">{item.year}</span>
                      <span className="eyebrow text-ivory/40 text-[10px]">{item.place}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-ivory mb-3 md:mb-4">
                      {item.title}
                    </h3>
                    <p className="text-body text-ivory/60 text-[15px] md:text-base max-w-md md:inline-block">
                      {item.text}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
