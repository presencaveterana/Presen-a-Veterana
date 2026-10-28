import React from "react";
import { ArrowDown, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-center bg-[#00351F] text-white overflow-hidden">
      {/* Background Image with Fallback and Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/Captura_de_tela_2026-10-28_172622_f03fd511.png"
          alt="Paisagem arquitetónica de Portugal com edifícios e telhados tradicionais - Presença Veterana"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_45%] brightness-95"
          onError={(e) => {
            const target = e.currentTarget;
            target.onerror = null;
            target.src = "/src/assets/images/hero_presenca_veterana_1792869640177.jpg";
          }}
        />
        {/* Scrim Overlay ensuring WCAG AA contrast and elegant brand atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002B19]/92 via-[#00351F]/80 to-[#00351F]/55" />
        <div className="absolute inset-0 bg-black/25" />
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
            Construímos com rigor. <span className="metallic-gold-text">Transformamos com qualidade.</span>
          </h1>

          {/* Lead Paragraph */}
          <p className="mt-3 sm:mt-6 text-xs sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl text-balance">
            Soluções profissionais de construção civil, remodelação e acabamentos, com compromisso, atenção ao detalhe e acompanhamento em cada etapa.
          </p>

          {/* CTAs */}
          <div className="mt-5 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
            <a
              href="#especialidades"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-4 text-xs sm:text-base font-semibold text-white bg-white/10 hover:bg-white/15 rounded-xl border border-white/20 backdrop-blur-sm transition-all shadow-sm"
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
