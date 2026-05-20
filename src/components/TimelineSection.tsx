"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, Flag, BarChart3, ChevronRight } from "lucide-react";
import { TIMELINE_EVENTS } from "@/data/timeline";
import SectionHeading from "@/components/ui/SectionHeading";

const TYPE_ICONS: Record<string, React.ElementType> = {
  participativo: Users,
  institucional: Calendar,
  hito: Flag,
  evaluacion: BarChart3,
};

const TYPE_COLORS: Record<string, string> = {
  participativo: "var(--accent-green)",
  institucional: "var(--accent-blue)",
  hito: "var(--uv-red)",
  evaluacion: "var(--accent-violet)",
};

export default function TimelineSection() {
  const [activeEvent, setActiveEvent] = useState<string | null>(null);

  return (
    <section id="timeline" className="section-padding bg-bg-primary">
      <div className="container-wide mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Ruta de Construcción"
          title="El proceso participativo"
          highlight="participativo"
          description="Conoce la cronología de foros, mesas de trabajo y evaluaciones que construyeron la visión compartida de la Universidad del Valle."
        />

        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Línea central */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border-medium to-transparent md:-translate-x-px" />

          {TIMELINE_EVENTS.map((event, i) => {
            const Icon = TYPE_ICONS[event.type] ?? Calendar;
            const color = TYPE_COLORS[event.type] ?? "var(--text-muted)";
            const isLeft = i % 2 === 0;
            const isActive = activeEvent === event.id;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  "pl-16 md:pl-0"
                } ${isLeft ? "md:justify-start" : "md:justify-end"}`}
              >
                {/* Dot central interactivo */}
                <motion.div
                  className="absolute left-[22px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-white z-10 cursor-pointer flex items-center justify-center"
                  style={{ background: color, boxShadow: `0 0 0 4px ${color}20` }}
                  whileHover={{ scale: 1.5 }}
                  onClick={() => setActiveEvent(isActive ? null : event.id)}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-dot"
                      className="w-1.5 h-1.5 bg-white rounded-full"
                    />
                  )}
                </motion.div>

                {/* Card interactiva */}
                <div
                  className={`w-full md:w-[calc(50%-3rem)] relative group cursor-pointer`}
                  onClick={() => setActiveEvent(isActive ? null : event.id)}
                  onMouseEnter={() => setActiveEvent(event.id)}
                  onMouseLeave={() => setActiveEvent(null)}
                >
                  <motion.div
                    className={`p-6 rounded-2xl border transition-all duration-300 ${
                      isActive 
                        ? "bg-white border-transparent shadow-xl ring-1 ring-border-medium/50 scale-[1.02] z-10" 
                        : "bg-bg-secondary border-border-light hover:bg-bg-card"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${color}15` }}>
                          <Icon size={16} style={{ color }} />
                        </div>
                        <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color }}>
                          {event.date}
                        </span>
                      </div>
                      <ChevronRight 
                        size={16} 
                        className={`text-text-muted transition-transform duration-300 ${isActive ? "rotate-90" : ""}`} 
                      />
                    </div>
                    
                    <h4 className="text-lg font-bold mb-2 text-text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                      {event.title}
                    </h4>
                    
                    <p className={`text-sm text-text-secondary leading-relaxed transition-all duration-300 ${isActive ? "line-clamp-none" : "line-clamp-2"}`}>
                      {event.description}
                    </p>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-border-light flex items-center justify-between">
                            <span className="text-xs font-medium text-text-muted">Impacto institucional</span>
                            <div className="flex -space-x-2">
                              {[1, 2, 3].map((n) => (
                                <div key={n} className="w-6 h-6 rounded-full bg-border-medium border-2 border-white" />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
