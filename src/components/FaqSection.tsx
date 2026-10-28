import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "../data/specialtiesData";

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      category: "Geral & Espaços",
      question: "Realizam trabalhos tanto em residências como em espaços comerciais?",
      answer:
        "Sim. Executamos projetos em habitações particulares (apartamentos e moradias) e em espaços comerciais, escritórios, clínicas e hotelaria, adequando os materiais e horários de intervenção às necessidades de cada cliente."
    },
    {
      category: "Remodelação",
      question: "Fazem remodelações completas ou também aceitam serviços pontuais?",
      answer:
        "Aceitamos ambas as situações. Podemos realizar uma intervenção pontual (como afagar o chão de uma sala, renovar um teto em pladur ou pintar uma fachada) ou coordenar uma remodelação integral chave-na-mão integrando várias especialidades."
    },
    {
      category: "Afagamento & Soalhos",
      question: "Vale a pena afagar e restaurar um piso de madeira antigo?",
      answer:
        "Na grande maioria dos casos, sim. A madeira nobre maciça possui um valor estético e patrimonial único. O afagamento profissional remove manchas, riscos profundos e desníveis, e a aplicação de novos vernizes de alta resistência devolve o aspeto original sem a despesa de substituição."
    },
    {
      category: "Pinturas",
      question: "Que cuidados têm na preparação das paredes e tetos antes de pintar?",
      answer:
        "A durabilidade da pintura depende da preparação de base. Tratamos previamente fissuras, bolores, salitre e humidades, aplicamos primários selantes adequados e isolamos cuidadosamente todos os rodapés, portas, caixilharias e mobiliário antes da aplicação da tinta."
    },
    {
      category: "Prazos & Obra",
      question: "Como são planeados os prazos e o acompanhamento dos trabalhos?",
      answer:
        "Após o levantamento das necessidades e aprovação da proposta, estabelecemos um cronograma claro com data de início e conclusão. A obra é acompanhada diretamente por profissionais qualificados para garantir rigor técnico, limpeza e cumprimento dos prazos acordados."
    },
    {
      category: "Orçamento & Deslocações",
      question: "Como posso pedir um orçamento e qual a vossa área de atendimento?",
      answer:
        "Pode solicitar uma proposta gratuita através do nosso formulário, telefone ou diretamente no WhatsApp. A Presença Veterana Unipessoal Lda. tem sede em Guimarães e Braga e dispõe de capacidade técnica e logística para atender clientes em todo o território nacional e por toda a Europa."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-20 lg:py-24 bg-[#F8F7F3] border-t border-[#E6E9E4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E6E9E4] text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#B8862D] mb-3 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4A64C]" />
            <span>Perguntas Frequentes</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#00351F] font-display tracking-tight">
            Tire as suas dúvidas
          </h2>

          <p className="mt-2 sm:mt-3 text-xs sm:text-base text-[#646B66]">
            Respostas claras e diretas sobre os nossos serviços de remodelação, afagamento de pavimentos, pinturas e soluções para residências e espaços comerciais.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 sm:space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl border border-[#E6E9E4] shadow-xs overflow-hidden transition-all duration-200 hover:border-[#D4A64C]/60"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-4 py-3.5 sm:px-6 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1 pr-2">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#D4A64C] block mb-1">
                      {faq.category}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#00351F] leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#00351F] text-[#D4A64C] rotate-180"
                        : "bg-[#F8F7F3] text-[#00351F]/70"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-[#475249] leading-relaxed border-t border-[#E6E9E4]/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-8 sm:mt-12 text-center p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-white border border-[#E6E9E4] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold text-[#00351F]">
              Tem outra questão sobre o seu projeto?
            </h4>
            <p className="text-xs sm:text-sm text-[#646B66] mt-0.5">
              A nossa equipa técnica está disponível para aconselhar sem qualquer compromisso.
            </p>
          </div>

          <a
            href={getWhatsAppLink("Olá! Tenho uma dúvida sobre um projeto e gostaria de pedir aconselhamento à Presença Veterana.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-[#00351F] hover:bg-[#002B19] text-white text-xs sm:text-sm font-bold transition-all shadow-sm shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#D4A64C]" />
            <span>Falar Connosco</span>
          </a>
        </div>
      </div>
    </section>
  );
};
