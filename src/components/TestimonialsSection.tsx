import React from "react";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Eng. Miguel Ferreira",
      location: "Centro Histórico, Guimarães",
      service: "Afagamento & Envernizamento Acetinado",
      content:
        "Tinha um chão de taco em madeira maciça com mais de 30 anos extremamente danificado. A equipa da Presença Veterana realizou o afagamento com maquinaria que praticamente não levantou pó nenhum. O acabamento acetinado ficou cinematográfico.",
      rating: 5
    },
    {
      name: "Dra. Sofia Carvalheiro",
      location: "Braga",
      service: "Pintura Geral & Aplicação de Deck em Teca",
      content:
        "Excelente profissionalismo. Pintaram todo o interior da moradia e instalaram o deck ao redor da piscina. Cumpriram o prazo ao dia e a limpeza no final de cada jornada de trabalho foi impecável.",
      rating: 5
    },
    {
      name: "Arq. Rui Albuquerque",
      location: "Vila Nova de Famalicão",
      service: "Soluções em Pladur & Tetos Falsos com Sanca",
      content:
        "Trabalho com várias equipas de construção e o rigor na execução do pladur da Presença Veterana é notável: esquadria milimétrica, juntas invisíveis após a lixagem e perfeita integração das fitas LED nos tetos.",
      rating: 5
    }
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-white border-b border-[#E6E9E4]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-16">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#B8862D]">
            Testemunhos Verificados
          </span>
          <h2 className="mt-1.5 sm:mt-2 text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#00351F] font-display">
            A Confiança dos Nossos Clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-[#F8F7F3] border border-[#E6E9E4] flex flex-col justify-between relative shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-1 text-[#D4A64C] mb-2.5 sm:mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#00351F]/80 leading-relaxed italic mb-4 sm:mb-6">
                  "{item.content}"
                </p>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-[#E6E9E4]">
                <div className="font-bold text-xs sm:text-sm text-[#00351F] font-display">
                  {item.name}
                </div>
                <div className="text-[11px] sm:text-xs text-[#646B66]">{item.location}</div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-[#D4A64C] mt-0.5">
                  Serviço: {item.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
