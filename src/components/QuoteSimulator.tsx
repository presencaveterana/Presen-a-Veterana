import React, { useState } from "react";
import { Calculator, MessageCircle, ArrowRight, Check, Sparkles } from "lucide-react";
import { getWhatsAppLink } from "../data/specialtiesData";

export const QuoteSimulator: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>("Afagamentos de Pavimentos");
  const [area, setArea] = useState<number>(50);
  const [propertyType, setPropertyType] = useState<string>("Apartamento");
  const [location, setLocation] = useState<string>("Guimarães");

  const servicesList = [
    "Afagamentos de Pavimentos",
    "Pinturas Interiores e Exteriores",
    "Envernizamentos de Soalhos",
    "Aplicação de Deck Exterior",
    "Tetos Falsos / Pladur",
    "Múltiplos Serviços Integrados"
  ];

  const propertyTypes = ["Apartamento", "Moradia", "Espaço Comercial", "Terraço / Jardim"];

  const locations = [
    "Guimarães",
    "Braga",
    "Porto / Grande Porto",
    "Resto de Portugal",
    "França",
    "Suíça",
    "Espanha",
    "Outro país na Europa"
  ];

  // Formatted message for WhatsApp
  const generatedWhatsAppMsg = `Olá! Estive a utilizar o simulador no website da Presença Veterana Unipessoal Lda. Gostaria de solicitar orçamento para:
- Serviço: ${selectedService}
- Área aproximada: ${area} m²
- Tipo de imóvel: ${propertyType}
- Localização: ${location}

Poderiam indicar-me a disponibilidade para uma visita técnica? Obrigado!`;

  return (
    <section id="simulador" className="py-10 sm:py-16 lg:py-24 bg-[#F8F7F3] border-b border-[#E6E9E4]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 shadow-lg sm:shadow-xl border border-[#E6E9E4]">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00351F]/5 text-[10px] sm:text-xs font-bold text-[#00351F] uppercase tracking-wider mb-2 sm:mb-3">
              <Calculator className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4A64C]" />
              Simulação Sem Compromisso
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#00351F] font-display">
              Simule o Seu Pedido de Orçamento
            </h2>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-base text-[#646B66]">
              Indique os detalhes do seu espaço e receba uma proposta personalizada diretamente no WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            {/* Step 1: Select Service */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#00351F] mb-1.5 sm:mb-2">
                  1. Selecione a Especialidade
                </label>
                <div className="space-y-1.5 sm:space-y-2">
                  {servicesList.map((srv, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedService(srv)}
                      className={`w-full text-left px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-between border cursor-pointer ${
                        selectedService === srv
                          ? "bg-[#00351F] text-white border-[#00351F] shadow-xs"
                          : "bg-white text-[#00351F] border-[#E6E9E4] hover:border-[#D4A64C]"
                      }`}
                    >
                      <span className="truncate">{srv}</span>
                      {selectedService === srv && (
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4A64C] shrink-0 ml-2" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Location */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#00351F] mb-2">
                  2. Localização do Imóvel
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {locations.map((loc, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setLocation(loc)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium text-center border transition-all cursor-pointer ${
                        location === loc
                          ? "bg-[#00351F] text-white border-[#00351F]"
                          : "bg-white text-[#646B66] border-[#E6E9E4] hover:border-slate-400"
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Area & Property Type & Summary */}
            <div className="space-y-6 flex flex-col justify-between">
              <div>
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <label className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#00351F]">
                      3. Área Estimada
                    </label>
                    <span className="text-sm sm:text-base font-bold font-display text-[#00351F] bg-[#F8F7F3] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg border border-[#E6E9E4]">
                      {area} m²
                    </span>
                  </div>

                  <input
                    type="range"
                    min="15"
                    max="250"
                    step="5"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full accent-[#00351F] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] sm:text-[11px] text-[#646B66] mt-1">
                    <span>15 m²</span>
                    <span>100 m²</span>
                    <span>250+ m²</span>
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#00351F] mb-1.5 sm:mb-2">
                    4. Tipo de Espaço
                  </label>
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                    {propertyTypes.map((pt, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setPropertyType(pt)}
                        className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs font-medium text-center border transition-all cursor-pointer ${
                          propertyType === pt
                            ? "bg-[#00351F] text-white border-[#00351F]"
                            : "bg-white text-[#646B66] border-[#E6E9E4] hover:border-slate-400"
                        }`}
                      >
                        {pt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Summary Card with WhatsApp Button */}
              <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#00351F] text-white space-y-3 sm:space-y-4 shadow-md sm:shadow-lg border border-[#D4A64C]/30">
                <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-300">
                  <span>Resumo do Pedido</span>
                  <span className="text-[#D4A64C] font-semibold">Avaliação Gratuita</span>
                </div>

                <div className="text-[11px] sm:text-xs space-y-0.5 text-slate-200">
                  <div className="font-semibold text-white truncate">{selectedService}</div>
                  <div>Área: {area} m² · {propertyType} · {location}</div>
                </div>

                <a
                  href={getWhatsAppLink(generatedWhatsAppMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold text-[#00351F] bg-[#D4A64C] hover:bg-[#F6DF83] rounded-xl transition-all shadow cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Simulação no WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="text-[10px] sm:text-[11px] text-center text-slate-400">
                  Sem qualquer compromisso de adjudicação. Resposta rápida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
