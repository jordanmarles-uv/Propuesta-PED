// 📚 LEARN: En Next.js static export, las rutas <img src="/media/..."> son absolutas al dominio.
// En GitHub Pages el sitio vive en /Propuesta-PED/, no en la raíz.
// ✅ BEST PRACTICE: Centralizar el prefijo en un solo helper evita tener que tocar cada <img>.

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prepend the GitHub Pages basePath to any public asset path.
 * Usage: <img src={asset("/media/logo.png")} />
 */
export const asset = (path: string): string => `${BASE_PATH}${path}`;
