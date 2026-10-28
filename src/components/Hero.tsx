import React from "react";
import { MessageCircle, ArrowDown, Sparkles } from "lucide-react";
import { getWhatsAppLink } from "../data/specialtiesData";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-center bg-[#00351F] text-white overflow-hidden">
      {/* Background Image with Fallback and Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_presenca_veterana_1792869640177.jpg"
          alt="Remodelação e pavimento em madeira nobre restaurado pela Presença Veterana"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-90"
          onError={(e) => {
            const target = e.currentTarget;
            target.onerror = null;
            target.src = "/assets/aistudio/Sitio_digital_minimalista_visual_6fc519c0.jpg";
          }}
        />
        {/* Scrim Overlay ensuring WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002B19]/95 via-[#00351F]/85 to-[#00351F]/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/40" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 lg:py-28 flex flex-col justify-center flex-1">
        <div className="max-w-3xl">
          {/* Kicker badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4A64C]/40 text-[10px] sm:text-xs font-semibold text-[#D4A64C] mb-3 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F6DF83] shrink-0" />
            <span>Presença Veterana · Guimarães, Braga · Atendimento por toda a Europa</span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white text-balance leading-tight sm:leading-[1.14]">
            Mestria e Rigor em <span className="metallic-gold-text">Pavimentos de Madeira</span>, Pinturas e Pladur
          </h1>

          {/* Lead Paragraph */}
          <p className="mt-3 sm:mt-6 text-xs sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl text-balance">
            Elevamos o conforto e valor do seu imóvel com afagamentos de máxima precisão, envernizamentos nobres, aplicação de decks para áreas exteriores e acabamentos impecáveis de pintura e gesso cartonado.
          </p>

          {/* CTAs */}
          <div className="mt-5 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
            <a
              href={getWhatsAppLink("Olá! Gostaria de falar com a Presença Veterana para pedir um orçamento gratuito.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-5 py-3 sm:px-8 sm:py-4 text-xs sm:text-base font-bold text-[#00351F] bg-[#D4A64C] hover:bg-[#F6DF83] rounded-xl transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Pedir Orçamento Gratuito</span>
            </a>

            <a
              href="#especialidades"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-4 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 rounded-xl border border-white/20 backdrop-blur-sm transition-all"
            >
              <span>Ver Especialidades</span>
              <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4A64C]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
