"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Target, CalendarDays } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const TOMOS = [
  { number: "I", title: "Diagnóstico Situacional", pages: 282, color: "var(--uv-red)" },
  { number: "II", title: "Formulación Estratégica", pages: 350, color: "var(--accent-blue)" },
  { number: "III", title: "Plan Programático", pages: 410, color: "var(--uv-gold)" },
] as const;

export default function ContextoSection() {
  return (
    <section id="contexto" className="section-padding bg-bg-secondary">
      <div className="container-wide mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="El Origen"
          title="Bases de nuestra planeación"
          highlight="Bases"
          description="Conoce cómo se estructuró este plan participativo, la metodología utilizada y los tomos oficiales que recogen la estrategia para los próximos 10 años."
        />

        {/* ── BENTO GRID LAYOUT ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Qué es (Destacada, ocupa 2 columnas en desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 md:col-span-2 bg-gradient-to-br from-bg-card to-uv-red-subtle/30"
          >
            <div className="w-12 h-12 rounded-xl bg-uv-red/10 flex items-center justify-center mb-5">
              <BookOpen size={24} className="text-uv-red" />
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              ¿Qué es el PED?
            </h3>
            <p className="text-base text-text-secondary leading-relaxed max-w-xl">
              El Plan Estratégico de Desarrollo es la hoja de ruta maestra que define hacia dónde se dirige la Universidad del Valle en los próximos 10 años, con visión prospectiva al 2045. Es nuestro compromiso con el futuro de la región.
            </p>
          </motion.div>

          {/* Card 2: Metodología */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card p-8 bg-bg-card flex flex-col justify-center"
          >
            <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-5">
              <Target size={24} className="text-accent-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Metodología Innovadora
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Combina la Planificación Estratégica Situacional (PES) con un enfoque prospectivo, analizando 21 macro-tendencias y 4 escenarios de futuro.
            </p>
          </motion.div>

          {/* Card 3: Participación */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card p-8 bg-bg-card"
          >
            <div className="w-12 h-12 rounded-xl bg-accent-green/10 flex items-center justify-center mb-5">
              <Users size={24} className="text-accent-green" />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Construcción Colectiva
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Desarrollado a través de un proceso participativo amplio: foros, encuestas y mesas de trabajo congregando a más de 7.000 voces de la comunidad.
            </p>
          </motion.div>

          {/* Card 4: Tiempos e Inversión (Ocupa 2 columnas) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="card p-8 md:col-span-2 bg-bg-card flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-uv-gold/10 flex shrink-0 items-center justify-center">
              <CalendarDays size={32} className="text-uv-gold" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Horizonte 2025-2035
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed max-w-lg">
                Se establecieron cortes de evaluación intermedia en 2031 y una evaluación de impacto al finalizar en 2036. Este plan requiere una inversión estratégica proyectada de <strong>$2,21 billones COP</strong>.
              </p>
            </div>
          </motion.div>

        </div>



      </div>
    </section>
  );
}
