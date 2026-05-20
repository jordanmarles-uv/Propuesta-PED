"use client";

// 📚 LEARN: Vista de detalle inmersiva para cada desafío del PED.
// Se abre como overlay fullscreen con transición de clipPath radial.
// Las 4 secciones (estrategias, programas, indicadores, presupuesto)
// tienen diseño editorial premium con data visualization animada.

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  X,
  ArrowLeft,
  Target,
  Layers,
  BarChart3,
  DollarSign,
  GraduationCap,
  FlaskConical,
  Globe,
  Heart,
  Leaf,
  Monitor,
  Landmark,
} from "lucide-react";
import type { IDesafio } from "@/types/ped";
import type { PetalVisual } from "./lotusConfig";

// ✅ BEST PRACTICE: Map de iconos centralizado
const ICONS: Record<string, React.ElementType> = {
  GraduationCap,
  FlaskConical,
  Globe,
  Heart,
  Leaf,
  Monitor,
  Landmark,
};

// ── Sub-componentes internos (no exportados) ──

// 📚 LEARN: Barra de progreso animada — funciona con cualquier tipo de dato
// (porcentajes, conteos, rankings, texto). Estima un porcentaje visual.
function IndicatorBar({
  label,
  base,
  target,
  color,
  delay,
}: {
  label: string;
  base: string;
  target: string;
  color: string;
  delay: number;
}) {
  const estimateProgress = (): number => {
    const pctMatch = target.match(/([\d,.]+)%/);
    if (pctMatch) return Math.min(parseFloat(pctMatch[1].replace(",", ".")), 100);
    if (target.includes("+")) return 75;
    if (target.includes("100") || target.toLowerCase().includes("todo")) return 92;
    if (target.includes("Top")) return 85;
    return 60;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-colors"
    >
      <p className="text-xs text-white/40 mb-4 leading-relaxed">{label}</p>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[10px] text-white/25 uppercase tracking-wider mb-0.5">
            Base
          </p>
          <p className="text-lg font-bold text-white/60">{base}</p>
        </div>
        <motion.span
          className="text-white/15 text-lg"
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          →
        </motion.span>
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: `${color}90` }}>
            Meta 2035
          </p>
          <p className="text-lg font-bold" style={{ color }}>
            {target}
          </p>
        </div>
      </div>
      <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
            boxShadow: `0 0 12px ${color}30`,
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${estimateProgress()}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

// Donut chart SVG para presupuesto
function DonutChart({
  percent,
  amount,
  color,
}: {
  percent: number;
  amount: string;
  color: string;
}) {
  const r = 78;
  const circumference = 2 * Math.PI * r;
  const dashLen = (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg width="220" height="220" viewBox="0 0 220 220" className="mb-6">
        {/* Track */}
        <circle
          cx="110"
          cy="110"
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="18"
        />
        {/* Progress arc */}
        <motion.circle
          cx="110"
          cy="110"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="18"
          strokeLinecap="round"
          strokeDasharray={`${dashLen} ${circumference - dashLen}`}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.2, delay: 0.4, ease: "easeOut" }}
          transform="rotate(-90, 110, 110)"
          opacity="0.85"
          style={{ filter: `drop-shadow(0 0 8px ${color}40)` }}
        />
        {/* Percentage text */}
        <text
          x="110"
          y="102"
          textAnchor="middle"
          fill="white"
          fontSize="36"
          fontWeight="800"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {percent}%
        </text>
        <text
          x="110"
          y="128"
          textAnchor="middle"
          fill="rgba(255,255,255,0.3)"
          fontSize="11"
          letterSpacing={2}
        >
          DEL TOTAL PED
        </text>
      </svg>
      <p
        className="text-3xl sm:text-4xl font-extrabold text-white"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {amount}
      </p>
      <p className="text-sm text-white/30 mt-2">Inversión estimada 2025 – 2035</p>
    </div>
  );
}

// ── Componente principal ──
interface LotusDetailViewProps {
  desafio: IDesafio;
  visual: PetalVisual;
  onClose: () => void;
}

