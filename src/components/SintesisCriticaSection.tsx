"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  BarChart3,
  GitBranch,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const FINDINGS = [
  {
    icon: AlertTriangle,
    title: "Cifras que deben consolidarse",
    text: "La documentación local alterna entre 1.500+, 5.200+ y 7.000+ participantes. La web debe usar rangos o una nota editorial hasta que OPDI cierre la cifra oficial.",
  },
  {
    icon: MessageSquareText,
    title: "Participación después de publicar",
    text: "La reunión de trabajo insiste en una ventanilla permanente para aportes, críticas y seguimiento. No basta con alojar los tomos.",
  },
  {
    icon: BarChart3,
    title: "Seguimiento entendible",
    text: "El SPSE y el tablero integral deben traducirse a lenguaje ciudadano: avances, alertas tempranas, responsables y evidencia.",
  },
  {
    icon: GitBranch,
    title: "Articulación con Planeación",
    text: "La página del plan y la página de Planeación deben estar amarradas con enlaces visibles, contenidos compartidos y rutas de actualización.",
  },
  {
    icon: ShieldCheck,
    title: "Gobernanza de publicación",
    text: "Antes de despliegue oficial se necesita aval de OPDI, Comunicaciones y responsable técnico para evitar contenidos desactualizados o sin dueño.",
  },
] as const;

const ROADMAP = [
  "Validar cifras y fechas oficiales antes de publicar.",
  "Reemplazar placeholders por banco audiovisual institucional.",
  "Conectar documentos oficiales, dashboard y formularios con fuentes mantenibles.",
  "Definir responsables de actualización por sección.",
] as const;

export default function SintesisCriticaSection() {
  return (
    <section id="criterio" className="section-padding bg-bg-secondary">
      <div className="container-wide mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Capítulo 6 · Cuidado institucional"
          title="Lo que debe cuidarse para que el relato sea creíble"
          highlight="Mejoras"
          description="Un buen storytelling institucional no maquilla tensiones. Nombra riesgos, consolida cifras, aclara responsables y convierte seguimiento en confianza pública."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FINDINGS.map((finding, i) => {
              const Icon = finding.icon;
              return (
                <motion.article
                  key={finding.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="card p-5"
                >
                  <div className="w-11 h-11 rounded-xl bg-uv-red-subtle flex items-center justify-center mb-4">
                    <Icon size={21} className="text-uv-red" />
                  </div>
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {finding.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {finding.text}
                  </p>
                </motion.article>
              );
            })}
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 card-featured p-6 sm:p-8"
          >
            <span className="badge badge-red mb-4">Hoja de ruta web</span>
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Para pasar de prototipo a sitio institucional
            </h3>
            <ol className="space-y-4">
              {ROADMAP.map((item, index) => (
                <li key={item} className="flex gap-3 text-sm text-text-secondary">
                  <span className="w-7 h-7 rounded-full bg-uv-red text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
