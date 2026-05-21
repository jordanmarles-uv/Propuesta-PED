"use client";

// 📚 LEARN: Footer institucional separado como componente propio.
// Contiene: logos, links institucionales, créditos y copyright.

import { ExternalLink } from "lucide-react";
import { asset } from "@/lib/assetPath";

const LINKS_INSTITUCIONALES = [
  { label: "Portal Univalle", href: "https://www.univalle.edu.co" },
  { label: "OPDI", href: "https://planeacion.univalle.edu.co" },
  { label: "Transparencia", href: "https://www.univalle.edu.co/transparencia" },
  { label: "SIGEVA", href: "https://sigeva.univalle.edu.co" },
] as const;

const LINKS_PED = [
  { label: "Contexto del PED", href: "#contexto" },
  { label: "Cifras Clave", href: "#cifras" },
  { label: "Proceso Participativo", href: "#timeline" },
  { label: "Documentos Oficiales", href: "#multimedia" },
  { label: "Participa", href: "#participa" },
] as const;

export default function FooterInstitutional() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-text-inverse">
      {/* Main content */}
      <div className="container-wide mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={asset("/media/logo-80-anos.png")}
                alt="Logo Universidad del Valle 80 años"
                className="w-12 h-12 object-contain brightness-0 invert shrink-0"
              />
              <div>
                <p className="text-sm font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                  PED 2025-2035
                </p>
                <p className="text-[11px] text-white/50">Visión 2045</p>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Plan Estratégico de Desarrollo de la Universidad del Valle. 
              Construido con la comunidad universitaria para transformar el 
              suroccidente colombiano.
            </p>
          </div>

          {/* Links PED */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {LINKS_PED.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links institucionales */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Institucional
            </h4>
            <ul className="space-y-2.5">
              {LINKS_INSTITUCIONALES.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink size={10} className="opacity-40" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Contacto
            </h4>
            <div className="space-y-3 text-sm text-white/50">
              <p>Oficina de Planeación y Desarrollo Institucional</p>
              <p>Ciudad Universitaria Meléndez<br />Cali, Valle del Cauca, Colombia</p>
              <p>
                <a
                  href="mailto:planeacion@correounivalle.edu.co"
                  className="text-uv-gold-light hover:underline"
                >
                  planeacion@correounivalle.edu.co
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-wide mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/30">
            © {currentYear} Universidad del Valle · Todos los derechos reservados
          </p>
          <p className="text-[11px] text-white/30">
            Desarrollado por la OPDI · Ecosistema Digital PED
          </p>
        </div>
      </div>
    </footer>
  );
}
