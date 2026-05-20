"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Compass,
  Network,
  Sprout,
  UsersRound,
} from "lucide-react";

const STORY_CHAPTERS = [
  {
    icon: BookOpen,
    chapter: "Capítulo 1",
    title: "El punto de partida",
    text: "Antes de prometer futuro, la Universidad mira sus brechas: financiación, infraestructura, digitalización, regionalización, bienestar y convivencia.",
  },
  {
    icon: UsersRound,
    chapter: "Capítulo 2",
    title: "La conversación",
    text: "Mesas, foros, encuestas y talleres convierten datos dispersos en una conversación universitaria con voces de sedes, estamentos y territorios.",
  },
  {
    icon: Sprout,
    chapter: "Capítulo 3",
    title: "La flor que ordena",
    text: "La Flor de Loto no es adorno: es la forma de contar siete desafíos conectados, cada uno con estrategias, programas e indicadores.",
  },
] as const;

const STORY_BEATS = [
  ["Lo que duele", "Brechas estructurales que no deben maquillarse."],
  ["Lo que se escucha", "Participación como legitimidad, no como cifra decorativa."],
  ["Lo que se decide", "33 programas y presupuesto conectados con prioridades."],
  ["Lo que se cuida", "Seguimiento, datos, evidencias y rendición de cuentas."],
] as const;

export default function ExecutivePanelSection() {
  return (
    <section id="historia" className="section-padding bg-background">
      <div className="container-wide mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sticky top-24"
          >
            <span className="badge badge-red mb-5">Recorrido narrativo</span>
            <h2
              className="text-3xl sm:text-5xl font-extrabold leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contar el PED como una travesía institucional.
            </h2>
            <p className="mt-5 text-text-secondary leading-relaxed">
              La comunidad no entra a una web para leer un tomo completo. Entra
              para entender qué cambió, qué le corresponde, por qué importa y
              cómo puede seguir participando. Por eso la página debe tener ritmo:
              conflicto, voces, decisión y compromiso.
            </p>

            <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <div className="flex items-start gap-3">
                <AlertCircle size={22} className="text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-950">
                    Tensión narrativa principal
                  </p>
                  <p className="text-sm text-amber-900/80 mt-1 leading-relaxed">
                    El PED no debe sentirse como publicación final de un
                    documento, sino como comienzo de una década de seguimiento,
                    apropiación y corresponsabilidad.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {STORY_CHAPTERS.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.article
                    key={card.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="card-featured p-5"
                  >
                    <Icon size={24} className="text-uv-red mb-4" />
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-2">
                      {card.chapter}
                    </p>
                    <h3
                      className="font-bold"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {card.text}
                    </p>
                  </motion.article>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-0 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-[240px_1fr]">
                <div className="bg-bg-hero text-white p-6">
                  <Compass size={28} className="text-uv-gold-light mb-4" />
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Guion de la experiencia
                  </h3>
                  <p className="mt-3 text-sm text-white/65 leading-relaxed">
                    Cada sección debe responder una pregunta humana antes de
                    mostrar una tabla, un indicador o un enlace.
                  </p>
                </div>
                <div className="divide-y divide-border-light">
                  {STORY_BEATS.map(([title, text]) => (
                    <div
                      key={title}
                      className="grid grid-cols-1 sm:grid-cols-[160px_1fr_auto] gap-3 items-center p-5"
                    >
                      <p className="font-bold text-foreground">{title}</p>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {text}
                      </p>
                      <CheckCircle2 size={20} className="text-accent-green" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.a
              href="#criterio"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-uv-red/20 bg-uv-red-subtle p-5 text-uv-red hover:border-uv-red transition-colors"
            >
              <div className="flex items-center gap-3">
                <Network size={24} />
                <span className="font-bold">
                  Ver cómo esta historia se vuelve seguimiento institucional
                </span>
              </div>
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
