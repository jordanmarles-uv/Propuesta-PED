"use client";

// 📚 LEARN: El Header ahora es "institucional light" — fondo blanco con
// scroll-spy que detecta la sección activa. Incluye progress bar y
// badge "PED 2025-2035" como identidad visual persistente.

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Users } from "lucide-react";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { asset } from "@/lib/assetPath";

const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Contexto", href: "#contexto" },
  { label: "Proceso", href: "#timeline" },
  { label: "Cifras", href: "#cifras" },
  { label: "Recursos", href: "#multimedia" },
  { label: "Participa", href: "#participa" },
] as const;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // ✅ BEST PRACTICE: Scroll listener con passive para performance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 📚 LEARN: IntersectionObserver para scroll-spy — más performante que calcular offsets
  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href.replace("#", "#"))
    ).filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <ScrollProgress />
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-border-light"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo / Brand */}
            <div className="flex-1 flex justify-start">
              <button
                onClick={() => handleNavClick("#hero")}
                className="flex items-center gap-3 group"
              >
                <img
                  src={asset("/media/logo-80-anos.png")}
                  alt="Logo Universidad del Valle 80 años"
                  className="w-14 h-14 md:w-20 md:h-20 object-contain group-hover:scale-105 transition-transform duration-300 shrink-0"
                  style={{ filter: isScrolled ? "none" : "brightness(0) invert(1)" }}
                />
                <div className="hidden sm:block text-left">
                  <span
                    className={`block text-sm font-bold tracking-tight transition-colors ${
                      isScrolled ? "text-foreground" : "text-white"
                    }`}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    PED 2025-2035
                  </span>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-none items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? isScrolled
                          ? "text-uv-red"
                          : "text-white"
                        : isScrolled
                        ? "text-text-secondary hover:text-foreground hover:bg-bg-secondary"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full ${
                          isScrolled ? "bg-uv-red" : "bg-white"
                        }`}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex-1 flex items-center justify-end gap-3">
              <a
                href="#participa"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#participa");
                }}
                className={`hidden md:inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 relative overflow-hidden ${
                  isScrolled
                    ? "bg-uv-red text-white hover:bg-uv-red-dark shadow-sm"
                    : "bg-white/15 text-white border border-white/25 hover:bg-white/25"
                }`}
              >
                {/* ✅ BEST PRACTICE: Pulsación radial para llamar la atención sin molestar */}
                <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-current" style={{ animationDuration: "2.5s" }} />
                <Users size={14} className="shrink-0" />
                Participa
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? "text-foreground hover:bg-bg-secondary"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-border-light shadow-lg overflow-hidden"
            >
              <nav className="px-4 py-3 space-y-1">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      activeSection === link.href.replace("#", "")
                        ? "bg-uv-red-subtle text-uv-red"
                        : "text-text-secondary hover:bg-bg-secondary"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-2 pb-1">
                  <button
                    onClick={() => handleNavClick("#participa")}
                    className="btn-primary w-full text-sm"
                  >
                    ¡Participa ahora!
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
