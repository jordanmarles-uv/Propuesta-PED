"use client";

// 📚 LEARN: Componente dedicado a los testimonios en video.
// Separado de MultimediaSection para cumplir con el principio de responsabilidad única.

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const VIDEOS = [
  {
    id: 1,
    title: "Gestión Estratégica",
    description: "Visión y compromisos clave desde la Dirección del Proyecto.",
    duration: "1:00",
    mediaId: "PIp4ormqQNs",
  },
  {
    id: 2,
    title: "Transformación Digital",
    description: "Cápsula sobre infraestructura tecnológica y apropiación digital.",
    duration: "0:58",
    mediaId: "C6l4_oLIVhI",
  },
  {
    id: 3,
    title: "Bienestar e Inclusión",
    description: "Testimonios sobre diversidad y bienestar en los campus regionales.",
    duration: "1:05",
    mediaId: "ctwc0_2QkXA",
  },
] as const;

export default function VideoVoices() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="mb-14">
      <SectionHeading
        eyebrow="Capítulo 5 · Memoria y difusión"
        title="Voces de la Institución"
        highlight="Voces"
        description="Los coordinadores y responsables de área explican en videos cortos los avances, metas y retos del Plan Estratégico desde sus respectivas dependencias."
        eyebrowColor="--uv-gold"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {VIDEOS.map((video, i) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
            onClick={() => setActiveVideo(video.mediaId)}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-white/5 border border-white/10 group-hover:border-uv-red/50 transition-colors">
              <img
                src={`https://img.youtube.com/vi/${video.mediaId}/maxresdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-uv-red/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-uv-red transition-all shadow-lg backdrop-blur-sm">
                  <Play size={22} className="text-white ml-1" fill="white" />
                </div>
              </div>
              <span className="absolute bottom-3 right-3 text-[11px] font-medium bg-black/80 text-white px-2 py-0.5 rounded backdrop-blur-md">
                {video.duration}
              </span>
            </div>

            <h4
              className="text-sm font-bold text-white group-hover:text-uv-gold-light transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {video.title}
            </h4>
            <p className="text-xs text-white/50 mt-1">{video.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal de Video Inmersivo */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-uv-red text-white transition-colors"
                aria-label="Cerrar reproductor"
              >
                <X size={24} />
              </button>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Reproductor YouTube PED"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
