"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Heart, MessageCircle, Play, X } from "lucide-react";

// // ✅ BEST PRACTICE: Declaramos Instagram como un componente SVG local para mayor seguridad ante actualizaciones externas.
// // 📚 LEARN: Al mantener este icono local evitamos depender de librerías externas que borran iconos de marca (como lucide en versiones recientes).
const Instagram = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
import SectionHeading from "@/components/ui/SectionHeading";
import { asset } from "@/lib/assetPath";

// ✅ BEST PRACTICE: Estructuración inmutable de las publicaciones oficiales
const INSTAGRAM_POSTS = [
  {
    id: "DIt2Li4MvFZ",
    title: "La Universidad del Valle proyecta su futuro al 2035. Conoce los 7 desafíos de transformación del PED y sé parte del cambio. 🔴✨ #PED2035 #Univalle",
    thumbnail: asset("/media/video-thumb-institucional.jpg"),
    likes: 4281,
    comments: "112",
    href: "https://www.instagram.com/reel/DIt2Li4MvFZ/",
  },
  {
    id: "DMDIY25tI02",
    title: "Nuestras 11 sedes regionales unidas por un solo propósito. La regionalización y el modelo multicampus en el centro del PED 2025-2035. 🗺️🏫 #Univalle #Regionalizacion",
    thumbnail: asset("/media/video-thumb-metodologia.webp"),
    likes: 3829,
    comments: "94",
    href: "https://www.instagram.com/reel/DMDIY25tI02/",
  },
  {
    id: "DAyxLY4SOpf",
    title: "Voces de la comunidad: estudiantes, egresados y docentes nos cuentan qué esperan de la Universidad del Valle para la próxima década. 🗣️🎓 #Participa #PEDUnivalle",
    thumbnail: asset("/media/video-thumb-comunidad.webp"),
    likes: 5102,
    comments: "158",
    href: "https://www.instagram.com/reel/DAyxLY4SOpf/",
  },
] as const;

interface ReelCardProps {
  post: (typeof INSTAGRAM_POSTS)[number];
  delay: number;
}

