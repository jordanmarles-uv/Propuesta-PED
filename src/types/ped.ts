// 📚 LEARN: Centralizar tipos evita duplicación y errores.
// En WordPress esto sería como definir los custom fields en functions.php —
// aquí definimos la "forma" de los datos una sola vez y TypeScript
// la valida en tiempo de desarrollo.

// ✅ BEST PRACTICE: Interfaces (no types) para objetos que representan entidades de dominio.
// Los types se usan para uniones, utilidades y aliases.

export interface IIndicador {
  /** Nombre descriptivo del indicador */
  label: string;
  /** Valor de línea base (2024-2025) */
  lineaBase: string;
  /** Meta al 2035 */
  meta2035: string;
}

export interface IPrograma {
  id: number;
  title: string;
}

export interface IEstrategia {
  id: string;
  title: string;
}

export interface IDesafio {
  /** Número del desafío (1-7) */
  id: number;
  /** Título corto para cards y navegación */
  title: string;
  /** Objetivo completo del desafío */
  objective: string;
  /** Descripción breve para previews */
  summary: string;
  /** Color del pétalo en la Flor de Loto (hex) */
  color: string;
  /** Nombre del icono de Lucide React */
  iconName: string;
  /** Estrategias convergentes */
  strategies: IEstrategia[];
  /** Programas institucionales */
  programs: IPrograma[];
  /** Indicadores clave con línea base y meta */
  indicators: IIndicador[];
  /** Porcentaje del presupuesto total */
  budgetPercent: number;
  /** Monto estimado en millones COP */
  budgetAmount: string;
}

export interface ITimelineEvent {
  id: number;
  /** Fecha en formato legible */
  date: string;
  /** Año del evento */
  year: number;
  title: string;
  description: string;
  /** Tipo de evento para filtrado y estilo */
  type: "participativo" | "institucional" | "hito" | "evaluacion";
}

export interface IEvento {
  id: number;
  /** Día del mes (para display visual) */
  day: string;
  month: string;
  title: string;
  location: string;
  modality: "Presencial" | "Virtual" | "Híbrido";
}

export interface IDocumento {
  id: string;
  title: string;
  description: string;
  pages: number;
  color: string;
  /** Ruta al PDF (relativa a public/) */
  pdfUrl: string;
  /** Tomo al que pertenece */
  tomo: 1 | 2 | 3;
}

export interface IMetrica {
  id: number;
  value: number;
  /** Texto que va después del número */
  suffix?: string;
  /** Texto que va antes del número */
  prefix?: string;
  label: string;
  color: string;
  iconName: string;
  /** Si el valor tiene decimales (ej: 2.21 billones) */
  isFloat?: boolean;
}

export interface IIdeaFuerza {
  id: number;
  title: string;
  description: string;
}

export interface IEscenario {
  id: number;
  name: string;
  character: string;
  probability: string;
  description: string;
}

// 📚 LEARN: Los prompts audiovisuales tienen su propio tipo
// para que cada sección sepa exactamente qué asset esperar.
export interface IMediaPrompt {
  /** Identificador único — el archivo en media/ se llamará {mediaId}.jpg */
  mediaId: string;
  /** Sección del sitio donde se usa este asset */
  section: string;
  /** Tipo de asset */
  type: "hero" | "background" | "card" | "portrait" | "icon" | "video";
  /** Formato recomendado del archivo final */
  format: string;
  /** Dimensiones ideales en px */
  dimensions: string;
  /** Prompt cinematográfico completo para generación */
  prompt: string;
  /** Relación narrativa con la sección */
  narrativeContext: string;
}
