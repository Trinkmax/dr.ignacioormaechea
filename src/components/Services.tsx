"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, WHATSAPP_LINK } from "@/lib/data";

const CATEGORIES = ["Todos", "Medicina Estética", "Cirugía Facial", "Cirugía Corporal", "Regeneración"];

export default function Services() {
  const [filter, setFilter] = useState("Todos");

  const filtered = filter === "Todos" ? SERVICES : SERVICES.filter((s) => s.category === filter);

  return (
    <section id="servicios" className="relative bg-ivory py-20 md:py-40">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-bronze" />
              <span className="eyebrow text-bronze">Tratamientos</span>
            </div>
            <h2 className="h-display text-midnight text-4xl sm:text-5xl md:text-7xl text-balance">
              Cada procedimiento, <br className="hidden sm:block" />
              una <span className="italic text-bronze">conversación</span> única.
            </h2>
          </div>
          <p className="text-body text-midnight/70 max-w-sm">
            No existen dos cuerpos iguales ni dos rostros idénticos. Cada plan se diseña
            individualmente, con el tiempo que merece.
          </p>
        </div>

        {/* Category filters — horizontal scroll on mobile */}
        <div className="-mx-5 sm:mx-0 mb-10 md:mb-14 pb-6 md:pb-8 border-b border-midnight/10 overflow-x-auto scrollbar-none">
          <div className="flex gap-2.5 md:gap-4 px-5 sm:px-0 whitespace-nowrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative shrink-0 px-4 md:px-5 py-2.5 text-[10px] md:text-[11px] uppercase tracking-widest2 transition-all duration-500 ${
                  filter === cat
                    ? "bg-midnight text-ivory"
                    : "text-midnight/60 hover:text-midnight border border-midnight/15 hover:border-midnight/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-midnight/10"
        >
          {filtered.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-12 border-t border-midnight/10"
        >
          <div>
            <p className="font-display italic text-2xl md:text-3xl text-midnight max-w-2xl text-balance">
              &ldquo;El objetivo no es transformarte. Es revelarte.&rdquo;
            </p>
            <p className="eyebrow text-bronze mt-3">— Dr. Ormaechea</p>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0">
            Agendar consulta
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof SERVICES[number]; index: number }) {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: (index % 6) * 0.06 }}
      className="group relative bg-ivory p-7 md:p-10 flex flex-col min-h-[240px] md:min-h-[280px] overflow-hidden cursor-pointer"
    >
      {/* Gold fill hover */}
      <span className="absolute inset-0 bg-midnight translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between gap-4 mb-8">
          <span className="eyebrow text-bronze group-hover:text-rosegold transition-colors duration-500">
            {service.category}
          </span>
          {service.featured && (
            <span className="text-[10px] uppercase tracking-widest2 px-2 py-1 bg-bronze/10 text-bronze group-hover:bg-rosegold/20 group-hover:text-rosegold transition-colors duration-500">
              Especialidad
            </span>
          )}
        </div>

        <h3 className="font-display text-[26px] md:text-4xl font-light text-midnight group-hover:text-ivory transition-colors duration-500 mb-3 md:mb-4 leading-tight">
          {service.title}
        </h3>

        <p className="text-body text-midnight/65 group-hover:text-ivory/70 transition-colors duration-500 text-[15px] mb-auto">
          {service.blurb}
        </p>

        <div className="mt-8 flex items-center justify-between">
          <span className="eyebrow text-midnight/50 group-hover:text-rosegold transition-colors duration-500">
            Consultar
          </span>
          <motion.span
            className="w-10 h-10 flex items-center justify-center border border-midnight/20 rounded-full text-midnight group-hover:bg-rosegold group-hover:border-rosegold group-hover:text-midnight transition-all duration-500"
          >
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
          </motion.span>
        </div>
      </div>
    </motion.a>
  );
}
