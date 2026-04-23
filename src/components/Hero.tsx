"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] flex items-end overflow-hidden gradient-champagne grain"
    >
      {/* Animated organic blob background */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 pointer-events-none"
      >
        <svg
          className="absolute -right-[20%] -top-[10%] w-[100%] h-[120%] opacity-40"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4B896" />
              <stop offset="100%" stopColor="#C9A27A" />
            </linearGradient>
          </defs>
          <motion.path
            fill="url(#blobGrad)"
            animate={{
              d: [
                "M421,326Q390,402,308,436Q226,470,153,419Q80,368,77,282Q74,196,144,144Q214,92,299,93Q384,94,429,174Q474,254,421,326Z",
                "M440,320Q420,410,335,440Q250,470,165,425Q80,380,90,285Q100,190,170,135Q240,80,320,95Q400,110,440,195Q480,280,440,320Z",
                "M421,326Q390,402,308,436Q226,470,153,419Q80,368,77,282Q74,196,144,144Q214,92,299,93Q384,94,429,174Q474,254,421,326Z",
              ],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        <svg
          className="absolute -left-[15%] bottom-[5%] w-[70%] h-[60%] opacity-30"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="blobGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EDE4D3" />
              <stop offset="100%" stopColor="#D4B896" />
            </linearGradient>
          </defs>
          <motion.path
            fill="url(#blobGrad2)"
            animate={{
              d: [
                "M400,300Q380,380,300,410Q220,440,150,380Q80,320,100,240Q120,160,200,120Q280,80,360,120Q440,160,430,240Q420,320,400,300Z",
                "M420,310Q390,400,310,420Q230,440,155,395Q80,350,95,260Q110,170,195,130Q280,90,365,130Q450,170,445,255Q440,340,420,310Z",
                "M400,300Q380,380,300,410Q220,440,150,380Q80,320,100,240Q120,160,200,120Q280,80,360,120Q440,160,430,240Q420,320,400,300Z",
              ],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      {/* Vertical label left */}
      <div className="hidden md:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-20">
        <div className="w-px h-20 bg-midnight/30" />
        <span className="eyebrow text-midnight/60 vertical-text" style={{ writingMode: "vertical-rl" }}>
          Est. 2000 · Santiago del Estero
        </span>
        <div className="w-px h-20 bg-midnight/30" />
      </div>

      {/* Vertical label right */}
      <div className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-20">
        <span className="eyebrow text-midnight/60" style={{ writingMode: "vertical-rl" }}>
          Arte · Precisión · Identidad
        </span>
      </div>

      {/* Main hero content */}
      <motion.div
        style={{ y, opacity }}
        className="container-editorial relative z-10 pb-20 md:pb-32 pt-36 md:pt-40"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-12 h-px bg-midnight/40" />
          <p className="eyebrow text-bronze">
            <span className="sr-only">Dr. Ignacio Ormaechea, cirujano plástico en Santiago del Estero, Argentina — </span>
            Cirugía Plástica &amp; Estética
          </p>
        </motion.div>

        <h1 aria-label="Dr. Ignacio Ormaechea · Cirujano Plástico · La belleza como forma de arte" className="h-display text-midnight text-[16vw] sm:text-[13vw] md:text-[9.5vw] leading-[0.9] max-w-[1200px]">
          {"La belleza".split("").map((c, i) => (
            <motion.span
              key={`l1-${i}`}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.04, duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
              className="inline-block"
              style={{ whiteSpace: c === " " ? "pre" : "normal" }}
            >
              {c}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="italic text-bronze font-light"
          >
            como{" "}
          </motion.span>
          {"forma".split("").map((c, i) => (
            <motion.span
              key={`l2-${i}`}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ delay: 1.3 + i * 0.05, duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
              className="inline-block italic text-bronze font-light"
            >
              {c}
            </motion.span>
          ))}
          <br />
          {"de arte.".split("").map((c, i) => (
            <motion.span
              key={`l3-${i}`}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ delay: 1.6 + i * 0.04, duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
              className="inline-block"
              style={{ whiteSpace: c === " " ? "pre" : "normal" }}
            >
              {c}
            </motion.span>
          ))}
        </h1>

        <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.9 }}
            className="text-body text-midnight/70 text-base md:text-lg leading-relaxed"
          >
            Más de 25 años transformando cuerpos y rostros con una visión quirúrgica
            formada entre Argentina, Brasil y Estados Unidos. Resultados naturales,
            proporcionados, inconfundiblemente tuyos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.9 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-full sm:w-auto justify-center items-center gap-3 px-7 py-4 bg-midnight text-ivory font-sans uppercase tracking-widest2 text-xs overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-3">
                <MessageCircle className="w-4 h-4" />
                Agendar consulta
              </span>
              <span className="absolute inset-0 bg-rosegold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
            <a href="#servicios" className="inline-flex w-full sm:w-auto justify-center items-center gap-3 px-7 py-4 border border-midnight/30 text-midnight font-sans uppercase tracking-widest2 text-xs transition-all duration-500 hover:border-midnight hover:bg-midnight hover:text-ivory">
              Ver tratamientos
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator - desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="hidden md:flex absolute bottom-8 right-6 md:right-12 flex-col items-center gap-3 z-20"
      >
        <span className="eyebrow text-midnight/50 rotate-90 origin-bottom-right absolute -top-16 right-2 whitespace-nowrap">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-midnight/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
