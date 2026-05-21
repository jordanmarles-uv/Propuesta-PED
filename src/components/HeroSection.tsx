"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  BarChart3,
  Building2,
  FileText,
  MessageSquareText,
  Target,
  Users,
} from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { asset } from "@/lib/assetPath";

const HERO_STATS = [
  { icon: Users, value: 33, label: "programas estratégicos", suffix: "" },
  { icon: Building2, value: 11, label: "campus regionales", suffix: "" },
  { icon: BarChart3, value: 7, label: "desafíos institucionales", suffix: "" },
];

function HeroStat({ icon: Icon, value, label, suffix, delay }: {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix: string;
  delay: number;
}) {
  const count = useCountUp(value, 2.5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="stat-hero"
    >
      <Icon size={20} className="mx-auto mb-2 text-uv-gold-light" />
      <p className="metric-value text-2xl text-white">
        {value > 1000 ? count.toLocaleString("es-CO") : count}
        <span className="text-base font-normal text-white/60">{suffix}</span>
      </p>
      <p className="text-xs text-white/50 mt-1">{label}</p>
    </motion.div>
  );
}

export default function HeroSection() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen section-hero overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Usamos la imagen hero-campus-aerial.jpg de fondo con overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${asset("/media/hero-campus-aerial.jpg")}')`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(43, 17, 24, 0.85) 48%, rgba(93, 7, 23, 0.95) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(180deg, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide mx-auto min-h-screen px-4 sm:px-6 pt-28 pb-20 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center w-full">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mb-7"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/10 text-uv-gold-light border border-white/15 backdrop-blur-sm">
                Universidad del Valle
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.75 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.04] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Plan Estratégico de Desarrollo <span className="text-uv-gold-light">2025 - 2035</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48 }}
              className="text-base sm:text-lg text-white/72 max-w-2xl mb-8 leading-relaxed"
            >
              La hoja de ruta multicampus para la próxima década. Construida con la participación de todos los estamentos para consolidar nuestro liderazgo académico, científico y social en la región.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <button
                onClick={() => handleScroll("#desafios")}
                className="btn-hero-primary"
              >
                Explorar los 7 Desafíos
                <ArrowDown size={18} />
              </button>
              <button
                onClick={() => handleScroll("#participa")}
                className="btn-hero-secondary"
              >
                <MessageSquareText size={16} />
                Aportar una idea
              </button>
            </motion.div>

            <div className="grid grid-cols-3 gap-3 sm:gap-5 max-w-xl">
              {HERO_STATS.map((stat, i) => (
                <HeroStat key={stat.label} {...stat} delay={0.85 + i * 0.12} />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.75 }}
            className="rounded-[2rem] border border-white/15 bg-white/10 p-4 sm:p-6 backdrop-blur-md shadow-2xl"
          >
            <div className="rounded-[1.5rem] bg-white text-foreground p-5 sm:p-7">
              <div className="flex items-center justify-between gap-4 mb-7">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-uv-red">
                    Hoja de Ruta Institucional
                  </p>
                  <h2
                    className="text-2xl font-extrabold mt-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    La visión toma forma
                  </h2>
                </div>
                <Target className="text-uv-red" size={28} />
              </div>

              <div className="grid gap-3">
                {[
                  ["Diagnóstico", "Lectura precisa de nuestras brechas y fortalezas territoriales."],
                  ["Participación", "Más de 7,000 voces en foros, encuestas y mesas de trabajo."],
                  ["Formulación", "Construcción colectiva de estrategias e indicadores medibles."],
                  ["Implementación", "Seguimiento permanente y rendición de cuentas pública."],
                ].map(([title, text], index) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 rounded-xl border border-border-light bg-bg-secondary p-4"
                  >
                    <span className="w-8 h-8 rounded-full bg-uv-red text-white flex items-center justify-center text-sm font-bold shrink-0">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-bold text-sm">{title}</p>
                      <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <a href="#multimedia" className="rounded-xl bg-uv-red-subtle p-4 hover:bg-uv-red hover:text-white transition-colors cursor-pointer group">
                  <FileText size={20} className="text-uv-red mb-2 group-hover:text-white transition-colors" />
                  <p className="text-xs font-semibold text-uv-red group-hover:text-white transition-colors">
                    Leer el Tomo Oficial
                  </p>
                </a>
                <a href="#actualidad" className="rounded-xl bg-uv-gold-subtle p-4 hover:bg-uv-gold hover:text-white transition-colors cursor-pointer group">
                  <BarChart3 size={20} className="text-uv-gold mb-2 group-hover:text-white transition-colors" />
                  <p className="text-xs font-semibold text-uv-gold group-hover:text-white transition-colors">
                    Dashboard de Seguimiento
                  </p>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
