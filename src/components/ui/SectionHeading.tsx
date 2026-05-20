"use client";

// 📚 LEARN: Componente reutilizable para headings de sección.
// En vez de repetir la misma estructura en cada sección (DRY),
// extraemos el patrón común en un componente parametrizable.

import { motion } from "framer-motion";

interface SectionHeadingProps {
  /** Texto pequeño superior (ej: "El corazón del PED") */
  eyebrow: string;
  /** Título principal de la sección */
  title: string;
  /** Palabra o frase con gradiente dentro del título */
  highlight?: string;
  /** Descripción debajo del título */
  description?: string;
  /** Color del eyebrow (CSS variable name, ej: "--uv-red") */
  eyebrowColor?: string;
  /** Alineación del texto */
  align?: "center" | "left";
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  eyebrowColor = "--uv-red",
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  // ✅ BEST PRACTICE: Separar el título en partes si hay highlight
  const renderTitle = () => {
    if (!highlight) return <>{title}</>;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{highlight}</span>
        {parts[1] || ""}
      </>
    );
  };

  return (
    <div className={`${alignClass} mb-14`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm font-semibold tracking-widest uppercase"
        style={{ color: `var(${eyebrowColor})` }}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-5 leading-tight"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {renderTitle()}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-text-secondary text-lg leading-relaxed ${
            align === "center" ? "max-w-2xl mx-auto" : "max-w-xl"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
