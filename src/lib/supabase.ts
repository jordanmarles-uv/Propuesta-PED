// ✅ BEST PRACTICE: Wrapper de servicios externos.
// Nunca importar @supabase/supabase-js directamente en componentes.
// Si mañana se cambia a Firebase, solo se toca este archivo.

// 📚 LEARN: En WordPress esto es como tener un archivo functions.php
// que centraliza las conexiones a la BD — aquí hacemos lo mismo.

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 🚧 SIMPLIFIED: Cliente opcional — si no hay env vars, retorna null.
// Esto permite que la app funcione sin Supabase para prototipado.
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

// ✅ BEST PRACTICE: Helper que indica si Supabase está configurado
export function isSupabaseReady(): boolean {
  return supabase !== null;
}
