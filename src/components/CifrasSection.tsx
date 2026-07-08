"use client";

// 📚 LEARN: Recharts es una lib React para gráficas SVG. Cada componente declara sus datos directamente.
// ✅ BEST PRACTICE: Cada métrica muestra su gráfica específica según el tipo de dato.
// 🚧 SIMPLIFIED: Los datos son estáticos; en producción vendrían de una API de seguimiento del PED.

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Building2,
  BookOpen,
  MapPin,
  Target,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { METRICAS } from "@/data/timeline";
import SectionHeading from "@/components/ui/SectionHeading";

const ICON_MAP: Record<string, React.ElementType> = {
  Users,
  Building2,
  BookOpen,
  MapPin,
  Target,
  DollarSign,
};

// Datos históricos simulados para cada métrica (últimos 5 años)
const SPARKLINE_DATA: Record<number, number[]> = {
  1: [18000, 19200, 20100, 21500, 22900],
  2: [7, 8, 9, 10, 11],
  3: [12, 16, 22, 27, 33],
  4: [6, 7, 8, 9, 11],
  5: [5800, 6200, 6900, 7100, 7200],
  6: [1.4, 1.6, 1.8, 1.95, 2.21],
};

function Sparkline({ data, color }: { data: number[]; color: string }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const w = 100;
  const h = 40;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / range) * h;
      return `${x},${y}`;
    })
    .join(" ");

  const areaPoints = `0,${h} ${points} ${w},${h}`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-10" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`spark-grad-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.polygon
        points={areaPoints}
        fill={`url(#spark-grad-${color.replace("#", "")})`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <motion.polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ pathLength: 0 }}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      {data.map((v, i) => {
        const x = (i / (data.length - 1)) * w;
        const y = h - ((v - min) / range) * h;
        return (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r={i === data.length - 1 ? 3.5 : 2}
            fill={i === data.length - 1 ? color : "white"}
            stroke={color}
            strokeWidth="1.5"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.1 }}
          />
        );
      })}
    </svg>
  );
}

function RadialProgress({ value, color }: { value: number; color: string }) {
  const pct = Math.min(100, Math.max(10, value));
  const r = 32;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;

  return (
    <svg width="80" height="80" viewBox="0 0 80 80" className="shrink-0">
      <circle cx="40" cy="40" r={r} fill="none" stroke={`${color}20`} strokeWidth="8" />
      <motion.circle
        cx="40"
        cy="40"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeDasharray={circ}
        strokeLinecap="round"
        style={{ rotate: -90, transformOrigin: "40px 40px" }}
        initial={{ strokeDashoffset: circ }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <text x="40" y="44" textAnchor="middle" fontSize="11" fontWeight="700" fill={color}>
        {Math.round(pct)}%
      </text>
    </svg>
  );
}

function MetricCard({
  metrica,
  delay,
}: {
  metrica: (typeof METRICAS)[number];
  delay: number;
}) {
  const count = useCountUp(metrica.value, 2.5);
  const [hovered, setHovered] = useState(false);
  const Icon = ICON_MAP[metrica.iconName] ?? Target;
  const sparkData = SPARKLINE_DATA[metrica.id] ?? [0, metrica.value];
  const pct = Math.min(100, Math.max(10, (metrica.value % 100) + 40));

  const displayValue = metrica.isFloat
    ? count.toFixed(2)
    : count > 999
    ? count.toLocaleString("es-CO")
    : count;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl bg-white border border-border-light overflow-hidden group cursor-default transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      style={{ boxShadow: hovered ? `0 20px 60px -10px ${metrica.color}30` : undefined }}
    >
      {/* Tira de color superior */}
      <div className="h-1 w-full" style={{ background: metrica.color }} />

      <div className="p-6">
        {/* Cabecera */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{ background: `${metrica.color}15` }}
          >
            <Icon size={22} style={{ color: metrica.color }} />
          </div>
          {/* Anillo radial compacto */}
          <RadialProgress value={pct} color={metrica.color} />
        </div>

        {/* Valor principal */}
        <p
          className="text-3xl sm:text-4xl font-black tracking-tight mb-1"
          style={{ color: metrica.color, fontFamily: "var(--font-heading)" }}
        >
          {metrica.prefix}
          {displayValue}
          {metrica.suffix && (
            <span className="text-base font-medium text-text-muted ml-1">{metrica.suffix}</span>
          )}
        </p>
        <p className="text-sm font-medium text-text-secondary leading-snug mb-4">{metrica.label}</p>

        {/* Sparkline de tendencia */}
        <div className="border-t border-border-light pt-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider">Tendencia 5 años</span>
            <span className="flex items-center gap-0.5 text-[10px] font-bold" style={{ color: metrica.color }}>
              <TrendingUp size={10} />
              +{Math.round((sparkData[sparkData.length - 1] / sparkData[0] - 1) * 100)}%
            </span>
          </div>
          <div className="w-full max-w-[160px] mx-auto pt-1">
            <Sparkline data={sparkData} color={metrica.color} />
          </div>
        </div>
      </div>

      {/* Tooltip hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/95 to-transparent px-6 py-4 text-center"
          >
            <p className="text-[11px] text-text-muted leading-relaxed">
              Proyección al <strong style={{ color: metrica.color }}>2035</strong> basada en el PED
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CifrasSection() {
  return (
    <section id="cifras" className="section-padding bg-bg-secondary">
      <div className="container-wide mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Impacto y Alcance"
          title="Magnitud de la Transformación"
          highlight="Transformación"
          description="Estos indicadores clave reflejan la cobertura de nuestra institución y la escala de la inversión estratégica proyectada al 2035."
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12">
          {METRICAS.map((metrica, i) => (
            <MetricCard key={metrica.id} metrica={metrica} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
