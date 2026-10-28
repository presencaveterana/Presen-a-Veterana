import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { SpecialtiesSection } from "./components/SpecialtiesSection";
import { AdvantagesSection } from "./components/AdvantagesSection";
import { QuoteSimulator } from "./components/QuoteSimulator";
import { ContactSection } from "./components/ContactSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#00351F] selection:bg-[#D4A64C]/30 selection:text-[#00351F]">
      {/* Main Top Header */}
      <Header />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Sobre a Presença Veterana */}
        <AboutSection />

        {/* 3. AS NOSSAS ESPECIALIDADES */}
        <SpecialtiesSection />

        {/* 4. Vantagens e Padrão de Qualidade */}
        <AdvantagesSection />

        {/* 5. Simulador Interativo de Orçamento */}
        <QuoteSimulator />

        {/* 6. Contactos, Visitas Técnicas */}
        <ContactSection />

        {/* 7. Perguntas Frequentes (FAQ Geral) */}
        <FaqSection />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
