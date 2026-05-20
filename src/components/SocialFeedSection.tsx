"use client";

// 📚 LEARN: react-tweet es la librería recomendada por Vercel para Next.js App Router
// Permite renderizar tweets reales sin usar iframes pesados, mejorando el rendimiento (SEO y LCP).
import { Tweet } from "react-tweet";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

// 🚧 SIMPLIFIED: Reemplaza estos IDs con los IDs reales de los tweets de @univallecol
// Puedes encontrar el ID al final de la URL del tweet (ej: twitter.com/user/status/123456789)
const TWEET_IDS = [
  "1761427189178220800", // Placeholder (Ejemplo)
  "1759600000000000000", // Placeholder
];

export default function SocialFeedSection() {
  return (
    <section id="actualidad" className="section-padding bg-bg-muted">
      <div className="container-wide mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Actualidad"
          title="Sincronizados con la comunidad"
          highlight="Sincronizados"
          description="La implementación del PED es noticia constante. Mantente al tanto de las discusiones, foros y avances directamente desde las redes oficiales."
        />

        <div className="max-w-4xl mx-auto mt-10">
          <div className="card overflow-hidden border border-border-light bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-border-light bg-bg-muted px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                  {/* Twitter/X icon */}
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.96H5.078z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-text-primary text-sm sm:text-base">Actualidad del PED 2035</h3>
                  <p className="text-xs text-text-secondary">@univallecol · #PED2025_2035</p>
                </div>
              </div>
              <a 
                href="https://twitter.com/univallecol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-medium text-uv-red hover:underline"
              >
                Ver perfil oficial
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="bg-[#f7f9fa] dark:bg-black p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {TWEET_IDS.map((id, index) => (
                <motion.div 
                  key={id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full flex justify-center"
                >
                  {/* ✅ BEST PRACTICE: Renderizar usando el componente oficial evita Layout Shifts */}
                  <div className="w-full max-w-[400px]">
                    <Tweet id={id} />
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-bg-muted p-4 text-center border-t border-border-light">
              <a 
                href="https://twitter.com/univallecol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-semibold text-text-secondary hover:text-uv-red transition-colors inline-block"
              >
                Ver más en X (Twitter)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
