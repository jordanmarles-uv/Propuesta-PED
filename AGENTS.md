<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Agent State Management (Walkthrough)
**CRITICAL RULE:** Al iniciar cualquier tarea en este proyecto, el agente DEBE leer el archivo `walkthrough.md`. Al finalizar cualquier sesión o hito importante, el agente DEBE actualizar o crear `walkthrough.md` en la raíz del proyecto documentando:
1. El estado actual del proyecto (qué está construido).
2. Tareas pendientes o próximos pasos.
3. Decisiones técnicas clave.
Esto asegura que el contexto del proyecto sea persistente a través de diferentes sesiones de chat y nunca se pierda el progreso.
