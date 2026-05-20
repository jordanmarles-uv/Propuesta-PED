// 📚 LEARN: Datos del proceso participativo y timeline del PED.
// Extraídos de: Tomo II Cap. 3 + documentos web complementarios.

import type { ITimelineEvent, IEvento, IMetrica, IIdeaFuerza, IEscenario } from "@/types/ped";

// ✅ BEST PRACTICE: Datos readonly — inmutabilidad.
export const TIMELINE_EVENTS: readonly ITimelineEvent[] = [
  {
    id: 1,
    date: "Marzo 2024",
    year: 2024,
    title: "Inicio del proceso de formulación",
    description: "El Consejo Superior autoriza la elaboración del nuevo PED con enfoque prospectivo y participativo.",
    type: "institucional",
  },
  {
    id: 2,
    date: "Abril - Junio 2024",
    year: 2024,
    title: "Diagnóstico situacional",
    description: "Recopilación de datos institucionales, encuestas y análisis DOFA. Construcción del Tomo I.",
    type: "institucional",
  },
  {
    id: 3,
    date: "Julio 2024",
    year: 2024,
    title: "12 Mesas Temáticas Convergentes",
    description: "Conformación de las MTC con representación multiestamental: docentes, estudiantes, administrativos, egresados y sector externo.",
    type: "participativo",
  },
  {
    id: 4,
    date: "Agosto - Octubre 2024",
    year: 2024,
    title: "31 jornadas presenciales",
    description: "Talleres participativos en sedes de Cali, Palmira, Tuluá, Buga, Caicedonia, Buenaventura, Yumbo, Zarzal y Pacífico.",
    type: "participativo",
  },
  {
    id: 5,
    date: "Septiembre 2024",
    year: 2024,
    title: "Construcción de escenarios de futuro",
    description: "Identificación de 21 macro-tendencias internacionales y formulación de 4 escenarios: catastrófico, tendencial, contrastado y optimista.",
    type: "hito",
  },
  {
    id: 6,
    date: "Noviembre 2024",
    year: 2024,
    title: "Formulación de desafíos y estrategias",
    description: "Consolidación de los 7 desafíos estratégicos y las 6 estrategias convergentes. Construcción del Tomo II.",
    type: "hito",
  },
  {
    id: 7,
    date: "Diciembre 2024",
    year: 2024,
    title: "Diseño programático y plan financiero",
    description: "Elaboración de fichas técnicas, indicadores, presupuesto indicativo ($2,21 billones COP). Tomo III.",
    type: "institucional",
  },
  {
    id: 8,
    date: "2025",
    year: 2025,
    title: "Validación y aprobación institucional",
    description: "Consolidación final del documento, ajustes de socialización y trámite ante instancias de gobierno universitario.",
    type: "hito",
  },
  {
    id: 9,
    date: "Mayo 2025",
    year: 2025,
    title: "Inicio de socialización",
    description: "Reunión con equipo de comunicación para definir estrategia de divulgación del PED a la comunidad universitaria.",
    type: "institucional",
  },
  {
    id: 10,
    date: "2031",
    year: 2031,
    title: "Evaluación intermedia",
    description: "Evaluación de eficacia a mitad de periodo: indicadores de efecto, brechas persistentes y ajustes estratégicos.",
    type: "evaluacion",
  },
  {
    id: 11,
    date: "2036",
    year: 2036,
    title: "Evaluación final del PED",
    description: "Evaluación de impacto, movilidad social de egresados y logro de las 11 ideas fuerza del 2045.",
    type: "evaluacion",
  },
];

export const PROXIMOS_EVENTOS: readonly IEvento[] = [
  {
    id: 1,
    day: "01",
    month: "OPDI",
    title: "Socialización ejecutiva del PED",
    location: "Por definir con OPDI y Comunicaciones",
    modality: "Presencial",
  },
  {
    id: 2,
    day: "02",
    month: "WEB",
    title: "Conversatorio: modelo multicampus",
    location: "Transmisión institucional",
    modality: "Virtual",
  },
  {
    id: 3,
    day: "03",
    month: "SED",
    title: "Mesa territorial de implementación",
    location: "Sedes y seccionales",
    modality: "Híbrido",
  },
];

export const METRICAS: readonly IMetrica[] = [
  { id: 1, value: 32735, label: "Estudiantes de pregrado", color: "#C8102E", iconName: "Users" },
  { id: 2, value: 144, label: "Edificios en 11 campus", color: "#2563EB", iconName: "Building2" },
  { id: 3, value: 815, label: "Artículos indexados (2024)", color: "#059669", iconName: "BookOpen" },
  { id: 4, value: 11, suffix: " campus/sedes", label: "Cobertura territorial", color: "#7C3AED", iconName: "MapPin" },
  { id: 5, value: 122, label: "Grupos de investigación", color: "#C8102E", iconName: "Target" },
  { id: 6, value: 2.21, suffix: " Billones", label: "Presupuesto PED (COP)", color: "#D97706", iconName: "DollarSign", isFloat: true },
];

export const IDEAS_FUERZA: readonly IIdeaFuerza[] = [
  { id: 1, title: "Ecosistema de aprendizaje flexible", description: "Modelo formativo pertinente, inclusivo y de alta calidad." },
  { id: 2, title: "Ciencia abierta de alto impacto público", description: "Investigación que resuelve retos socioecológicos." },
  { id: 3, title: "Universidad Multicampus", description: "Red de sedes especializadas según vocaciones locales." },
  { id: 4, title: "Bienestar inclusivo y diverso", description: "Modelo integral basado en derechos humanos." },
  { id: 5, title: "Paz ambiental y biodiversidad viva", description: "Integración de convivencia y transición energética." },
  { id: 6, title: "IA ética y democrática", description: "Gobernanza de datos y ciberseguridad." },
  { id: 7, title: "Diplomacia del conocimiento", description: "Alianzas Universidad-Empresa-Estado globales." },
  { id: 8, title: "Infraestructura bioclimática e inteligente", description: "Espacios accesibles y energéticamente positivos." },
  { id: 9, title: "Red de incubadoras sociales y spin-offs", description: "Emprendimiento de impacto." },
  { id: 10, title: "Gobernanza anticipatoria basada en datos", description: "Paneles abiertos de indicadores." },
  { id: 11, title: "Competencia comunicativa intercultural multilingüe", description: "Interculturalidad y movilidad académica." },
];

export const ESCENARIOS: readonly IEscenario[] = [
  { id: 1, name: "Catastrófico", character: "Colapso institucional", probability: "Bajo pero posible", description: "Desfinanciación total, pérdida de acreditación, fuga de talento y deterioro severo de infraestructura." },
  { id: 2, name: "Tendencial", character: "Continuidad inercial", probability: "Riesgo medio-alto", description: "Sin cambio estructural: se mantienen las brechas actuales en regionalización, digitalización e infraestructura." },
  { id: 3, name: "Contrastado", character: "Avance parcial", probability: "Escenario probable", description: "Avances significativos en algunas áreas pero brechas persistentes en otras. Progreso desigual entre campus." },
  { id: 4, name: "Optimista", character: "Transformación integral", probability: "Escenario apuesta", description: "Universidad de talla mundial: investigación de impacto, formación flexible, multicampus consolidado y sostenibilidad financiera." },
];
