import type { Metadata } from "next";
import "./globals.css";

// ✅ BEST PRACTICE: SEO metadata completa con structured data
export const metadata: Metadata = {
  title: "PED 2025-2035 | Universidad del Valle · Visión 2045",
  description:
    "Plan Estratégico de Desarrollo de la Universidad del Valle. 7 desafíos estratégicos, 33 programas institucionales y una visión transformadora al 2045. Conoce, participa y construye.",
  keywords: [
    "PED",
    "Universidad del Valle",
    "Plan Estratégico",
    "Univalle",
    "2025-2035",
    "Visión 2045",
    "Cali",
    "Colombia",
    "educación superior",
  ],
  authors: [{ name: "Universidad del Valle - OPDI" }],
  openGraph: {
    title: "PED 2025-2035 | Universidad del Valle",
    description:
      "7 desafíos estratégicos y 33 programas para transformar la universidad pública más importante del suroccidente colombiano. $2,21 billones de inversión proyectada.",
    type: "website",
    locale: "es_CO",
    siteName: "PED Univalle 2025-2035",
    // 📚 LEARN: Cuando generes og-image-ped.jpg, descomenta la siguiente línea:
    // images: [{ url: "/media/og-image-ped.jpg", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      {/* 📚 LEARN: lang="es" mejora accesibilidad y SEO para contenido en español */}
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
