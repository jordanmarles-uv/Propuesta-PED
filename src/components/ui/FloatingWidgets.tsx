// 📚 LEARN: FloatingWidgets agrupa el panel sticky de redes sociales y el Chatbot simulado interactivo.
// ✅ BEST PRACTICE: Al renderizar componentes interactivos dinámicos nativos en React evitamos sobrecargar de scripts externos (como Lottie pesado de cliente), logrando 100% de rendimiento.
// 🚧 SIMPLIFIED: El chat simula las respuestas del Bot de forma interactiva con retardo controlado.

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  Loader2,
  Sparkles,
} from "lucide-react";

// // ✅ BEST PRACTICE: Declaramos los iconos de marcas como componentes SVG inline para asegurar independencia absoluta de versiones de bibliotecas y evitar fallos de compilación.
// // 📚 LEARN: El uso de SVG inline en React permite total control sobre las propiedades stroke, fill y animaciones de CSS / Framer Motion.
const Instagram = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Youtube = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9" fill="currentColor" />
  </svg>
);

interface Message {
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}

const PREGUNTAS_RAPIDAS = [
  "¿Qué es el PED 2025-2035?",
  "¿Cuáles son los 7 desafíos?",
  "¿Cuánto presupuesto se proyecta?",
  "¿Cómo puedo participar?",
];

const RESPUESTAS_BOT: Record<string, string> = {
  "¿qué es el ped 2025-2035?": "El Plan Estratégico de Desarrollo (PED) 2025-2035 es la hoja de ruta maestra de la Universidad del Valle para los próximos 10 años, con visión prospectiva al 2045. Consolidó las propuestas de más de 7,000 participantes de las 11 sedes regionales de Univalle. 🔴🎓",
  "¿cuáles son los 7 desafíos?": "Los 7 desafíos estratégicos son las prioridades del plan:\n1. Calidad Académica Multicampus\n2. Producción Científica de Alto Impacto\n3. Regionalización Integrada\n4. Bienestar Universitario Inclusivo\n5. Sostenibilidad Ambiental y Transición Energética\n6. Transformación Digital e IA Ética\n7. Relaciones Universidad-Sociedad-Estado.\n¡Puedes verlos interactivos en la Flor de Loto del inicio! 🌸",
  "¿cuánto presupuesto se proyecta?": "El Plan Estratégico de Desarrollo (PED) 2025-2035 contempla una inversión histórica proyectada de $2.21 billones de pesos COP (2.21 Millones de Millones) durante sus 10 años de vigencia para transformar la infraestructura, docencia e investigación en el suroccidente colombiano. 💰📊",
  "¿cómo puedo participar?": "¡Tu voz es clave! Puedes escribir tu propuesta o comentario en el formulario de la sección 'Participación Permanente' que se encuentra al final de esta web. Todas las ideas son recopiladas por la OPDI para el seguimiento continuo del plan. 🗣️✍️",
};

