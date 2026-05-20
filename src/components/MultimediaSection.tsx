"use client";

// 📚 LEARN: Sección de videos y documentos descargables.
// Se ha refactorizado para separar VideoVoices (principio de responsabilidad única).

import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import VideoVoices from "./VideoVoices";

const DOCUMENTOS = [
  {
    id: "tomo-1",
    title: "Tomo I — Diagnóstico Situacional",
    size: "8.2 MB",
    color: "var(--uv-red)",
    href: "https://drive.google.com/file/d/10Bgk-qezy3leNKp-I4kBiW_tiHQHNzmu/view",
  },
  {
    id: "tomo-2",
    title: "Tomo II — Formulación Estratégica",
    size: "5.2 MB",
    color: "var(--accent-blue)",
    href: "https://drive.google.com/file/d/1rhfo4mSMy4XOLFhrZwAKExwzokMD-HDW/view",
  },
  {
    id: "tomo-3",
    title: "Tomo III — Plan Programático",
    size: "6.7 MB",
    color: "var(--uv-gold)",
    href: "https://drive.google.com/file/d/1ozVODwwHCVQ_n9Bho4CF4XCuL1sr7X6I/view",
  },
  {
    id: "resumen",
    title: "Resumen Ejecutivo",
    size: "PDF",
    color: "var(--accent-green)",
    href: "https://drive.google.com/file/d/1UxoOxXPJF4_SPtQR9Jsg6yw9pcRoo4uA/view",
  },
] as const;

export default function MultimediaSection() {
  return (
    <section id="multimedia" className="section-padding bg-bg-hero text-text-inverse">
      <div className="container-wide mx-auto px-4 sm:px-6">
        
        {/* Videos - Extraído a su propio componente */}
        <VideoVoices />

        {/* Documentos */}
        <div>
          <h3
            className="text-lg font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Documentos Oficiales
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DOCUMENTOS.map((doc, i) => (
              <motion.a
                key={doc.id}
                href={doc.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${doc.color}30` }}
                >
                  <FileText size={20} style={{ color: doc.color }} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white truncate">
                    {doc.title}
                  </p>
                  <p className="text-[11px] text-white/40">PDF · {doc.size}</p>
                </div>
                <ExternalLink
                  size={16}
                  className="text-white/30 group-hover:text-white/70 transition-colors shrink-0"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
