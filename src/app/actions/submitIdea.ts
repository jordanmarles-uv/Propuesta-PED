"use server";

import { createClient } from "@supabase/supabase-js";

// ✅ BEST PRACTICE: Nunca exponer claves en el código fuente, usar .env
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // Usar el rol de servicio para acciones seguras en backend

// 🚧 SIMPLIFIED: Iniciamos Supabase de forma simple para este archivo. 
// En una app grande, se suele hacer un archivo lib/supabase.ts
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

export async function submitIdea(formData: FormData) {
  try {
    const nombre = formData.get("nombre") as string;
    const correo = formData.get("correo") as string;
    const estamento = formData.get("estamento") as string;
    const opinion = formData.get("opinion") as string;

    // Validación básica
    if (!nombre || !correo || !estamento || !opinion) {
      return { success: false, error: "Todos los campos son obligatorios" };
    }

    if (!supabase) {
      // 📚 LEARN: Retornamos éxito simulado si no hay claves (para evitar errores en local mientras configuras)
      console.warn("Simulando guardado, faltan credenciales de Supabase en .env");
      console.log("Datos recibidos:", { nombre, correo, estamento, opinion });
      return { success: true, simulated: true };
    }

    // Insertar en la tabla 'ideas'
    const { error } = await supabase
      .from("ideas")
      .insert([{ nombre, correo, estamento, opinion }]);

    if (error) throw error;

    return { success: true };
  } catch (error: unknown) {
    console.error("Error al guardar la idea:", error);
    const message =
      error instanceof Error ? error.message : "Error desconocido";
    return { success: false, error: message };
  }
}
