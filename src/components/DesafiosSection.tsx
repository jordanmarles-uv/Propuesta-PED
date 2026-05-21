"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import { DESAFIOS } from "@/data/desafios";
import SectionHeading from "@/components/ui/SectionHeading";
import { asset } from "@/lib/assetPath";

export default function DesafiosSection() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const activeDesafio = DESAFIOS.find((d) => d.id === activeId) ?? null;

  return (
    <section id="desafios" className="section-padding">
      <div className="container-wide mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Eje Central"
          title="Nuestra visión al 2035"
          highlight="visión al 2035"
          description="Conoce la estructura estratégica del Plan de Desarrollo. Selecciona cada desafío para explorar sus estrategias, programas e indicadores clave de impacto."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 mb-6">
          <motion.aside
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-featured p-6 h-fit lg:sticky lg:top-24"
          >
            <span className="badge badge-red mb-4">Estructura Estratégica</span>
            <h3
              className="text-xl font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Siete pilares para la transformación
            </h3>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed">
              La Flor de Loto representa la interconexión de nuestros esfuerzos institucionales. Cada desafío es una prioridad estratégica que integra metas concretas para construir la Universidad del futuro.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-bg-secondary p-4">
                <p className="metric-value text-2xl text-uv-red">33</p>
                <p className="text-xs text-text-secondary">programas</p>
              </div>
              <div className="rounded-xl bg-bg-secondary p-4">
                <p className="metric-value text-2xl text-uv-red">14</p>
                <p className="text-xs text-text-secondary">estrategias</p>
              </div>
            </div>
          </motion.aside>

          {/* Grid de pétalos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {DESAFIOS.map((desafio, i) => {
              const isActive = activeId === desafio.id;

              return (
                <motion.button
                  key={desafio.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setActiveId(isActive ? null : desafio.id)}
                  className={`group relative text-left p-5 rounded-xl border-2 transition-all duration-300 cursor-pointer bg-white ${
                    isActive
                      ? "border-current shadow-lg scale-[1.02]"
                      : "border-border-light hover:border-current hover:shadow-md"
                  }`}
                  style={{ color: desafio.color }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors overflow-hidden"
                      style={{
                        background: isActive ? desafio.color : `${desafio.color}15`,
                      }}
                    >
                      <img
                        src={asset(`/media/desafio-${desafio.id}.png`)}
                        alt={`Icono Desafío ${desafio.id}`}
                        className={`w-7 h-7 object-contain transition-all ${isActive ? "brightness-0 invert" : ""}`}
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-semibold tracking-wider uppercase opacity-60">
                        Desafío {desafio.id}
                      </span>
                      <h3
                        className="text-sm font-bold text-foreground leading-snug mt-0.5"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {desafio.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-text-secondary">
                    {desafio.summary}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-border-light pt-3">
                    <span className="text-[11px] text-text-muted">
                      {desafio.budgetAmount}
                    </span>
                    <ChevronRight
                      size={14}
                      className={`transition-transform ${
                        isActive ? "rotate-90" : "group-hover:translate-x-0.5"
                      }`}
                      style={{ color: desafio.color }}
                    />
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="desafio-indicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                      style={{ background: desafio.color }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Panel de detalle */}
        <AnimatePresence mode="wait">
          {activeDesafio && (
            <motion.div
              key={activeDesafio.id}
              initial={{ opacity: 0, y: 10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div
                className="card-featured p-6 sm:p-8"
                style={{ "--card-accent": activeDesafio.color } as React.CSSProperties}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span
                      className="text-xs font-semibold tracking-widest uppercase"
                      style={{ color: activeDesafio.color }}
                    >
                      Desafío {activeDesafio.id}
                    </span>
                    <h3
                      className="text-xl sm:text-2xl font-bold mt-1"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {activeDesafio.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveId(null)}
                    className="p-2 rounded-lg hover:bg-bg-secondary transition-colors text-text-muted"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Objective */}
                <p className="text-text-secondary leading-relaxed mb-6 text-sm sm:text-base">
                  {activeDesafio.objective}
                </p>

                {/* Strategies + Programs + Indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Strategies */}
                  <div>
                    <h4 className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-3">
                      Estrategias
                    </h4>
                    <ul className="space-y-2">
                      {activeDesafio.strategies.map((s) => (
                         <li
                          key={s.id}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                            style={{ background: activeDesafio.color }}
                          />
                          {s.title}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Programs */}
                  <div>
                    <h4 className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-3">
                      Programas ({activeDesafio.programs.length})
                    </h4>
                    <ul className="space-y-2">
                      {activeDesafio.programs.map((p) => (
                        <li
                          key={p.id}
                          className="text-sm text-text-secondary flex items-start gap-2"
                        >
                          <span className="text-text-muted text-xs mt-0.5">
                            {p.id}.
                          </span>
                          {p.title}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Indicators */}
                  <div>
                    <h4 className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-3">
                      Indicadores clave
                    </h4>
                    <div className="space-y-3">
                      {activeDesafio.indicators.slice(0, 4).map((ind) => (
                        <div key={ind.label} className="text-sm">
                          <p className="text-text-secondary text-xs mb-1">
                            {ind.label}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-text-muted">
                              {ind.lineaBase}
                            </span>
                            <span className="text-text-muted">→</span>
                            <span
                              className="font-bold"
                              style={{ color: activeDesafio.color }}
                            >
                              {ind.meta2035}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Budget */}
                    <div className="mt-4 pt-4 border-t border-border-light">
                      <p className="text-xs text-text-muted">Presupuesto estimado</p>
                      <p
                        className="text-lg font-bold"
                        style={{
                          color: activeDesafio.color,
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        {activeDesafio.budgetAmount}
                        <span className="text-xs font-normal text-text-muted ml-1">
                          ({activeDesafio.budgetPercent}%)
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
