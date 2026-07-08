"use client";

// ✅ BEST PRACTICE: La sección Hero contiene todo el estado de la Flor de Loto.
// 📚 LEARN: El SVG se genera programáticamente. Ahora dividido en 2 columnas:
// 1. Textos, Logo, CTA (Izquierda).
// 2. Flor de Loto interactiva (Derecha).

import { useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DESAFIOS } from "@/data/desafios";
import { BookOpen, BarChart3 } from "lucide-react";
import {
  PETAL_VISUALS,
  PETAL_PATH,
  SVG_SIZE,
  SVG_CENTER,
  ANGLE_STEP,
} from "./lotusConfig";
import LotusDetailView from "./LotusDetailView";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
}

export default function LotusHeroSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const selectedDesafio = DESAFIOS.find((d) => d.id === selectedId) ?? null;

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 18 + 12,
        delay: Math.random() * 10,
        drift: (Math.random() - 0.5) * 30,
      })),
    [],
  );

  useEffect(() => {
    const t = setTimeout(() => setHasLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handlePetalClick = useCallback((id: number) => setSelectedId(id), []);
  const handleClose = useCallback(() => setSelectedId(null), []);

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-bg-primary"
    >
      {/* ═══ FONDO INSTITUCIONAL CLARO ═══ */}
      {/* Patrón de puntos sutil para textura limpia */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--border-medium) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Partículas flotantes sutiles en gris/rojo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-uv-red/5"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size * 2,
              height: p.size * 2,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, p.drift, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ═══ CONTENIDO PRINCIPAL ═══ */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Layout: en mobile columna única centrada; en desktop 2 columnas */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 items-center gap-8">
          
          {/* ── Textos y CTA ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left w-full"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-uv-red-subtle text-uv-red border border-uv-red/20 mb-6">
              Ruta Estratégica
            </span>
            
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary leading-[1.1] tracking-tight mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Plan Estratégico de Desarrollo
              <span className="block text-uv-red mt-2">
                2025 — 2035
              </span>
            </h1>
            
            <p 
              className="text-lg sm:text-xl font-bold tracking-widest text-text-secondary uppercase mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Universidad del Valle
            </p>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-4 max-w-lg mx-auto lg:mx-0">
              La hoja de ruta que guiará a la Universidad del Valle hacia la excelencia académica, la transformación digital y el compromiso regional en la próxima década.
            </p>

            {/* ✅ BEST PRACTICE: Llamado a la acción antes de los botones CTA para dar contexto a la flor */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col items-center lg:items-start gap-2 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              <p className="text-sm sm:text-base font-bold text-text-primary">
                Explora los 7 desafíos fundamentales que conforman nuestra visión institucional
              </p>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-uv-red bg-uv-red-subtle border border-uv-red/20 px-3 py-1 rounded-full">
                  👉 Toca cada pétalo para explorar
                </span>
                {/* Flecha apuntando hacia la flor en desktop */}
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  className="hidden lg:inline-block text-uv-red text-xl font-black"
                  aria-hidden="true"
                >
                  →
                </motion.span>
              </div>
            </motion.div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#contexto" className="btn-primary inline-flex items-center gap-2">
                <BookOpen size={16} />
                Conoce las bases
              </a>
              <a href="#cifras" className="btn-secondary inline-flex items-center gap-2">
                <BarChart3 size={16} />
                Ver Indicadores
              </a>
            </div>
          </motion.div>

          {/* ── Columna derecha / Loto ── */}
          <div className="w-full flex flex-col items-center gap-4">

            {/* SVG de la Flor — sin bloque de subtitulo encima */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[460px] sm:max-w-[620px] lg:max-w-[720px] mx-auto flex items-center justify-center"
              style={{ overflow: "visible" }}
          >
            <svg
              viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
              className="w-full h-auto drop-shadow-2xl"
              style={{ overflow: "visible" }}
              role="img"
              aria-label="Flor de Loto interactiva con los 7 desafíos estratégicos"
            >
              <defs>
                {DESAFIOS.map((d) => {
                  const v = PETAL_VISUALS[d.id];
                  return (
                    <linearGradient
                      key={`grad-${d.id}`}
                      id={`petal-grad-${d.id}`}
                      x1="0%"
                      y1="100%"
                      x2="0%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor={v.gradientFrom} stopOpacity="0.9" />
                      <stop offset="100%" stopColor={v.gradientTo} stopOpacity="1" />
                    </linearGradient>
                  );
                })}

                <filter id="lotus-glow" x="-80%" y="-80%" width="260%" height="260%">
                  <feGaussianBlur stdDeviation="15" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* ✅ BEST PRACTICE: Textura geométrica para el centro en lugar de blur */}
                <pattern id="center-texture" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <circle cx="2" cy="2" r="1.5" fill="var(--uv-red)" opacity="0.3" />
                  <circle cx="8" cy="8" r="1.5" fill="var(--uv-gold)" opacity="0.4" />
                </pattern>

                <linearGradient id="petal-shine" x1="30%" y1="0%" x2="70%" y2="100%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Anillo exterior decorativo */}
              <motion.circle
                cx={SVG_CENTER}
                cy={SVG_CENTER}
                r={440}
                fill="none"
                stroke="var(--border-medium)"
                strokeWidth="1.5"
                strokeDasharray="10 20"
                style={{ transformOrigin: `${SVG_CENTER}px ${SVG_CENTER}px` }}
                animate={{ rotate: 360 }}
                transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
              />

              {/* 7 PÉTALOS */}
              {DESAFIOS.map((desafio, i) => {
                const angle = i * ANGLE_STEP;
                const v = PETAL_VISUALS[desafio.id];
                const isHovered = hoveredId === desafio.id;
                const isOtherSelected = selectedId !== null && selectedId !== desafio.id;

                return (
                  <g
                    key={desafio.id}
                    transform={`translate(${SVG_CENTER}, ${SVG_CENTER}) rotate(${angle})`}
                  >
                    <motion.path
                      d={PETAL_PATH}
                      fill={v.glow}
                      filter="url(#lotus-glow)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 0.6 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ pointerEvents: "none" }}
                    />

                    <motion.path
                      d={PETAL_PATH}
                      fill={`url(#petal-grad-${desafio.id})`}
                      stroke="rgba(255,255,255,0.7)"
                      strokeWidth={isHovered ? 8 : 5}
                      style={{
                        cursor: "pointer",
                        transformOrigin: "0px -112px",
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: isOtherSelected ? 0.65 : hasLoaded ? 1 : 0,
                        opacity: isOtherSelected ? 0.15 : hasLoaded ? 1 : 0,
                      }}
                      whileHover={{ scale: 1.06, y: -10 }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 20,
                        delay: hasLoaded ? 0 : 0.8 + i * 0.1,
                      }}
                      onClick={() => handlePetalClick(desafio.id)}
                      onMouseEnter={() => setHoveredId(desafio.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Desafío ${desafio.id}: ${desafio.title}`}
                    />

                    <path
                      d={PETAL_PATH}
                      fill="url(#petal-shine)"
                      style={{ pointerEvents: "none" }}
                    />
                  </g>
                );
              })}

              {/* ── Centro del loto: diseño premium ── */}
              {/* Capa exterior decorativa */}
              <motion.circle
                cx={SVG_CENTER}
                cy={SVG_CENTER}
                r={120}
                fill="white"
                stroke="var(--border-medium)"
                strokeWidth="2"
                style={{ transformOrigin: `${SVG_CENTER}px ${SVG_CENTER}px` }}
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <circle
                cx={SVG_CENTER}
                cy={SVG_CENTER}
                r={120}
                fill="url(#center-texture)"
                style={{ pointerEvents: "none" }}
              />
              {/* Anillo interior */}
              <circle
                cx={SVG_CENTER}
                cy={SVG_CENTER}
                r={100}
                fill="white"
                stroke="var(--uv-red)"
                strokeWidth="3"
                strokeDasharray="6 8"
              />
              {/* Área de texto central rellena blanca para contraste */}
              <circle
                cx={SVG_CENTER}
                cy={SVG_CENTER}
                r={90}
                fill="white"
              />

              {/* Título central prominente */}
              <text
                x={SVG_CENTER}
                y={SVG_CENTER - 10}
                textAnchor="middle"
                fill="var(--uv-red)"
                fontSize="38"
                fontWeight="900"
                style={{ fontFamily: "var(--font-heading)", letterSpacing: "-1" }}
              >
                PED
              </text>
              <text
                x={SVG_CENTER}
                y={SVG_CENTER + 22}
                textAnchor="middle"
                fill="var(--text-primary)"
                fontSize="24"
                fontWeight="800"
                letterSpacing={2}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                2025–2035
              </text>
              {/* Quitar UNIVALLE del centro — solo PED + año */}

              {/* Labels D1..D7 ampliados */}
              {DESAFIOS.map((desafio, i) => {
                const angle = i * ANGLE_STEP;
                const angleRad = (angle * Math.PI) / 180;
                const r = 260; // Radio ajustado para los pétalos más grandes
                const x = SVG_CENTER + r * Math.sin(angleRad);
                const y = SVG_CENTER - r * Math.cos(angleRad);

                return (
                  <motion.text
                    key={`lbl-${desafio.id}`}
                    x={x}
                    y={y + 8}
                    textAnchor="middle"
                    fill="white"
                    fontSize="22"
                    fontWeight="800"
                    style={{ pointerEvents: "none", fontFamily: "var(--font-heading)" }}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredId === desafio.id ? 1 : hasLoaded ? 0.7 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    D{desafio.id}
                  </motion.text>
                );
              })}
            </svg>

            <AnimatePresence>
              {hoveredId !== null &&
                (() => {
                  const desafio = DESAFIOS.find((d) => d.id === hoveredId);
                  if (!desafio) return null;
                  const i = desafio.id - 1;
                  const angle = i * ANGLE_STEP;
                  const angleRad = (angle * Math.PI) / 180;
                  const tooltipR = 45;
                  const xPct = 50 + tooltipR * Math.sin(angleRad);
                  const yPct = 50 - tooltipR * Math.cos(angleRad);

                  return (
                    <motion.div
                      key={`tip-${hoveredId}`}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      transition={{ duration: 0.2 }}
                      className="absolute pointer-events-none z-20 px-6 py-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-border-light shadow-xl max-w-[220px] text-center"
                      style={{
                        left: `${xPct}%`,
                        top: `${yPct}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <p className="text-xs font-bold text-uv-red tracking-widest uppercase mb-1">
                        Desafío {desafio.id}
                      </p>
                      <p
                        className="text-sm font-bold text-text-primary"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {desafio.title}
                      </p>
                    </motion.div>
                  );
                })()}
            </AnimatePresence>
          </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedDesafio && (
          <LotusDetailView
            desafio={selectedDesafio}
            visual={PETAL_VISUALS[selectedDesafio.id]}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
