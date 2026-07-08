// 📚 LEARN: page.tsx es un Server Component por defecto en Next.js App Router.
// Los componentes con "use client" se importan y se renderizan aquí.
// Este archivo orquesta el flujo narrativo del landing — el orden importa.

import Header from "@/components/Header";
import LotusHeroSection from "@/components/lotus/LotusHeroSection";
import ContextoSection from "@/components/ContextoSection";
import CifrasSection from "@/components/CifrasSection";
import TimelineSection from "@/components/TimelineSection";
import MultimediaSection from "@/components/MultimediaSection";
import ParticipaSection from "@/components/ParticipaSection";
import FooterInstitutional from "@/components/FooterInstitutional";
import FloatingWidgets from "@/components/ui/FloatingWidgets";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <LotusHeroSection />
        <ContextoSection />
        <div className="section-divider" />
        <TimelineSection />
        <CifrasSection />
        <div className="section-divider" />
        <MultimediaSection />
        <ParticipaSection />
      </main>
      <FooterInstitutional />
      <FloatingWidgets />
    </>
  );
}

