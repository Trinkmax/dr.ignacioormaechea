"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { WHATSAPP_LINK } from "@/lib/data";

export default function WhatsAppFab() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setVisible(v > 500));

  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: visible ? 1 : 0, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 group"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
      <span className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300">
        <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 fill-white">
          <path d="M20.52 3.48A11.94 11.94 0 0012.04 0C5.46 0 .1 5.37.1 11.94c0 2.1.55 4.15 1.6 5.96L0 24l6.26-1.64a11.94 11.94 0 005.78 1.47h.01c6.58 0 11.94-5.37 11.94-11.94 0-3.19-1.24-6.19-3.47-8.41zM12.05 21.8h-.01a9.86 9.86 0 01-5.03-1.38l-.36-.21-3.72.97.99-3.62-.24-.37a9.86 9.86 0 01-1.5-5.25c0-5.45 4.43-9.88 9.88-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 012.89 6.99c0 5.45-4.43 9.88-9.89 9.88zm5.42-7.4c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.48.71.31 1.27.49 1.7.63.71.23 1.36.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z"/>
        </svg>
      </span>
      <span className="hidden md:block absolute top-1/2 right-full -translate-y-1/2 mr-4 px-4 py-2 bg-midnight text-ivory text-[10px] uppercase tracking-widest2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Agendar consulta
      </span>
    </motion.a>
  );
}
