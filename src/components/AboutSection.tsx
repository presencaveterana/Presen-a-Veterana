import React from "react";

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-10 sm:py-16 lg:py-24 bg-[#F8F7F3] border-b border-[#E6E9E4]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-center">
          {/* Left Column: Visual Brand Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-xl border border-[#E6E9E4] bg-white p-2 sm:p-3">
              <div className="relative rounded-lg sm:rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src="/servicos/afagamentos/04-pavimentos-restaurados.jpg"
                  alt="Acabamento de excelência em madeira pela Presença Veterana"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = "/assets/aistudio/Sitio_digital_minimalista_visual_6fc519c0.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00351F]/90 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-6 text-white">
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#D4A64C] font-bold">
                    Presença Veterana Unipessoal Lda.
                  </div>
                  <div className="text-base sm:text-xl font-bold font-display">
                    Tradição e Modernidade em Obras
                  </div>
                </div>
              </div>

              {/* Float Experience Badge */}
              <div className="absolute -bottom-3 -right-3 sm:bottom-6 sm:right-6 bg-[#00351F] text-white p-2.5 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border border-[#D4A64C]/40 flex items-center gap-2 sm:gap-3">
                <div className="text-xl sm:text-3xl font-extrabold font-display metallic-gold-text">
                  25+
                </div>
                <div className="text-[10px] sm:text-xs leading-tight text-slate-200">
                  Anos de<br />
                  <span className="text-[#D4A64C] font-semibold">Experiência e Excelência</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title and Subtitle */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#00351F] font-display tracking-tight">
              Quem somos
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#475249] leading-relaxed">
              Transformamos e renovamos espaços com qualidade, dedicação e profissionalismo. Profissionais com mais de 25 anos de experiência, entregamos resultados duradouros e elegantes, utilizando técnicas avançadas, materiais de alta qualidade e uma equipa altamente qualificada, garantindo acabamentos impecáveis que valorizam cada projeto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
