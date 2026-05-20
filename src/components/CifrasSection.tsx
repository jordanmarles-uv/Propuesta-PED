"use client";

import { motion } from "framer-motion";
import {
  Users,
  Building2,
  BookOpen,
  MapPin,
  Target,
  DollarSign,
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

function MetricCard({
  metrica,
  delay,
}: {
  metrica: (typeof METRICAS)[number];
  delay: number;
}) {
  const count = useCountUp(metrica.value, 2.5);
  const Icon = ICON_MAP[metrica.iconName] ?? Target;
  
  // Calcular porcentaje simulado para la gráfica (asumiendo valor max referencial o randomizado para visualización)
  const percentage = Math.min(100, Math.max(30, (metrica.value % 100) + 40)); 
  const circleCircumference = 2 * Math.PI * 38; // r=38
  const strokeDashoffset = circleCircumference - (percentage / 100) * circleCircumference;

  const displayValue = metrica.isFloat
    ? count.toFixed(2)
    : count > 999
    ? count.toLocaleString("es-CO")
    : count;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5 }}
      className="card p-6 relative overflow-hidden group bg-white border-border-light hover:border-transparent hover:shadow-xl transition-all duration-300"
    >
      {/* Gráfica de fondo (Mini Bar Chart) simulada si es flotante, sino dona */}
      <div className="absolute right-[-20px] top-[-20px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
        {metrica.isFloat ? (
           <svg width="120" height="120" viewBox="0 0 100 100">
             <motion.rect x="10" y="50" width="15" height="50" rx="4" fill={metrica.color} initial={{ height: 0, y: 100 }} whileInView={{ height: 30, y: 70 }} transition={{ delay, duration: 1 }} />
             <motion.rect x="40" y="30" width="15" height="70" rx="4" fill={metrica.color} initial={{ height: 0, y: 100 }} whileInView={{ height: 60, y: 40 }} transition={{ delay: delay + 0.2, duration: 1 }} />
             <motion.rect x="70" y="10" width="15" height="90" rx="4" fill={metrica.color} initial={{ height: 0, y: 100 }} whileInView={{ height: 90, y: 10 }} transition={{ delay: delay + 0.4, duration: 1 }} />
           </svg>
        ) : (
          <svg width="140" height="140" className="-rotate-90">
            <circle cx="70" cy="70" r="38" fill="none" stroke={`${metrica.color}40`} strokeWidth="12" />
            <motion.circle
              cx="70"
              cy="70"
              r="38"
              fill="none"
              stroke={metrica.color}
              strokeWidth="12"
              strokeDasharray={circleCircumference}
              initial={{ strokeDashoffset: circleCircumference }}
              whileInView={{ strokeDashoffset }}
              transition={{ delay, duration: 1.5, ease: "easeOut" }}
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div
          className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm"
          style={{ background: `${metrica.color}15` }}
        >
          <Icon size={24} style={{ color: metrica.color }} />
        </div>
        <p
          className="metric-value text-3xl sm:text-4xl mb-2 font-bold tracking-tight"
          style={{ color: metrica.color, fontFamily: "var(--font-heading)" }}
        >
          {metrica.prefix}
          {displayValue}
          {metrica.suffix && (
            <span className="text-base font-medium text-text-muted ml-1">
              {metrica.suffix}
            </span>
          )}
        </p>
        <p className="text-sm font-medium text-text-secondary leading-snug">{metrica.label}</p>
      </div>
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
