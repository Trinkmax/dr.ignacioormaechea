"use client";

import { motion } from "framer-motion";
import { MessageCircle, Instagram, MapPin, Phone, Clock } from "lucide-react";
import { DOCTOR, WHATSAPP_LINK } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contacto" className="relative bg-midnight text-ivory py-20 md:py-40 overflow-hidden">
      {/* ambient glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(201,162,122,0.5), transparent 70%)" }}
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(212,184,150,0.4), transparent 70%)" }}
        />
      </div>

      <div className="container-editorial relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Title */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-rosegold" />
              <span className="eyebrow text-rosegold">Agenda tu consulta</span>
            </div>

            <h2 className="h-display text-ivory text-4xl sm:text-5xl md:text-7xl mb-6 md:mb-8 text-balance">
              Hablemos de <br />
              <span className="italic text-rosegold">vos</span>.
            </h2>

            <p className="text-body text-ivory/70 text-base md:text-lg max-w-md mb-8 md:mb-10">
              La primera consulta es el inicio. Un espacio para conversar, evaluar y diseñar
              juntos un plan a medida. Sin apuros. Sin promesas vacías.
            </p>

            <div className="space-y-6">
              {/* WhatsApp primary */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 md:gap-5 p-4 md:p-6 bg-rosegold/10 border border-rosegold/30 hover:bg-rosegold hover:border-rosegold transition-all duration-500"
              >
                <span className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-rosegold flex items-center justify-center shrink-0 group-hover:bg-midnight transition-colors duration-500">
                  <span className="absolute inset-0 rounded-full bg-rosegold animate-pulse-ring" />
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-midnight group-hover:text-rosegold transition-colors duration-500" />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="eyebrow text-rosegold group-hover:text-midnight/70 transition-colors duration-500 text-[10px]">
                    WhatsApp
                  </div>
                  <div className="font-display text-xl sm:text-2xl md:text-3xl text-ivory group-hover:text-midnight transition-colors duration-500 truncate">
                    +54 9 {DOCTOR.whatsapp}
                  </div>
                </div>
                <span className="eyebrow text-ivory/60 group-hover:text-midnight transition-colors duration-500 hidden md:block">
                  Escribir →
                </span>
              </a>

              <a
                href={DOCTOR.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 md:gap-5 p-4 md:p-6 border border-ivory/15 hover:border-ivory/40 transition-all duration-500"
              >
                <span className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-ivory/30 flex items-center justify-center shrink-0 group-hover:bg-ivory group-hover:border-ivory transition-all duration-500">
                  <Instagram className="w-5 h-5 text-ivory group-hover:text-midnight transition-colors duration-500" />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="eyebrow text-ivory/50 text-[10px]">Instagram</div>
                  <div className="font-display text-lg sm:text-xl md:text-2xl text-ivory truncate">
                    {DOCTOR.instagramHandle}
                  </div>
                </div>
                <span className="eyebrow text-ivory/40 hidden md:block">Seguir →</span>
              </a>
            </div>
          </div>

          {/* Right: Location card */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative overflow-hidden border border-ivory/10 bg-charcoal/40 backdrop-blur-xl"
            >
              {/* Map placeholder */}
              <div className="relative aspect-[4/3] bg-charcoal overflow-hidden">
                <iframe
                  title="Clínica del Pilar — Santiago del Estero"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4905.257788516361!2d-64.26088703077623!3d-27.78611888939849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943b5210c397d6ad%3A0x74a08de921f9a33!2sCl%C3%ADnica%20del%20Pilar!5e0!3m2!1ses-419!2sar!4v1776962448474!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(92%) hue-rotate(180deg) grayscale(0.3) contrast(0.9)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-midnight/70 to-transparent pointer-events-none" />
              </div>

              <div className="p-8 md:p-10 space-y-6">
                <div>
                  <span className="eyebrow text-rosegold">Consultorio</span>
                  <h3 className="font-display text-3xl md:text-4xl text-ivory mt-2">
                    {DOCTOR.clinic}
                  </h3>
                </div>
                <div className="h-px bg-ivory/10" />
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <MapPin className="w-5 h-5 text-rosegold shrink-0 mt-0.5" />
                    <div>
                      <div className="eyebrow text-ivory/40 mb-1">Dirección</div>
                      <p className="text-ivory">{DOCTOR.address}</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Phone className="w-5 h-5 text-rosegold shrink-0 mt-0.5" />
                    <div>
                      <div className="eyebrow text-ivory/40 mb-1">Turnos</div>
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-ivory link-underline">
                        +54 9 {DOCTOR.whatsapp}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Clock className="w-5 h-5 text-rosegold shrink-0 mt-0.5" />
                    <div>
                      <div className="eyebrow text-ivory/40 mb-1">Atención</div>
                      <p className="text-ivory">Lunes a Viernes · Con turno previo</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
