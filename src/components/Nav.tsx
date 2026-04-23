"use client";

import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import Link from "next/link";
import { DOCTOR, WHATSAPP_LINK } from "@/lib/data";

const NAV_ITEMS = [
  { label: "Dr. Ormaechea", href: "#sobre" },
  { label: "Formación", href: "#trayectoria" },
  { label: "Tratamientos", href: "#servicios" },
  { label: "Filosofía", href: "#filosofia" },
  { label: "Consulta", href: "#contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
  });

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-porcelain/85 backdrop-blur-xl border-b border-midnight/5"
            : "bg-transparent"
        }`}
      >
        <div className="container-editorial flex items-center justify-between h-16 md:h-24">
          <Link href="#top" className="flex items-center gap-3 shrink-0 z-10">
            <Image
              src="/images/logo.png"
              alt="Dr. Ignacio Ormaechea"
              width={180}
              height={56}
              priority
              className="h-9 md:h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.6 }}
                className="link-underline text-[12px] uppercase tracking-widest2 text-midnight/80 hover:text-midnight"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-3 bg-midnight text-ivory text-[11px] uppercase tracking-widest2 hover:bg-rosegold hover:text-midnight transition-all duration-500"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Agendar
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-midnight text-ivory"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 text-midnight"
              aria-label="Abrir menú"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: open ? "0%" : "100%" }}
        transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
        className="fixed inset-0 z-[60] bg-midnight text-ivory flex flex-col"
      >
        <div className="flex items-center justify-between h-16 md:h-24 container-editorial">
          <Image
            src="/images/logo-white.png"
            alt="Dr. Ignacio Ormaechea"
            width={180}
            height={56}
            className="h-9 md:h-10 w-auto object-contain"
          />
          <button onClick={() => setOpen(false)} aria-label="Cerrar menú" className="p-2">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1 flex flex-col justify-center container-editorial gap-6 md:gap-8">
          {NAV_ITEMS.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: open ? 1 : 0, x: open ? 0 : 30 }}
              transition={{ delay: open ? 0.2 + i * 0.08 : 0, duration: 0.6 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tightest text-ivory hover:text-rosegold transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
          <div className="mt-8 md:mt-12 flex flex-col gap-2 text-sm text-ivory/60">
            <span className="eyebrow text-rosegold">Consulta</span>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-display">
              +54 9 {DOCTOR.whatsapp}
            </a>
            <span>{DOCTOR.address}</span>
          </div>
        </nav>
      </motion.div>
    </>
  );
}