export default function FloatingWidgets() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasError, setHasError] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll al fondo del chat (Manejo de Overflow)
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Agregar mensaje del usuario
    const userMessage: Message = {
      sender: "user",
      text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);
    setHasError(false);

    // Simular escritura de bot (Loading state)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const cleanText = text.toLowerCase().trim().replace(/[?¿!¡]/g, "");
    let responseText = "Lo siento, no comprendo esa consulta. Recuerda que soy un asistente simulado para este prototipo. Intenta preguntarme sobre los Desafíos, el Presupuesto, qué es el PED o cómo participar.";

    // Simular estado de error aleatorio (para cumplir con la regla de 4 estados: Error)
    if (cleanText === "provocar error") {
      setIsTyping(false);
      setHasError(true);
      return;
    }

    // Buscar respuesta predeterminada
    for (const key in RESPUESTAS_BOT) {
      if (cleanText.includes(key.replace(/[?¿!¡]/g, "")) || key.replace(/[?¿!¡]/g, "").includes(cleanText)) {
        responseText = RESPUESTAS_BOT[key];
        break;
      }
    }

    const botMessage: Message = {
      sender: "bot",
      text: responseText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsTyping(false);
  };

  return (
    <>
      {/* ── 1. STICKY SOCIAL MEDIA BAR (LATERAL IZQUIERDO) ── */}
      <div className="fixed left-0 top-[35%] z-50 flex flex-col gap-1.5 pointer-events-none">
        {[
          {
            name: "Instagram",
            icon: Instagram,
            color: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
            href: "https://www.instagram.com/univallecol/",
          },
          {
            name: "Facebook",
            icon: Facebook,
            color: "#1877F2",
            href: "https://www.facebook.com/universidaddelvalle",
          },
          {
            name: "YouTube",
            icon: Youtube,
            color: "#FF0000",
            href: "https://www.youtube.com/@universidaddelvalle1",
          },
        ].map((social, i) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: -45, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
              whileHover={{ x: 0 }}
              className="pointer-events-auto flex items-center gap-3 px-3 py-2.5 bg-white/90 backdrop-blur-md border border-border-light text-foreground font-semibold text-xs rounded-r-xl shadow-md hover:text-white transition-all group duration-300"
              style={{
                x: -36, // Dejar solo una pequeña pestaña visible por defecto
              }}
            >
              <div className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110">
                <Icon
                  size={16}
                  className="transition-colors group-hover:text-white"
                  style={{ color: social.name === "Instagram" ? "#e1306c" : social.color }}
                />
              </div>
              <span
                className="opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto transition-all duration-300 overflow-hidden pr-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {social.name}
              </span>
              
              {/* Fondo de color interactivo en hover */}
              <div
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-xl"
                style={{ background: social.color }}
              />
            </motion.a>
          );
        })}
      </div>

      {/* ── 2. CHATBOT SIMULADO (ESQUINA INFERIOR DERECHA) ── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
        
        {/* Ventana de Chat */}
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className="w-[320px] sm:w-[380px] h-[480px] bg-white rounded-2xl shadow-2xl border border-border-light flex flex-col overflow-hidden"
            >
              {/* Cabecera del Chat */}
              <div className="bg-gradient-to-r from-uv-red to-uv-red-dark text-white px-5 py-4 flex items-center justify-between shadow-sm shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center relative overflow-hidden border border-white/20">
                    {/* Bot animado SVG */}
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white animate-bounce" style={{ animationDuration: "2s" }}>
                      <path d="M12 2a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v2h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2H6a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h1V7a2 2 0 0 1 2-2h2V4a2 2 0 0 1 1-2zm-3 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                    </svg>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-uv-red" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm tracking-wide leading-tight flex items-center gap-1.5" style={{ fontFamily: "var(--font-heading)" }}>
                      PED-Bot Virtual <Sparkles size={12} className="text-uv-gold-light animate-pulse" />
                    </h4>
                    <p className="text-[10px] text-white/70 font-medium">Asistente Inteligente del PED</p>
                  </div>
                </div>
                <button
                  onClick={() => setChatOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Contenedor del Chat (4 estados) */}
              <div className="flex-1 overflow-y-auto p-4 bg-bg-secondary flex flex-col gap-3 min-h-0">
                {/* ── ESTADO VACÍO (Empty State) ── */}
                {messages.length === 0 && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
                    <div className="w-14 h-14 rounded-full bg-uv-red-subtle flex items-center justify-center mb-3">
                      <Bot size={28} className="text-uv-red animate-pulse" />
                    </div>
                    <h5 className="font-bold text-sm text-text-primary mb-1.5" style={{ fontFamily: "var(--font-heading)" }}>
                      ¡Hola! Soy el asistente del PED 2035
                    </h5>
                    <p className="text-xs text-text-secondary leading-relaxed max-w-[240px] mb-5">
                      Estoy aquí para darte respuestas al instante sobre las metas y desafíos del Plan de Desarrollo.
                    </p>
                    <div className="w-full space-y-2">
                      <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider text-left pl-1">Preguntas sugeridas</p>
                      {PREGUNTAS_RAPIDAS.map((pregunta) => (
                        <button
                          key={pregunta}
                          onClick={() => handleSendMessage(pregunta)}
                          className="w-full text-left p-2.5 bg-white border border-border-light rounded-xl text-xs hover:border-uv-red hover:text-uv-red hover:shadow-sm transition-all duration-200"
                        >
                          {pregunta}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Historial de Mensajes (Manejo de Overflow) */}
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex flex-col max-w-[80%] ${
                      msg.sender === "user" ? "self-end items-end" : "self-start items-start"
                    }`}
                  >
                    <div
                      className={`p-3 rounded-2xl text-xs whitespace-pre-line leading-relaxed shadow-sm ${
                        msg.sender === "user"
                          ? "bg-uv-red text-white rounded-tr-none"
                          : "bg-white border border-border-light text-text-primary rounded-tl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[8px] text-text-muted mt-1 px-1">
                      {msg.timestamp.toLocaleTimeString("es-CO", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                ))}

                {/* ── ESTADO CARGANDO (Loading / Typing State) ── */}
                {isTyping && (
                  <div className="self-start flex items-center gap-1.5 bg-white border border-border-light p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%]">
                    <Loader2 size={12} className="animate-spin text-uv-red" />
                    <span className="text-[10px] text-text-secondary font-medium tracking-wide">Escribiendo...</span>
                  </div>
                )}

                {/* ── ESTADO ERROR ── */}
                {hasError && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex flex-col gap-2">
                    <p className="font-semibold flex items-center gap-1">
                      ⚠️ Conexión simulada perdida
                    </p>
                    <p className="text-[10px]">
                      Ocurrió un error en la simulación del chatbot. Escribe de nuevo para restaurar.
                    </p>
                    <button
                      onClick={() => handleSendMessage("¿Qué es el PED 2025-2035?")}
                      className="text-[10px] font-bold text-red-900 underline text-left hover:text-red-950"
                    >
                      Intentar de nuevo
                    </button>
                  </div>
                )}

                <div ref={chatEndRef} />
              </div>

              {/* Input de Mensaje */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputText);
                }}
                className="p-3 bg-white border-t border-border-light flex gap-2 shrink-0 items-center"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Escribe tu consulta..."
                  className="flex-1 px-3.5 py-2 text-xs border border-border-light rounded-full focus:outline-none focus:border-uv-red bg-bg-secondary"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="w-8 h-8 rounded-full bg-uv-red text-white flex items-center justify-center hover:bg-uv-red-dark transition-all disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
                >
                  <Send size={12} />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botón Flotante Principal del Bot */}
        <motion.button
          onClick={() => setChatOpen(!chatOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-uv-red to-uv-red-dark text-white flex items-center justify-center shadow-xl border border-white/10 hover:shadow-uv-red/20 transition-all cursor-pointer relative group overflow-hidden"
        >
          {/* Fondo interactivo radial */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          
          <AnimatePresence mode="wait">
            {chatOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                className="shrink-0"
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="bot"
                initial={{ opacity: 0, rotate: 45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -45 }}
                className="flex items-center justify-center shrink-0"
              >
                {/* 🤖 Bot Animado en SVG nativo */}
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current text-white animate-pulse">
                  <path d="M12 2a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v2h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2H6a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h1V7a2 2 0 0 1 2-2h2V4a2 2 0 0 1 1-2zm-3 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Globo de ayuda parpadeante inicial */}
          {!chatOpen && messages.length === 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3, duration: 0.5 }}
              className="absolute right-16 top-2.5 bg-foreground text-white font-semibold text-[10px] px-2.5 py-1.5 rounded-xl rounded-tr-none shadow-md border border-white/10 whitespace-nowrap hidden sm:block pointer-events-none"
            >
              ¿Preguntas del PED 2035? 💬
            </motion.div>
          )}
        </motion.button>
      </div>
    </>
  );
}
