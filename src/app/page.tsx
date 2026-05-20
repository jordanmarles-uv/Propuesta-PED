// 📚 LEARN: page.tsx es un Server Component por defecto en Next.js App Router.
// Los componentes con "use client" se importan y se renderizan aquí.
// Este archivo orquesta el flujo narrativo del landing — el orden importa.

import Header from "@/components/Header";
import LotusHeroSection from "@/components/lotus/LotusHeroSection";
import ContextoSection from "@/components/ContextoSection";
import DesafiosSection from "@/components/DesafiosSection";
import CifrasSection from "@/components/CifrasSection";
import TimelineSection from "@/components/TimelineSection";
import MultimediaSection from "@/components/MultimediaSection";
import ParticipaSection from "@/components/ParticipaSection";
import SocialFeedSection from "@/components/SocialFeedSection";
import FooterInstitutional from "@/components/FooterInstitutional";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <LotusHeroSection />
        <ContextoSection />
        <div className="section-divider" />
        <TimelineSection />
        <SocialFeedSection />
        <DesafiosSection />
        <CifrasSection />
        <div className="section-divider" />
        <MultimediaSection />
        <ParticipaSection />
      </main>
      <FooterInstitutional />
    </>
  );
}

