"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";
import { DOCTOR, WHATSAPP_LINK } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-midnight text-ivory border-t border-ivory/10">
      {/* Giant signature word */}
      <div className="overflow-hidden pt-16 md:pt-28">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="container-editorial"
        >
          <h3 className="font-display italic text-[22vw] md:text-[15vw] leading-[0.85] text-ivory/10 tracking-tightest">
            Ormaechea
          </h3>
        </motion.div>
      </div>

      <div className="container-editorial py-12 md:py-20 grid md:grid-cols-12 gap-10 md:gap-10 border-t border-ivory/10">
        <div className="md:col-span-5">
          <Image
            src="/images/logo-white.png"
            alt="Dr. Ignacio Ormaechea"
            width={220}
            height={70}
            className="h-14 w-auto object-contain mb-6"
          />
          <p className="text-body text-ivory/60 max-w-md mb-8">
            Cirujano Plástico especializado en estética facial, contorno corporal y cirugía
            reconstructiva. Clínica del Pilar, Santiago del Estero.
          </p>
          <div className="flex gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-ivory/20 hover:bg-rosegold hover:border-rosegold hover:text-midnight flex items-center justify-center transition-all duration-500"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={DOCTOR.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-ivory/20 hover:bg-rosegold hover:border-rosegold hover:text-midnight flex items-center justify-center transition-all duration-500"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="eyebrow text-rosegold mb-5">Navegación</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#sobre" className="link-underline text-ivory/80 hover:text-ivory">Dr. Ormaechea</a></li>
            <li><a href="#trayectoria" className="link-underline text-ivory/80 hover:text-ivory">Trayectoria</a></li>
            <li><a href="#servicios" className="link-underline text-ivory/80 hover:text-ivory">Tratamientos</a></li>
            <li><a href="#filosofia" className="link-underline text-ivory/80 hover:text-ivory">Filosofía</a></li>
            <li><a href="#contacto" className="link-underline text-ivory/80 hover:text-ivory">Consulta</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="eyebrow text-rosegold mb-5">Consultorio</h4>
          <address className="not-italic space-y-2 text-sm text-ivory/80">
            <p>{DOCTOR.clinic}</p>
            <p>{DOCTOR.address}</p>
            <p>{DOCTOR.location}</p>
            <p className="pt-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="link-underline">
                +54 9 {DOCTOR.whatsapp}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-ivory/10 py-8">
        <div className="container-editorial flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-[11px] uppercase tracking-widest2 text-ivory/40">
          <p>© {new Date().getFullYear()} Dr. Ignacio Ormaechea · Cirujano Plástico · M.P.</p>
          <p>Diseñado con obsesión por el detalle.</p>
        </div>
      </div>
    </footer>
  );
}