export default function LotusDetailView({
  desafio,
  visual,
  onClose,
}: LotusDetailViewProps) {
  const Icon = ICONS[desafio.iconName] ?? Target;

  // ✅ BEST PRACTICE: Bloquear scroll del body y cerrar con Escape.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ═══ Background con expansión radial ═══ */}
      <motion.div
        className="fixed inset-0"
        style={{
          background: `linear-gradient(145deg, ${visual.bgDark} 0%, #08080f 45%, ${visual.bgDark}80 100%)`,
        }}
        initial={{ clipPath: "circle(0% at 50% 40%)" }}
        animate={{ clipPath: "circle(155% at 50% 40%)" }}
        exit={{ clipPath: "circle(0% at 50% 40%)" }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Pattern overlay */}
      <div
        className="fixed inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* ═══ Controles ═══ */}
      <motion.button
        className="fixed top-5 left-5 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/[0.05] border border-white/[0.08] backdrop-blur-xl text-white/50 hover:text-white hover:bg-white/[0.1] transition-all text-sm"
        onClick={onClose}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        aria-label="Volver a la flor de loto"
      >
        <ArrowLeft size={16} />
        <span className="hidden sm:inline">Volver</span>
      </motion.button>

      <motion.button
        className="fixed top-5 right-5 sm:top-6 sm:right-6 z-50 p-3 rounded-2xl bg-white/[0.05] border border-white/[0.08] backdrop-blur-xl text-white/50 hover:text-white hover:bg-white/[0.1] transition-all"
        onClick={onClose}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        aria-label="Cerrar detalle del desafío"
      >
        <X size={20} />
      </motion.button>

      {/* ═══ Contenido scrollable ═══ */}
      <div className="relative z-10 min-h-screen">
        {/* ──────── HERO HEADER ──────── */}
        <section className="min-h-[65vh] sm:min-h-[70vh] flex items-center px-6 sm:px-12 lg:px-20 pt-20">
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative"
            >
              {/* Número decorativo grande */}
              <span
                className="absolute -left-2 sm:-left-6 -top-10 sm:-top-16 text-[100px] sm:text-[160px] lg:text-[200px] font-black leading-none select-none pointer-events-none"
                style={{
                  color: visual.gradientFrom,
                  opacity: 0.04,
                  fontFamily: "var(--font-heading)",
                }}
              >
                {desafio.id}
              </span>

              <span
                className="relative inline-block px-3.5 py-1 rounded-full text-[10px] font-semibold tracking-[0.2em] uppercase border mb-6"
                style={{
                  color: visual.gradientFrom,
                  borderColor: `${visual.gradientFrom}35`,
                  background: `${visual.gradientFrom}0D`,
                }}
              >
                Desafío {desafio.id} de 7
              </span>

              <h2
                className="relative text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-[1.08] mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {desafio.title}
              </h2>

              <p className="text-sm sm:text-base text-white/40 leading-relaxed max-w-2xl">
                {desafio.objective}
              </p>
            </motion.div>

            {/* Icono grande decorativo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.7, duration: 1, type: "spring", damping: 15 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div
                className="relative w-44 h-44 xl:w-52 xl:h-52 rounded-[3rem] flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${visual.gradientFrom}18, ${visual.gradientTo}0A)`,
                  boxShadow: `0 0 100px ${visual.glow}12, inset 0 1px 0 rgba(255,255,255,0.08)`,
                  border: `1px solid ${visual.gradientFrom}20`,
                }}
              >
                <Icon
                  size={80}
                  style={{ color: visual.gradientFrom }}
                  strokeWidth={1.2}
                />
                {/* Halo animado */}
                <motion.div
                  className="absolute inset-0 rounded-[3rem]"
                  style={{ border: `2px solid ${visual.gradientFrom}12` }}
                  animate={{ scale: [1, 1.18, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ──────── ESTRATEGIAS ──────── */}
        <section className="px-6 sm:px-12 lg:px-20 py-14 sm:py-20">
          <div className="max-w-6xl mx-auto">
            <SectionLabel
              icon={Target}
              title="Estrategias"
              color={visual.gradientFrom}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {desafio.strategies.map((strategy, idx) => (
                <motion.div
                  key={strategy.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="group relative p-6 sm:p-7 rounded-2xl bg-white/[0.025] border border-white/[0.05] backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/[0.1] transition-all"
                >
                  {/* Glow sutil en hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      boxShadow: `inset 0 1px 0 ${visual.gradientFrom}18, 0 0 50px ${visual.glow}06`,
                    }}
                  />
                  <span
                    className="relative text-[11px] font-semibold tracking-[0.15em] uppercase mb-3 block"
                    style={{ color: visual.gradientFrom }}
                  >
                    {strategy.id}
                  </span>
                  <p className="relative text-sm sm:text-base text-white/75 leading-relaxed">
                    {strategy.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────── PROGRAMAS ──────── */}
        <section className="px-6 sm:px-12 lg:px-20 py-14 sm:py-20">
          <div className="max-w-6xl mx-auto">
            <SectionLabel
              icon={Layers}
              title="Programas"
              subtitle={`${desafio.programs.length} programas`}
              color={visual.gradientFrom}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {desafio.programs.map((program, idx) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.025] border border-white/[0.05] hover:bg-white/[0.045] transition-all"
                >
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold"
                    style={{
                      background: `${visual.gradientFrom}12`,
                      color: visual.gradientFrom,
                    }}
                  >
                    {program.id}
                  </span>
                  <p className="text-sm text-white/60 leading-relaxed pt-1.5">
                    {program.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────── INDICADORES CLAVE ──────── */}
        <section className="px-6 sm:px-12 lg:px-20 py-14 sm:py-20">
          <div className="max-w-6xl mx-auto">
            <SectionLabel
              icon={BarChart3}
              title="Indicadores Clave"
              color={visual.gradientFrom}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {desafio.indicators.slice(0, 5).map((ind, idx) => (
                <IndicatorBar
                  key={ind.label}
                  label={ind.label}
                  base={ind.lineaBase}
                  target={ind.meta2035}
                  color={visual.gradientFrom}
                  delay={idx * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ──────── PRESUPUESTO ──────── */}
        <section className="px-6 sm:px-12 lg:px-20 py-14 sm:py-20 pb-28 sm:pb-36">
          <div className="max-w-6xl mx-auto">
            <SectionLabel
              icon={DollarSign}
              title="Presupuesto Estimado"
              color={visual.gradientFrom}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 sm:p-14 rounded-3xl bg-white/[0.02] border border-white/[0.05] flex flex-col items-center"
            >
              <DonutChart
                percent={desafio.budgetPercent}
                amount={desafio.budgetAmount}
                color={visual.gradientFrom}
              />
            </motion.div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

// ── Label de sección reutilizable ──
function SectionLabel({
  icon: SectionIcon,
  title,
  subtitle,
  color,
}: {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 mb-10"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: `${color}12` }}
      >
        <SectionIcon size={20} style={{ color }} />
      </div>
      <h3
        className="text-xl sm:text-2xl font-bold text-white"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
        {subtitle && (
          <span className="text-sm sm:text-base font-normal text-white/25 ml-3">
            {subtitle}
          </span>
        )}
      </h3>
    </motion.div>
  );
}
