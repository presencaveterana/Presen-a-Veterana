import React, { useState } from "react";
import { MessageCircle, Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { getWhatsAppLink, WHATSAPP_DISPLAY, EMAIL_CONTACT } from "../data/specialtiesData";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E6E9E4] transition-all">
      {/* Top Utility Bar (Subtle Contact Info) */}
      <div className="bg-[#00351F] text-slate-200 text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-6 lg:px-8 border-b border-[#002B19]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4A64C] shrink-0" />
              <span>
                <span className="hidden sm:inline text-slate-300">Guimarães, Braga · </span>
                <span className="text-[#D4A64C] font-semibold">Atendimento por toda a Europa</span>
              </span>
            </span>
            <a
              href={`mailto:${EMAIL_CONTACT}`}
              className="hidden md:flex items-center gap-1.5 hover:text-[#D4A64C] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#D4A64C]" />
              {EMAIL_CONTACT}
            </a>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={`tel:+${WHATSAPP_DISPLAY.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-1 font-medium hover:text-[#D4A64C] transition-colors"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4A64C]" />
              <span>{WHATSAPP_DISPLAY}</span>
            </a>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-[#D4A64C] font-semibold">
              Orçamento em 24h
            </span>
          </div>
        </div>
      </div>

      {/* Main Top Bar - Strictly Zone 1, Zone 2, Zone 3 */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 sm:gap-8 h-15 sm:h-20">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="/"
            className="flex items-center gap-2 text-slate-900 group shrink-0 whitespace-nowrap"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#00351F] flex items-center justify-center text-[#D4A64C] font-bold font-display text-base sm:text-xl shadow-sm border border-[#D4A64C]/30 group-hover:scale-105 transition-transform">
              PV
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-xl font-extrabold text-[#00351F] font-display tracking-tight leading-tight">
                Presença Veterana
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold text-[#B8862D] -mt-0.5">
                Unipessoal Lda.
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Clean single-line prose) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#00351F]/80">
            <a
              href="#sobre"
              className="hover:text-[#D4A64C] transition-colors whitespace-nowrap shrink-0"
            >
              Sobre Nós
            </a>
            <a
              href="#especialidades"
              className="text-[#00351F] hover:text-[#D4A64C] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <span>Especialidades</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A64C]" />
            </a>
            <a
              href="#vantagens"
              className="hover:text-[#D4A64C] transition-colors whitespace-nowrap shrink-0"
            >
              Vantagens
            </a>
            <a
              href="#simulador"
              className="hover:text-[#D4A64C] transition-colors whitespace-nowrap shrink-0"
            >
              Simulador
            </a>
            <a
              href="#contactos"
              className="hover:text-[#D4A64C] transition-colors whitespace-nowrap shrink-0"
            >
              Contactos
            </a>
          </nav>

          {/* Zone 3: Primary Action (WhatsApp Quote Button) */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppLink("Olá! Gostaria de pedir um orçamento à Presença Veterana Unipessoal Lda.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#00351F] bg-[#D4A64C] hover:bg-[#F6DF83] rounded-xl transition-all shadow-sm hover:shadow-md whitespace-nowrap cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pedir Orçamento</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#00351F] hover:bg-slate-100 rounded-lg cursor-pointer"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E6E9E4] bg-white px-4 pt-4 pb-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 text-base font-semibold text-[#00351F]">
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#F8F7F3]"
            >
              Sobre Nós
            </a>
            <a
              href="#especialidades"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#F8F7F3] text-[#D4A64C]"
            >
              As Nossas Especialidades
            </a>
            <a
              href="#vantagens"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#F8F7F3]"
            >
              Vantagens
            </a>
            <a
              href="#simulador"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#F8F7F3]"
            >
              Simulador de Orçamento
            </a>
            <a
              href="#contactos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#F8F7F3]"
            >
              Contactos
            </a>
          </nav>

          <div className="pt-3 border-t border-[#E6E9E4]">
            <a
              href={getWhatsAppLink("Olá! Gostaria de pedir um orçamento à Presença Veterana Unipessoal Lda.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-[#00351F] bg-[#D4A64C] rounded-xl shadow cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pedir Orçamento Gratuito</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