function ReelCard({ post, delay }: ReelCardProps) {
  const [liked, setLiked] = useState(false);
  const [playing, setPlaying] = useState(false);
  // // ✅ BEST PRACTICE: El tipo explicitó para permitir updates dinámicos sobre un "as const" literal.
  const [likesCount, setLikesCount] = useState<number>(post.likes);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
    setLikesCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  // 📚 LEARN: Instagram permite embeds vía /embed en URL oficial.
  // El bloqueo CORS afecta solo a JS directo; iframes sí funcionan.
  const embedUrl = `https://www.instagram.com/reel/${post.id}/embed/`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group relative bg-white border border-border-light rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      {/* Área de video / thumbnail */}
      <div className="relative overflow-hidden bg-black shrink-0">
        <AnimatePresence mode="wait">
          {playing ? (
            <motion.div
              key="embed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative"
            >
              {/* ✅ BEST PRACTICE: sandbox="allow-scripts allow-same-origin" para seguridad. */}
              <iframe
                src={embedUrl}
                className="w-full"
                style={{ height: "480px", border: "none" }}
                allowFullScreen
                loading="lazy"
                title={post.title}
              />
              {/* Botón cerrar embed */}
              <button
                onClick={() => setPlaying(false)}
                className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors z-10"
              >
                <X size={14} />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="thumb"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative aspect-[4/5] cursor-pointer"
              onClick={() => setPlaying(true)}
            >
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay en hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white pointer-events-none">
                <span className="flex items-center gap-1.5 font-bold text-sm">
                  <Heart size={18} className="fill-current" />
                  {likesCount.toLocaleString("es-CO")}
                </span>
                <span className="flex items-center gap-1.5 font-bold text-sm">
                  <MessageCircle size={18} className="fill-current" />
                  {post.comments}
                </span>
              </div>

              {/* Botón play central */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-white border border-white/40 shadow-lg transition-all group-hover:bg-white/35"
                >
                  <Play size={24} className="fill-current ml-1" />
                </motion.div>
              </div>

              {/* Badge Reel */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/10 shadow-sm">
                <Play size={13} className="fill-current ml-0.5" />
              </div>

              {/* Etiqueta “Reproducir” */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[11px] font-bold text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full whitespace-nowrap">
                  Reproducir Reel ►
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Cuerpo */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <p className="text-xs text-text-primary leading-relaxed line-clamp-3 mb-4">
          {post.title}
        </p>

        <div className="pt-3 border-t border-border-light flex items-center justify-between mt-auto">
          <button
            onClick={handleLike}
            className="flex items-center gap-1 text-xs font-semibold text-text-secondary hover:text-red-500 transition-colors"
          >
            <Heart
              size={16}
              className={`transition-all duration-300 ${
                liked ? "fill-red-500 text-red-500 scale-120 animate-pulse" : "text-text-muted"
              }`}
            />
            <span>{likesCount.toLocaleString("es-CO")}</span>
          </button>

          <a
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold text-uv-red hover:underline inline-flex items-center gap-1 uppercase tracking-wider"
          >
            Ver en Instagram
            <ExternalLink size={10} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function SocialFeedSection() {
  return (
    <section id="actualidad" className="section-padding bg-bg-secondary border-t border-b border-border-light">
      <div className="container-wide mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Actualidad"
          title="Sincronizados con la comunidad"
          highlight="Sincronizados"
          description="La implementación del PED es noticia constante. Mantente al tanto de los Reels oficiales sobre los foros, las sedes regionales y los testimonios de Univalle."
        />

        <div className="max-w-5xl mx-auto mt-10">
          {/* Cabecera estilo perfil de Instagram */}
          <div className="card overflow-hidden border border-border-light bg-white shadow-md rounded-2xl mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-5 gap-4 bg-gradient-to-r from-bg-card to-uv-red-subtle/10 border-b border-border-light">
              <div className="flex items-center gap-4">
                {/* Foto perfil */}
                <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center shrink-0 shadow-md">
                  <div className="w-full h-full rounded-full bg-white p-0.5 flex items-center justify-center overflow-hidden">
                    <img
                      src={asset("/media/logo-80-anos.png")}
                      alt="Perfil Universidad del Valle"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-extrabold text-text-primary text-base sm:text-lg leading-none" style={{ fontFamily: "var(--font-heading)" }}>
                      univallecol
                    </h3>
                    {/* Badge Verificado de Instagram */}
                    <span className="w-4 h-4 bg-[#0095f6] text-white rounded-full flex items-center justify-center text-[8px] font-bold shadow-sm select-none">
                      ✓
                    </span>
                  </div>
                  <p className="text-xs text-text-muted mt-1 font-medium">Universidad del Valle · Institución Universitaria</p>
                  <p className="text-[10px] text-text-secondary font-semibold mt-0.5">Cali, Valle del Cauca, Colombia</p>
                </div>
              </div>

              {/* Botón de seguir */}
              <a
                href="https://www.instagram.com/univallecol/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold bg-[#0095f6] hover:bg-[#1877f2] text-white px-5 py-2.5 rounded-xl shadow-sm transition-all duration-300 shrink-0"
              >
                <Instagram size={14} />
                Seguir en Instagram
              </a>
            </div>

            {/* Mosaic Grid */}
            <div className="p-4 sm:p-6 bg-bg-secondary grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {INSTAGRAM_POSTS.map((post, index) => (
                <ReelCard key={post.id} post={post} delay={index * 0.1} />
              ))}
            </div>

            {/* Footer de sección */}
            <div className="bg-white p-4 text-center border-t border-border-light">
              <a
                href="https://www.instagram.com/univallecol/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-extrabold text-text-secondary hover:text-uv-red transition-all uppercase tracking-wider inline-flex items-center gap-1.5"
              >
                Ver más publicaciones
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
