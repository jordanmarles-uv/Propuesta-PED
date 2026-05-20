// 📚 LEARN: Toda la data del PED vive aquí, separada de la UI.
// Es como tener una "base de datos" local tipada.
// Si mañana se conecta a Supabase/CMS, solo se cambia este archivo.

import type { IDesafio } from "@/types/ped";

// ✅ BEST PRACTICE: Datos como constante readonly — inmutabilidad.
export const DESAFIOS: readonly IDesafio[] = [
  {
    id: 1,
    title: "Formación pertinente y de calidad",
    summary:
      "Fortalecer la oferta académica centrada en el estudiante, garantizar pertinencia y ampliar cobertura con formación a lo largo de la vida.",
    objective:
      "Consolidar un ecosistema de aprendizaje flexible, inclusivo y de alta calidad que garantice la pertinencia de la oferta académica, amplíe la cobertura y promueva la formación a lo largo de la vida, respondiendo a las necesidades del entorno regional, nacional e internacional.",
    color: "#C8102E",
    iconName: "GraduationCap",
    strategies: [
      { id: "E1.1", title: "Fortalecer y actualizar oferta de pregrado y posgrado" },
      { id: "E1.2", title: "Articular educación media, pregrado, posgrado y educación continua" },
    ],
    programs: [
      { id: 1, title: "Oferta académica con pertinencia, calidad y cobertura" },
      { id: 2, title: "Fortalecimiento de la calidad y acreditación en alta calidad" },
      { id: 3, title: "Acompañamiento a trayectorias universitarias" },
      { id: 4, title: "Formación a lo largo de la vida" },
      { id: 5, title: "Posgrados de Excelencia" },
    ],
    indicators: [
      { label: "Programas virtuales", lineaBase: "3", meta2035: "30" },
      { label: "Matrícula pregrado (incremento)", lineaBase: "32.735", meta2035: "+20%" },
      { label: "Acreditación alta calidad", lineaBase: "67%", meta2035: "74%" },
      { label: "Deserción pregrado", lineaBase: "7,24%", meta2035: "6,20%" },
      { label: "Posgrado con estrategias de tránsito", lineaBase: "0,7%", meta2035: "100%" },
    ],
    budgetPercent: 14.4,
    budgetAmount: "$318.000 M",
  },
  {
    id: 2,
    title: "Conocimiento que impacta",
    summary:
      "Fortalecer investigación básica, aplicada y creación artística. Ciencia abierta para generar valor público.",
    objective:
      "Impulsar la investigación básica y aplicada, la creación artística, la innovación y la transferencia del conocimiento con enfoque de ciencia abierta, generando valor público e impacto en la sociedad y posicionando a la Universidad como referente internacional.",
    color: "#2563EB",
    iconName: "FlaskConical",
    strategies: [
      { id: "E2.1", title: "Impulsar IDiCA y transferencia de conocimiento" },
      { id: "E2.2", title: "Internacionalización y proyección global" },
    ],
    programs: [
      { id: 1, title: "Investigación básica y aplicada, IDiCA" },
      { id: 2, title: "Transferencia del conocimiento e innovación" },
      { id: 3, title: "Infraestructura científica" },
      { id: 4, title: "Comunicación y divulgación científica" },
      { id: 5, title: "Internacionalización transformadora" },
      { id: 6, title: "Multilingüismo" },
    ],
    indicators: [
      { label: "Artículos indexados", lineaBase: "815", meta2035: "+40%" },
      { label: "Patentes", lineaBase: "5", meta2035: "15+" },
      { label: "Grupos de investigación", lineaBase: "122", meta2035: "150+" },
      { label: "Convenios internacionales", lineaBase: "176", meta2035: "+50%" },
      { label: "Programas doble titulación", lineaBase: "2", meta2035: "15+" },
    ],
    budgetPercent: 14.1,
    budgetAmount: "$311.000 M",
  },
  {
    id: 3,
    title: "Proyección social y regionalización",
    summary:
      "Consolidar el modelo multicampus y posicionar a la Universidad como actor clave del desarrollo territorial.",
    objective:
      "Consolidar la extensión y proyección social como función misional integrada y fortalecer el sistema de regionalización bajo el modelo multicampus, posicionando a la Universidad del Valle como motor del desarrollo territorial sostenible.",
    color: "#059669",
    iconName: "Globe",
    strategies: [
      { id: "E3.1", title: "Consolidar extensión y proyección social como función misional integrada" },
      { id: "E3.2", title: "Fortalecer el sistema de regionalización (modelo multicampus)" },
    ],
    programs: [
      { id: 1, title: "Cultura e identidad institucional" },
      { id: 2, title: "Vínculo y relacionamiento" },
      { id: 3, title: "Fortalecimiento de procesos misionales en regionalización" },
      { id: 4, title: "Fortalecimiento de estructura académico-administrativa" },
    ],
    indicators: [
      { label: "Estudiantes en regiones", lineaBase: "14.128", meta2035: "+30%" },
      { label: "Docentes de planta regiones", lineaBase: "40", meta2035: "200+" },
      { label: "Programas acreditados regiones", lineaBase: "0", meta2035: "Todos" },
      { label: "Grupos investigación regiones", lineaBase: "3", meta2035: "20+" },
    ],
    budgetPercent: 9.0,
    budgetAmount: "$199.000 M",
  },
  {
    id: 4,
    title: "Bienestar incluyente y diverso",
    summary:
      "Pasar de un modelo asistencial a uno integral basado en derechos humanos, con enfoque interseccional.",
    objective:
      "Transformar el bienestar universitario de un enfoque asistencial a un modelo integral, inclusivo y diverso, basado en derechos humanos con perspectiva interseccional, que promueva el desarrollo pleno de todos los miembros de la comunidad universitaria.",
    color: "#DB2777",
    iconName: "Heart",
    strategies: [
      { id: "E4.1", title: "Promover vida universitaria basada en equidad, inclusión y diversidad" },
      { id: "E4.2", title: "Impulsar hábitos y estilos de vida saludables" },
    ],
    programs: [
      { id: 1, title: "Reconocimiento de la diversidad, pluralidad, inclusión y justicia" },
      { id: 2, title: "Igualdad y equidad de género" },
      { id: 3, title: "Cultura y vida universitaria" },
      { id: 4, title: "Salud integral y entornos saludables" },
      { id: 5, title: "Bienestar y desarrollo integral" },
      { id: 6, title: "Participación y desarrollo personal estudiantil" },
    ],
    indicators: [
      { label: "Estudiantes estrato 1-2", lineaBase: "80%", meta2035: "Cobertura plena" },
      { label: "Servicios de bienestar", lineaBase: "75%", meta2035: "100%" },
      { label: "Personas con discapacidad atendidas", lineaBase: "230", meta2035: "+100%" },
      { label: "Participaciones deportivas", lineaBase: "41.039", meta2035: "+50%" },
    ],
    budgetPercent: 10.0,
    budgetAmount: "$221.000 M",
  },
  {
    id: 5,
    title: "Paz, convivencia y sustentabilidad",
    summary:
      "Construir la universidad como territorio de paz, transformar conflictos y liderar la transición ecosocial.",
    objective:
      "Construir la universidad como territorio de paz, consolidar la convivencia basada en el respeto y la resolución pacífica de conflictos, y liderar la transición socioecológica hacia la sustentabilidad ambiental en todos los campus.",
    color: "#65A30D",
    iconName: "Leaf",
    strategies: [
      { id: "E5.1", title: "Consolidar ethos universitario basado en cultura de paz" },
      { id: "E5.2", title: "Integrar sustentabilidad socioecológica como eje transversal" },
    ],
    programs: [
      { id: 1, title: "Cultura de paz y resolución de conflictos" },
      { id: 2, title: "Convivencia y derechos humanos" },
      { id: 3, title: "Sustentabilidad ambiental y campus verde" },
    ],
    indicators: [
      { label: "Iniciativas de paz", lineaBase: "72", meta2035: "200+" },
      { label: "GreenMetric mundial", lineaBase: "#191", meta2035: "Top 100" },
      { label: "Edificios eficientes", lineaBase: "0", meta2035: "100%" },
      { label: "Casos VBG atendidos", lineaBase: "107", meta2035: "Reducción significativa" },
    ],
    budgetPercent: 8.9,
    budgetAmount: "$197.000 M",
  },
  {
    id: 6,
    title: "Evolución Digital Estratégica",
    summary:
      "Apropiar transformación digital e IA en docencia, investigación y gestión administrativa.",
    objective:
      "Apropiar la transformación digital y la inteligencia artificial como habilitadores transversales en las funciones misionales de docencia, investigación y extensión, y en la gestión administrativa, promoviendo una cultura institucional de innovación tecnológica.",
    color: "#7C3AED",
    iconName: "Monitor",
    strategies: [
      { id: "E6.1", title: "Transformación digital de procesos académicos y administrativos" },
      { id: "E6.2", title: "Cultura de innovación e inteligencia artificial ética" },
    ],
    programs: [
      { id: 1, title: "Digitalización e integración de procesos" },
      { id: 2, title: "Infraestructura tecnológica y conectividad" },
      { id: 3, title: "Capacitación en competencias digitales" },
      { id: 4, title: "IA ética y gobernanza de datos" },
    ],
    indicators: [
      { label: "Procesos integrados", lineaBase: "19%", meta2035: "90%" },
      { label: "Personal capacitado IA", lineaBase: "10%", meta2035: "80%" },
      { label: "Conectividad campus", lineaBase: "3,9 GB", meta2035: "Fibra total" },
      { label: "Proyectos innovación tech", lineaBase: "0", meta2035: "50+" },
    ],
    budgetPercent: 9.0,
    budgetAmount: "$199.000 M",
  },
  {
    id: 7,
    title: "Sostenibilidad financiera e infraestructura",
    summary:
      "Lograr sostenibilidad financiera, modernizar la estructura organizacional y transformar la infraestructura física.",
    objective:
      "Garantizar la sostenibilidad financiera de largo plazo, modernizar la estructura organizacional y administrativa, y ejecutar la transformación integral de la infraestructura física y tecnológica de los 11 campus universitarios.",
    color: "#D97706",
    iconName: "Landmark",
    strategies: [
      { id: "E7.1", title: "Diversificar fuentes de ingresos y optimizar gestión financiera" },
      { id: "E7.2", title: "Transformar infraestructura y modernizar la organización" },
    ],
    programs: [
      { id: 1, title: "Gestión financiera sostenible" },
      { id: 2, title: "Modernización organizacional" },
      { id: 3, title: "Reforzamiento sísmico y seguridad" },
      { id: 4, title: "Planes maestros de infraestructura" },
      { id: 5, title: "Infraestructura tecnológica de campus" },
    ],
    indicators: [
      { label: "Presupuesto PED total", lineaBase: "—", meta2035: "$2,21 Billones" },
      { label: "Reforzamiento sísmico", lineaBase: "3,6%", meta2035: "100%" },
      { label: "144 edificios en 11 campus", lineaBase: "—", meta2035: "Modernizados" },
      { label: "Planes maestros actualizados", lineaBase: "44%", meta2035: "100%" },
    ],
    budgetPercent: 34.6,
    budgetAmount: "$764.000 M",
  },
] as const;
