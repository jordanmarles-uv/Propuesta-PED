// ✅ BEST PRACTICE: Configuración visual centralizada para la Flor de Loto.
// 📚 LEARN: Separar datos visuales del componente permite ajustar colores
// sin tocar lógica de renderizado — similar a un theme.json en WordPress.

export interface PetalVisual {
  gradientFrom: string;
  gradientTo: string;
  glow: string;
  bgLight: string;
  bgDark: string;
}

// Paleta sofisticada: gradientes premium por desafío (se mantienen sutiles para alto contraste)
export const PETAL_VISUALS: Record<number, PetalVisual> = {
  1: { gradientFrom: "#FF6B6B", gradientTo: "#C8102E", glow: "#FF6B6B", bgLight: "#FEF2F2", bgDark: "#2D0A0A" },
  2: { gradientFrom: "#60A5FA", gradientTo: "#1D4ED8", glow: "#60A5FA", bgLight: "#EFF6FF", bgDark: "#0A1A3D" },
  3: { gradientFrom: "#34D399", gradientTo: "#047857", glow: "#34D399", bgLight: "#ECFDF5", bgDark: "#0A2D1E" },
  4: { gradientFrom: "#F472B6", gradientTo: "#BE185D", glow: "#F472B6", bgLight: "#FDF2F8", bgDark: "#2D0A1E" },
  5: { gradientFrom: "#A3E635", gradientTo: "#4D7C0F", glow: "#A3E635", bgLight: "#F7FEE7", bgDark: "#1A2D0A" },
  6: { gradientFrom: "#A78BFA", gradientTo: "#6D28D9", glow: "#A78BFA", bgLight: "#F5F3FF", bgDark: "#1A0A3D" },
  7: { gradientFrom: "#FBBF24", gradientTo: "#B45309", glow: "#FBBF24", bgLight: "#FFFBEB", bgDark: "#2D1E0A" },
};

// SVG petal path — forma orgánica ampliada.
// 📚 LEARN: Pétalo más grande para que la flor tenga más presencia.
export const PETAL_PATH =
  "M 0 -112 C -31 -147 -73 -231 -64 -294 C -53 -347 -21 -378 0 -389 C 21 -378 53 -347 64 -294 C 73 -231 31 -147 0 -112 Z";

export const SVG_SIZE = 1000;
export const SVG_CENTER = 500;
export const PETAL_COUNT = 7;
export const ANGLE_STEP = 360 / PETAL_COUNT;
