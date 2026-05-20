// 📚 LEARN: Cada prompt tiene un mediaId único.
// Cuando generes el asset, guárdalo en public/media/{mediaId}.jpg
// El código lo referencia como: /media/{mediaId}.jpg

import type { IMediaPrompt } from "@/types/ped";

export const MEDIA_PROMPTS: readonly IMediaPrompt[] = [
  // ═══════════════════════════════════════════
  // HERO SECTION
  // ═══════════════════════════════════════════
  {
    mediaId: "hero-campus-aerial",
    section: "Hero",
    type: "hero",
    format: "jpg",
    dimensions: "2560x1440",
    narrativeContext:
      "Imagen principal del landing. Debe transmitir grandeza institucional, calidez humana y visión de futuro. Es lo primero que ve cualquier visitante.",
    prompt: `Fotografía institucional aérea del Campus Meléndez de la Universidad del Valle, Cali, Colombia. Vista en perspectiva elevada (drone a 45 grados) mostrando la Plaza de Banderas rodeada de árboles tropicales frondosos. Estudiantes universitarios caminando entre senderos y edificios de arquitectura brutalista tropical de los años 70. Vegetación exuberante del Valle del Cauca visible al fondo con montañas de la Cordillera Occidental. Luz natural dorada de golden hour (5:30 PM tropical), cielo con nubes suaves anaranjadas. Tonalidad cálida y vibrante pero no sobresaturada, con leve viñeteado cinematográfico. La imagen debe sentirse viva, habitada, con movimiento humano natural. NO stock genérico. Estilo: reportaje editorial institucional contemporáneo, como portada de revista de educación superior latinoamericana. Resolución: 2560x1440px, aspecto 16:9.`,
  },
  {
    mediaId: "hero-students-walking",
    section: "Hero",
    type: "background",
    format: "jpg",
    dimensions: "1920x1080",
    narrativeContext:
      "Imagen alternativa para el hero o para uso en secciones internas. Foco en la comunidad estudiantil diversa.",
    prompt: `Fotografía documental de un grupo diverso de estudiantes universitarios colombianos caminando por un sendero arbolado en un campus universitario tropical. El grupo incluye hombres y mujeres de diferentes etnias (mestizo, afrodescendiente, indígena), edades entre 18 y 25 años, vistiendo ropa casual contemporánea. Algunos llevan mochilas, otros conversan animadamente. Fondo: edificios de concreto con arquitectura brutalista rodeados de árboles tropicales (guayacanes amarillos en flor, samanes). Luz natural difusa de media mañana, sombras suaves de los árboles. Profundidad de campo moderada, foco en el grupo del centro. Paleta cromática: tonos cálidos terrosos con acentos verdes de la vegetación. Estilo: fotografía documental editorial, NO posada, sensación espontánea y auténtica. Formato: 1920x1080px, 16:9.`,
  },

  // ═══════════════════════════════════════════
  // CONTEXTO SECTION
  // ═══════════════════════════════════════════
  {
    mediaId: "contexto-participacion",
    section: "Contexto",
    type: "background",
    format: "jpg",
    dimensions: "1920x1080",
    narrativeContext:
      "Acompaña la sección que explica cómo se construyó el PED. Debe transmitir participación colectiva, trabajo en equipo y diálogo institucional.",
    prompt: `Fotografía documental de un taller participativo universitario en un auditorio amplio y bien iluminado. Aproximadamente 40-50 personas sentadas en mesas redondas trabajando en grupos. Hojas de papelógrafo, post-its de colores pegados en las paredes, proyector encendido al fondo. Participantes diversos: profesores con bata, estudiantes jóvenes, personal administrativo, algunos con gafas revisando documentos. Ambiente de trabajo colaborativo intenso pero distendido. Un facilitador de pie señala un diagrama en una pared. Luz fluorescente cálida interior complementada con luz natural de ventanales altos. Ángulo: perspectiva ligeramente elevada mostrando la amplitud del espacio y la cantidad de participantes. Estilo: fotografía de reportaje institucional, dinámica y real. Formato: 1920x1080px, 16:9.`,
  },
  {
    mediaId: "contexto-documentos",
    section: "Contexto",
    type: "card",
    format: "jpg",
    dimensions: "800x600",
    narrativeContext:
      "Imagen para acompañar la referencia a los 3 tomos del PED. Transmitir seriedad documental y rigor académico.",
    prompt: `Fotografía de naturaleza muerta (still life) editorial mostrando tres tomos encuadernados profesionalmente sobre una mesa de madera oscura de oficina. Los tomos tienen portadas de colores diferenciados (rojo institucional, azul, dorado) con el escudo de una universidad. Junto a ellos: unas gafas de lectura, un lápiz mecánico y una taza de café colombiano. Luz natural lateral suave de ventana, creando sombras suaves y profundidad. Fondo difuminado con estantes de libros académicos. Composición minimalista y elegante, ángulo cenital ligeramente inclinado (45 grados). Paleta: tonos cálidos con el rojo de las portadas como acento. Estilo: fotografía editorial corporativa. Formato: 800x600px, 4:3.`,
  },

  // ═══════════════════════════════════════════
  // DESAFÍOS — FLOR DE LOTO
  // ═══════════════════════════════════════════
  {
    mediaId: "desafio-flor-loto",
    section: "Desafíos",
    type: "background",
    format: "jpg",
    dimensions: "1200x1200",
    narrativeContext:
      "Imagen simbólica de la Flor de Loto — metáfora central del PED. Complementa el SVG interactivo de los 7 pétalos.",
    prompt: `Ilustración artística de una flor de loto estilizada con exactamente 7 pétalos, vista cenital (desde arriba). Cada pétalo tiene un color diferenciado sutil: rojo (#C8102E), azul (#2563EB), verde (#059669), rosa (#DB2777), verde lima (#65A30D), violeta (#7C3AED), ámbar (#D97706). El centro de la flor brilla con un resplandor dorado cálido. Fondo: blanco puro con sombra muy suave debajo de la flor. Estilo: ilustración vectorial contemporánea con texturas watercolor sutiles, NO clip-art, sofisticada y elegante. Lineas limpias, geometría orgánica. Referencia visual: ilustraciones editoriales de Monocle magazine o Kinfolk. Sin texto. Formato: 1200x1200px, cuadrado.`,
  },
  {
    mediaId: "desafio-1-formacion",
    section: "Desafíos",
    type: "card",
    format: "jpg",
    dimensions: "800x600",
    narrativeContext:
      "Desafío 1: Formación pertinente. Imagen para la card o página de detalle.",
    prompt: `Fotografía documental de un aula de clase moderna en una universidad pública colombiana. Estudiantes universitarios jóvenes (18-25 años) participando activamente en una clase: algunos levantan la mano, otros toman notas en laptops. Profesor(a) al frente con pantalla digital interactiva mostrando un diagrama. El aula tiene diseño contemporáneo con sillas ergonómicas, luz natural por ventanales amplios. Diversidad étnica visible entre los estudiantes. Ambiente académico dinámico y motivante. Luz natural cálida, composición con regla de tercios, foco en la interacción profesor-estudiante. Estilo: editorial educativo. Formato: 800x600px, 4:3.`,
  },
  {
    mediaId: "desafio-2-investigacion",
    section: "Desafíos",
    type: "card",
    format: "jpg",
    dimensions: "800x600",
    narrativeContext:
      "Desafío 2: Conocimiento que impacta. Imagen de ambiente de investigación.",
    prompt: `Fotografía documental de un laboratorio de investigación científica universitario. Un investigador joven (30-35 años, hombre afrodescendiente colombiano con bata blanca) examina muestras bajo un microscopio de alta tecnología. A su lado, una investigadora (mujer mestiza, cabello recogido) analiza datos en una pantalla con gráficos coloridos. Equipos científicos modernos visibles: espectrómetro, pipetas, reactivos en estantes ordenados. Luz blanca de laboratorio complementada con resplandor azulado de las pantallas. Ángulo: tres cuartos, profundidad de campo moderada. Estilo: reportaje científico editorial, inspirador y humano. Formato: 800x600px, 4:3.`,
  },
  {
    mediaId: "desafio-3-regionalizacion",
    section: "Desafíos",
    type: "card",
    format: "jpg",
    dimensions: "800x600",
    narrativeContext:
      "Desafío 3: Proyección social y regionalización. Imagen de sedes regionales.",
    prompt: `Fotografía panorámica de una sede universitaria regional en un municipio colombiano del Valle del Cauca. Edificio institucional de 2-3 pisos con arquitectura moderna rodeado de paisaje vallecaucano: caña de azúcar al fondo, cielo tropical azul con nubes cúmulus. Estudiantes de la región (predominantemente afrodescendientes y mestizos) sentados en jardines exteriores estudiando con tablets y libros. Bandera de Colombia y de la universidad visible. Atmósfera de oportunidad y cercanía territorial. Luz natural brillante de mediodía tropical, colores vibrantes. Composición amplia mostrando integración entre la sede y su entorno rural-urbano. Estilo: documental territorial. Formato: 800x600px, 4:3.`,
  },
  {
    mediaId: "desafio-4-bienestar",
    section: "Desafíos",
    type: "card",
    format: "jpg",
    dimensions: "800x600",
    narrativeContext:
      "Desafío 4: Bienestar incluyente. Imagen de diversidad y vida universitaria.",
    prompt: `Fotografía documental de un evento cultural al aire libre en un campus universitario tropical. Estudiantes diversos participando en actividades: un grupo ensaya danza folclórica colombiana (currulao), otro grupo conversa sentado en el césped, una persona en silla de ruedas participa activamente en un taller artístico. Decoración con telas de colores, instrumentos musicales. Fondo: árboles grandes con sombra generosa, edificios universitarios al fondo. Atmósfera de celebración, inclusión y alegría. Luz natural cálida de tarde, sombras suaves. Composición dinámica con múltiples focos de interés. Estilo: fotoperiodismo cultural festivo. Formato: 800x600px, 4:3.`,
  },
  {
    mediaId: "desafio-5-paz",
    section: "Desafíos",
    type: "card",
    format: "jpg",
    dimensions: "800x600",
    narrativeContext:
      "Desafío 5: Paz y sustentabilidad. Imagen de campus verde y convivencia.",
    prompt: `Fotografía editorial del campus universitario Meléndez como "zona azul" de biodiversidad. Sendero ecológico bordeado de árboles tropicales majestuosos (samanes, guayacanes) con estudiantes caminando pacíficamente. Un jardín botánico visible con letreros educativos sobre especies nativas. Iguanas tomando sol en rocas junto al sendero. Paneles solares sutilmente visibles en un edificio al fondo. Atmósfera serena, contemplativa, de conexión con la naturaleza. Luz filtrada por el dosel arbóreo creando patrones de luz y sombra en el suelo. Paleta: verdes intensos, tonos terrosos. Composición con punto de fuga central en el sendero. Estilo: National Geographic editorial. Formato: 800x600px, 4:3.`,
  },
  {
    mediaId: "desafio-6-digital",
    section: "Desafíos",
    type: "card",
    format: "jpg",
    dimensions: "800x600",
    narrativeContext:
      "Desafío 6: Evolución Digital. Imagen de tecnología aplicada a la educación.",
    prompt: `Fotografía de un espacio de innovación tecnológica (makerspace/hub digital) dentro de una universidad. Estudiantes trabajando con pantallas holográficas y tablets, un robot educativo sobre una mesa, impresora 3D operando al fondo. Ambiente futurista pero alcanzable: paredes de vidrio, iluminación LED azulada sutil, mobiliario moderno minimalista. Un grupo de 3 estudiantes (hombre, mujer, persona no binaria) colaboran alrededor de una pantalla grande mostrando dashboards con datos. Cables ordenados, ambiente tech pero humano y accesible. Luz: mezcla de LED blanco frío y cálido. Composición: regla de tercios con foco en la colaboración humano-tecnología. Estilo: tech editorial institucional. Formato: 800x600px, 4:3.`,
  },
  {
    mediaId: "desafio-7-infraestructura",
    section: "Desafíos",
    type: "card",
    format: "jpg",
    dimensions: "800x600",
    narrativeContext:
      "Desafío 7: Sostenibilidad financiera e infraestructura. Imagen de modernización de campus.",
    prompt: `Renderizado arquitectónico fotorrealista de un edificio universitario modernizado en un campus tropical. Estructura de 4 pisos con fachada bioclimática: parasoles de aluminio, jardines verticales, paneles fotovoltaicos integrados en la cubierta. En el primer piso: espacios abiertos tipo forum con estudiantes. Paisajismo tropical circundante: senderos peatonales, bicicletas estacionadas, árboles nativos. Cielo tropical con nubes cúmulus. El edificio se integra armoniosamente con estructuras brutalistas existentes visibles al fondo. Paleta: concreto gris claro, acero, vegetación verde, toques de rojo institucional en la señalización. Estilo: visualización arquitectónica institucional. Formato: 800x600px, 4:3.`,
  },

  // ═══════════════════════════════════════════
  // CIFRAS SECTION
  // ═══════════════════════════════════════════
  {
    mediaId: "cifras-bg-pattern",
    section: "Cifras",
    type: "background",
    format: "jpg",
    dimensions: "1920x600",
    narrativeContext:
      "Patrón de fondo sutil para la sección de cifras. No debe competir con los números animados.",
    prompt: `Patrón geométrico abstracto y sutil en tonos muy claros. Formas orgánicas inspiradas en gráficos estadísticos y curvas de datos: líneas sinuosas que representan tendencias, círculos concéntricos como targets, grillas suaves. Colores: gris muy claro (#F1F5F9) sobre blanco (#FAFBFC), con acentos mínimos en rojo institucional desaturado (#C8102E al 10% de opacidad). Estilo: pattern editorial minimalista, como fondo de un informe anual de alta gama. Sin elementos figurativos, puramente decorativo. Debe funcionar como textura de fondo sin distraer del contenido superpuesto. Formato: 1920x600px, tipo banner horizontal.`,
  },

  // ═══════════════════════════════════════════
  // TIMELINE SECTION
  // ═══════════════════════════════════════════
  {
    mediaId: "timeline-mesas-tematicas",
    section: "Timeline",
    type: "card",
    format: "jpg",
    dimensions: "800x450",
    narrativeContext:
      "Ilustra el momento de las 12 Mesas Temáticas Convergentes — el corazón participativo del PED.",
    prompt: `Fotografía documental de una mesa de trabajo temática en un salón universitario. Vista cenital ligeramente inclinada mostrando una mesa grande redonda cubierta de materiales de trabajo: mapas conceptuales escritos a mano en pliegos de papel bond, marcadores de colores, post-its amarillos y rosados agrupados por temas, vasos de café de cartón. Manos de diferentes personas (diversas en tono de piel, edad, con y sin anillos) señalan y escriben activamente. Se ven las mangas de batas de laboratorio, camisas formales y camisetas casuales reflejando los diferentes estamentos. Fondo desenfocado: más mesas de trabajo en actividad similar. Luz cenital fluorescente cálida. Composición: textura visual rica, organizada en su caos creativo. Estilo: fotoperiodismo documental institucional. Formato: 800x450px, 16:9.`,
  },

  // ═══════════════════════════════════════════
  // MULTIMEDIA / DOCUMENTOS
  // ═══════════════════════════════════════════
  {
    mediaId: "multimedia-video-thumb-1",
    section: "Multimedia",
    type: "card",
    format: "jpg",
    dimensions: "640x360",
    narrativeContext:
      "Thumbnail para video 'La Universidad que soñamos'. Primer video institucional del PED.",
    prompt: `Frame cinematográfico de un video institucional. Plano medio de un(a) rector(a) universitario(a) hablando directamente a cámara con expresión cercana y esperanzadora. Fondo: biblioteca universitaria con estantes de libros difuminados, luz cálida dorada de ventanal lateral. La persona viste de forma institucional pero accesible (camisa sin corbata). Subtítulo en pantalla: "¡Por la Universidad que soñamos!". Barra de progreso de video visible en la parte inferior. Composición clásica de entrevista con espacio de aire al lado donde mira. Estilo: frame de documental institucional de alta producción. Formato: 640x360px, 16:9.`,
  },
  {
    mediaId: "multimedia-video-thumb-2",
    section: "Multimedia",
    type: "card",
    format: "jpg",
    dimensions: "640x360",
    narrativeContext:
      "Thumbnail para video sobre la metodología prospectiva del PED.",
    prompt: `Frame cinematográfico de un video explicativo. Plano cenital inclinado de un facilitador dibujando en una pizarra blanca grande un diagrama con flechas y conexiones, representando visualmente la metodología prospectiva. Marcadores de colores en su mano derecha. Participantes fuera de foco al fondo observando. La pizarra muestra: círculos conectados, líneas de tiempo, palabras clave legibles como "2045", "Escenarios", "Desafíos". Luz fluorescente blanca con naturalidad documental. Estilo: frame de video educativo institucional. Formato: 640x360px, 16:9.`,
  },
  {
    mediaId: "multimedia-video-thumb-3",
    section: "Multimedia",
    type: "card",
    format: "jpg",
    dimensions: "640x360",
    narrativeContext:
      "Thumbnail para video 'Voces de la Comunidad' — testimonios de participantes.",
    prompt: `Frame cinematográfico tipo documental. Plano medio cerrado de una estudiante universitaria colombiana afrodescendiente (20-22 años) hablando con pasión y gesticulando con las manos. Fondo: jardín del campus con vegetación tropical desenfocada. Iluminación natural difusa, temperatura cálida. La expresión facial transmite esperanza y convicción. Cabello natural (afro), aretes artesanales colombianos visibles. Micrófono de solapa sutil. Estilo: frame de documental participativo, íntimo y cercano. Formato: 640x360px, 16:9.`,
  },

  // ═══════════════════════════════════════════
  // PARTICIPACIÓN
  // ═══════════════════════════════════════════
  {
    mediaId: "participa-comunidad",
    section: "Participa",
    type: "background",
    format: "jpg",
    dimensions: "1920x800",
    narrativeContext:
      "Fondo para la sección de participación. Debe motivar a la acción, transmitir comunidad activa.",
    prompt: `Fotografía panorámica de un gran grupo de personas (200+) reunidas en la Plaza de Banderas del Campus Meléndez de la Universidad del Valle. Vista ligeramente elevada mostrando la multitud diversa: estudiantes, profesores, personal administrativo. Algunos levantan las manos, otros aplauden. Ambiente de asamblea positiva, no de protesta. Banderas institucionales rojas y blancas. Luz natural de media mañana, cielo despejado. El grupo forma naturalmente la sensación de unidad y propósito colectivo. Al fondo: el edificio de la Biblioteca Central y árboles tropicales. Composición panorámica centrada en la masa humana. Estilo: fotoperiodismo institucional inspirador. Formato: 1920x800px, panorámico.`,
  },

  // ═══════════════════════════════════════════
  // PÁGINAS INTERNAS
  // ═══════════════════════════════════════════
  {
    mediaId: "metodologia-prospectiva",
    section: "Metodología",
    type: "background",
    format: "jpg",
    dimensions: "1920x800",
    narrativeContext:
      "Header de la página de metodología. Transmitir rigor académico + visión de futuro.",
    prompt: `Composición editorial mostrando el concepto de prospectiva y planificación estratégica. Metáfora visual: una brújula antigua de latón dorado sobre un mapa moderno de Colombia (departamento del Valle del Cauca resaltado), rodeada de documentos con gráficos estadísticos, un reloj de arena pequeño y hojas de una planta tropical. Mesa de madera oscura noble. Luz directa cálida desde la izquierda creando sombras definidas. Estilo: naturaleza muerta editorial sofisticada, tipo portada de The Economist o Harvard Business Review. Formato: 1920x800px, panorámico.`,
  },
  {
    mediaId: "repositorio-header",
    section: "Repositorio",
    type: "background",
    format: "jpg",
    dimensions: "1920x600",
    narrativeContext:
      "Header para la sección de documentos. Seriedad y organización documental.",
    prompt: `Fotografía de la Biblioteca Central de la Universidad del Valle. Interior con estanterías de libros altas, pasillos ordenados con libros académicos, luz natural entrando por claraboyas superiores creando haces de luz dramáticos. Un estudiante camina por un pasillo consultando un libro. Ambiente de conocimiento acumulado, silencio reverente. Composición con punto de fuga central en el pasillo. Paleta: tonos cálidos de la madera y el papel. Estilo: fotografía arquitectónica interior editorial. Formato: 1920x600px, banner panorámico.`,
  },
  {
    mediaId: "ecosistema-digital",
    section: "Ecosistema",
    type: "background",
    format: "jpg",
    dimensions: "1920x800",
    narrativeContext:
      "Header de la página meta-propuesta que explica el ecosistema digital. Tecnología + institucionalidad.",
    prompt: `Ilustración digital moderna mostrando un ecosistema de nodos conectados. En el centro: un escudo universitario estilizado. Conectado por líneas brillantes a nodos que representan: una pantalla de computador (web), un smartphone (app), un ícono de play (video), un sobre (newsletter), logos estilizados de redes sociales, un dashboard con gráficas, un documento PDF. Fondo: gradiente suave de blanco a gris muy claro. Las conexiones son líneas finas elegantes con puntos de luz en las intersecciones. Estilo: infografía editorial premium, limpia y contemporánea, NO tech-bro ni startup genérica. Colores: líneas en rojo institucional (#C8102E) y azul (#2563EB), nodos en gris con acentos de color. Formato: 1920x800px.`,
  },

  // ═══════════════════════════════════════════
  // LOGO Y BRANDING
  // ═══════════════════════════════════════════
  {
    mediaId: "logo-ped-marca",
    section: "Global",
    type: "icon",
    format: "svg",
    dimensions: "400x400",
    narrativeContext:
      "Marca visual del PED. Se usa en header, favicon, OG image, materiales impresos.",
    prompt: `Logotipo institucional para el "Plan Estratégico de Desarrollo 2025-2035" de una universidad colombiana. Diseño limpio y contemporáneo que integre: las letras "PED" en tipografía sans-serif bold moderna, el número "2025-2035" en tipografía ligera, y una representación abstracta minimalista de una flor de loto con 7 pétalos (referencia a los 7 desafíos estratégicos). Color principal: rojo institucional (#C8102E). Color secundario: dorado sutil (#D4A843). Fondo: transparente. Estilo: branding institucional universitario contemporáneo, NO genérico. Debe funcionar en tamaños pequeños (favicon 32px) y grandes (banner 400px). Sin gradientes complejos, formas limpias. Formato: SVG vectorial, 400x400px.`,
  },
  {
    mediaId: "og-image-ped",
    section: "Global",
    type: "card",
    format: "jpg",
    dimensions: "1200x630",
    narrativeContext:
      "Imagen OpenGraph para cuando se comparte el link en redes sociales. Primera impresión del sitio en WhatsApp, Twitter, LinkedIn.",
    prompt: `Diseño de tarjeta OpenGraph institucional para el Plan Estratégico de Desarrollo 2025-2035 de la Universidad del Valle. Fondo: blanco con una franja roja institucional (#C8102E) en la parte inferior (20% del alto). En el centro: el texto "PED 2025-2035" en tipografía sans-serif bold negra, debajo "Plan Estratégico de Desarrollo" en peso regular. A la izquierda: escudo estilizado de la universidad. En la esquina inferior derecha: "Universidad del Valle · Visión 2045". Decoración sutil: silueta abstracta de flor de loto en gris muy claro como watermark. Estilo: tarjeta institucional premium, limpia, sin ruido visual. Formato: 1200x630px, OG standard.`,
  },
] as const;

// ✅ BEST PRACTICE: Helper para buscar un prompt por su ID
export function getMediaPath(mediaId: string, extension: string = "jpg"): string {
  return `/media/${mediaId}.${extension}`;
}

// 📚 LEARN: Helper para obtener todos los prompts de una sección
export function getPromptsBySection(section: string): IMediaPrompt[] {
  return MEDIA_PROMPTS.filter((p) => p.section === section);
}
