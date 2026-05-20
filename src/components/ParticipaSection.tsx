"use client";

// 📚 LEARN: Sección de participación con formulario funcional
// y próximos eventos. Usa el server action submitIdea (ya existente)
// con feedback visual completo: loading, success, error states.

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { submitIdea } from "@/app/actions/submitIdea";
import { PROXIMOS_EVENTOS } from "@/data/timeline";
import SectionHeading from "@/components/ui/SectionHeading";

// ✅ BEST PRACTICE: 4 estados UI obligatorios (Loading, Error, Empty, Success)
type FormState = "idle" | "loading" | "success" | "error";

const ESTAMENTOS = [
  "Estudiante pregrado",
  "Estudiante posgrado",
  "Docente",
  "Administrativo",
  "Egresado/a",
  "Comunidad externa",
] as const;

export default function ParticipaSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMsg("");

    try {
      const formData = new FormData(e.currentTarget);
      const result = await submitIdea(formData);

      if (result.success) {
        setFormState("success");
        formRef.current?.reset();
      } else {
        setErrorMsg(result.error ?? "Error desconocido");
        setFormState("error");
      }
    } catch {
      setErrorMsg("Error de conexión. Intenta de nuevo.");
      setFormState("error");
    }
  };

  return (
    <section id="participa" className="section-padding">
      <div className="container-wide mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Participación Permanente"
          title="El Plan Estratégico es de todos"
          highlight="de todos"
          description="La implementación necesita aportes, sugerencias, seguimiento y evaluación permanente de toda la comunidad universitaria."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Formulario — 3 columnas */}
          <div className="lg:col-span-3">
            <div className="card-featured p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <CheckCircle2 size={48} className="mx-auto mb-4 text-accent-green" />
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      ¡Gracias por participar!
                    </h3>
                    <p className="text-sm text-text-secondary mb-6">
                      Tu opinión será revisada por el equipo de la OPDI.
                    </p>
                    <button
                      onClick={() => setFormState("idle")}
                      className="btn-secondary text-sm"
                    >
                      Enviar otra idea
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wider">
                          Nombre
                        </label>
                        <input
                          name="nombre"
                          type="text"
                          required
                          placeholder="Tu nombre completo"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wider">
                          Correo
                        </label>
                        <input
                          name="correo"
                          type="email"
                          required
                          placeholder="correo@univalle.edu.co"
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wider">
                        Estamento
                      </label>
                      <select name="estamento" required className="input-field">
                        <option value="">Selecciona tu estamento</option>
                        {ESTAMENTOS.map((e) => (
                          <option key={e} value={e}>
                            {e}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wider">
                        Tu idea o comentario
                      </label>
                      <textarea
                        name="opinion"
                        required
                        rows={4}
                        placeholder="¿Qué te gustaría ver en la Universidad del Valle al 2035?"
                        className="input-field resize-none"
                      />
                    </div>

                    {/* Error state */}
                    {formState === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 p-3 rounded-lg bg-red-50 text-red-700 text-sm"
                      >
                        <AlertCircle size={16} />
                        {errorMsg}
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      disabled={formState === "loading"}
                      className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {formState === "loading" ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Enviar mi idea
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Próximos eventos — 2 columnas */}
          <div className="lg:col-span-2">
            <h3
              className="text-lg font-bold mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Próximos eventos
            </h3>
            <div className="space-y-4">
              {PROXIMOS_EVENTOS.map((evento, i) => (
                <motion.div
                  key={evento.id}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card p-4 flex gap-4"
                >
                  {/* Date badge */}
                  <div className="w-14 h-14 rounded-xl bg-uv-red-subtle flex flex-col items-center justify-center shrink-0">
                    <span
                      className="text-lg font-bold text-uv-red leading-none"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {evento.day}
                    </span>
                    <span className="text-[10px] font-semibold text-uv-red uppercase">
                      {evento.month}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold truncate">{evento.title}</h4>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="flex items-center gap-1 text-[11px] text-text-muted">
                        <MapPin size={11} />
                        {evento.location}
                      </span>
                    </div>
                    <span
                      className={`inline-block mt-2 text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                        evento.modality === "Presencial"
                          ? "bg-green-50 text-green-700"
                          : evento.modality === "Virtual"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {evento.modality}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
