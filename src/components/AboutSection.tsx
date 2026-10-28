import React from "react";

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-[#F8F7F3] border-b border-[#E6E9E4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-5">
        <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4A64C]">
          <span className="w-8 h-px bg-[#D4A64C]" />
          <span>Presença Veterana</span>
          <span className="w-8 h-px bg-[#D4A64C]" />
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#00351F] font-display tracking-tight">
          Quem somos
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-[#475249] leading-relaxed max-w-3xl mx-auto">
          Transformamos e renovamos espaços com qualidade, dedicação e profissionalismo. Profissionais com mais de 25 anos de experiência, entregamos resultados duradouros e elegantes, utilizando técnicas avançadas, materiais de alta qualidade e uma equipa altamente qualificada, garantindo acabamentos impecáveis que valorizam cada projeto.
        </p>
      </div>
    </section>
  );
};
