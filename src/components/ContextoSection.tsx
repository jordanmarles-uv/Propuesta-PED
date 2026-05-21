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

        {/* ── DOCUMENTACIÓN / LOS 3 TOMOS ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="card p-8 lg:p-10 bg-white border-border-light shadow-lg relative overflow-hidden"
        >
          {/* Adorno visual sutil */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-uv-red/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-md">
              <span className="badge badge-red mb-4">Documentación Oficial</span>
              <h3 className="text-2xl lg:text-3xl font-extrabold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Los 3 Tomos del PED
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                El consolidado final del plan está dividido en tres documentos maestros que detallan desde el estado actual de la universidad hasta los programas específicos a ejecutar.
              </p>
            </div>
            
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {TOMOS.map((tomo, i) => (
                <motion.a
                  key={tomo.number}
                  href="#multimedia"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#multimedia")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03, rotate: 1 }}
                  className="flex flex-col p-6 rounded-2xl bg-white border border-border-light hover:border-transparent hover:shadow-xl transition-all group cursor-pointer relative overflow-hidden h-48 justify-between"
                >
                  {/* Lomo de libro lateral de color */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-2.5 transition-all duration-300 group-hover:w-3.5"
                    style={{ background: tomo.color }}
                  />

                  {/* Número gigante de fondo semi-transparente */}
                  <div
                    className="absolute right-2 -bottom-2 text-8xl font-black opacity-[0.04] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-500 pointer-events-none select-none"
                    style={{ color: tomo.color, fontFamily: "var(--font-heading)" }}
                  >
                    {tomo.number}
                  </div>

                  <div>
                    {/* Badge de número */}
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-3.5 shadow-sm group-hover:scale-110 transition-transform"
                      style={{ background: tomo.color, fontFamily: "var(--font-heading)" }}
                    >
                      {tomo.number}
                    </div>
                    
                    <h4 
                      className="text-sm font-bold text-text-primary group-hover:text-uv-red transition-colors mb-1.5 leading-tight"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Tomo {tomo.number}
                    </h4>
                    <p className="text-xs text-text-secondary leading-snug max-w-[160px]">{tomo.title}</p>
                  </div>

                  <div className="pt-3 border-t border-border-light flex items-center justify-between mt-auto">
                    <span className="text-[10px] uppercase tracking-wider text-text-muted font-bold">{tomo.pages} págs</span>
                    <span 
                      className="text-xs font-bold text-uv-red opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                    >
                      Descargar →
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
