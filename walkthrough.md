# Walkthrough: Réplica Mejorada PED Univalle 2025-2035

## 📌 Estado Actual del Proyecto
- **Objetivo:** Crear una réplica mejorada de la web local `C:\Proyectos\ped-web` sin modificar el proyecto original, convirtiéndola en una propuesta institucional más rigurosa y lista para validación OPDI/Rectoría.
- **Stack Tecnológico:** Next.js (App Router), Tailwind CSS, Framer Motion.
- **Componentes Construidos (Landing Page):**
  - `Header`: Navegación principal.
  - `HeroSection`: Introducción de alto impacto.
  - `ExecutivePanelSection`: Recorrido narrativo por capítulos, no panel de datos.
  - `DesafiosSection`: Navegador interactivo "Flor de Loto".
  - `CifrasSection`: Visualización de datos estadísticos y presupuestales.
  - `MultimediaSection`: Recursos documentales reales y piezas audiovisuales sugeridas.
  - `SintesisCriticaSection`: Riesgos editoriales, gobernanza de publicación y hoja de ruta para pasar de prototipo a sitio institucional.
  - `ParticipaSection`: Sección para feedback de la comunidad e inscripciones.
- **Ubicación:** Todos los componentes están ensamblados y renderizados en `src/app/page.tsx`.
- **Mejoras aplicadas en esta réplica:**
  - Se corrige el total de programas institucionales a 33.
  - Se evita afirmar fechas de aprobación no consolidadas; se usa una redacción institucional más prudente.
  - Se reemplazan enlaces `#` de documentos por enlaces reales identificados en la documentación local.
  - Se explicita la inconsistencia de cifras de participación como asunto editorial pendiente.
  - Se elimina cualquier idea de faro o Remotion; la metáfora central se mantiene en la Flor de Loto.
  - Se reordena la página como storytelling: origen → voces → flor/desafíos → evidencia → memoria → cuidado → continuidad.

## 🚀 Próximos Pasos (Next Steps)
1. **Validación visual local:** Ejecutar `npm run dev` y revisar desktop/móvil, especialmente Hero, Flor de Loto, tarjetas de documentos y sección crítica.
2. **Validación editorial OPDI:** Confirmar cifras finales de participación, cronología de aprobación y nombres oficiales de programas.
3. **Assets institucionales:** Sustituir placeholders por fotografías, videos, logos y miniaturas aprobadas por Comunicaciones.
4. **Integración Backend:** Conectar `ParticipaSection` con Supabase o con el mecanismo oficial de recepción de aportes.

## 🧠 Decisiones Técnicas Clave & Reglas de Desarrollo
- **Diseño Premium:** Animaciones fluidas manejadas con Framer Motion, diseño mobile-first. Sin colores genéricos, uso de variables de diseño estandarizadas.
- **Separación de Responsabilidades (SoC):** No mezclar lógica de negocio (consultas/servicios) con componentes de UI en un mismo archivo.
- **Componentización:** Todo elemento reutilizado más de dos veces o mayor a 20 líneas debe extraerse a su propio archivo en `src/components/`.
- **Inmutabilidad:** Manejo de datos y estados siguiendo el principio de no mutación, retornando siempre copias con los cambios.
- **No modificación del original:** Este trabajo vive en `C:\Proyectos\ped-web-mejorada`; el proyecto fuente `C:\Proyectos\ped-web` queda intacto.
