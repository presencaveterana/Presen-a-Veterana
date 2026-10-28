import React, { useState } from "react";
import { MessageCircle, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import {
  WHATSAPP_DISPLAY,
  EMAIL_CONTACT,
  getWhatsAppLink
} from "../data/specialtiesData";

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    nome: "",
    contacto: "",
    servico: "Afagamentos de Pavimentos",
    mensagem: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.nome || !formState.contacto) return;

    // Send directly to WhatsApp
    const msg = `Olá! Mensagem enviada pelo website da Presença Veterana Unipessoal Lda.:
Nome: ${formState.nome}
Contacto: ${formState.contacto}
Serviço de interesse: ${formState.servico}
Mensagem: ${formState.mensagem || "Gostaria de agendar uma visita para orçamento."}`;

    window.open(getWhatsAppLink(msg), "_blank");
    setIsSubmitted(true);
  };

  return (
    <section id="contactos" className="py-10 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-16">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#B8862D]">
            Fale Connosco
          </span>
          <h2 className="mt-1.5 sm:mt-2 text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#00351F] font-display">
            Contactos & Pedido de Orçamento
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12">
          {/* Left Column: Direct Contacts & FAQ */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
              {/* WhatsApp Card */}
              <a
                href={getWhatsAppLink("Olá! Gostaria de falar com a Presença Veterana para pedir um orçamento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F8F7F3] border border-[#E6E9E4] hover:border-[#D4A64C] transition-all hover:shadow-md block group cursor-pointer"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white text-[#D4A64C] flex items-center justify-center mb-2 sm:mb-3 shadow-xs group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-[11px] sm:text-xs text-[#646B66] font-medium">WhatsApp Direto</div>
                <div className="text-sm sm:text-base font-bold text-[#00351F] font-display mt-0.5">
                  {WHATSAPP_DISPLAY}
                </div>
                <div className="text-[10px] sm:text-xs text-[#D4A64C] font-semibold mt-0.5 sm:mt-1">
                  Conversar agora →
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${EMAIL_CONTACT}`}
                className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F8F7F3] border border-[#E6E9E4] hover:border-[#D4A64C] transition-all hover:shadow-md block group cursor-pointer"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white text-[#D4A64C] flex items-center justify-center mb-2 sm:mb-3 shadow-xs group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-[11px] sm:text-xs text-[#646B66] font-medium">Email Institucional</div>
                <div className="text-xs sm:text-sm font-bold text-[#00351F] font-display mt-0.5 truncate">
                  {EMAIL_CONTACT}
                </div>
                <div className="text-[10px] sm:text-xs text-[#D4A64C] font-semibold mt-0.5 sm:mt-1">
                  Enviar email →
                </div>
              </a>

              {/* Horário */}
              <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F8F7F3] border border-[#E6E9E4]">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white text-[#D4A64C] flex items-center justify-center mb-2 sm:mb-3 shadow-xs">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-[11px] sm:text-xs text-[#646B66] font-medium">Horário de Atendimento</div>
                <div className="text-xs sm:text-sm font-bold text-[#00351F] font-display mt-0.5">
                  Segunda a Sábado
                </div>
                <div className="text-[10px] sm:text-xs text-[#646B66] mt-0.5">
                  08:00 às 19:00
                </div>
              </div>

              {/* Área de Atuação */}
              <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F8F7F3] border border-[#E6E9E4]">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white text-[#D4A64C] flex items-center justify-center mb-2 sm:mb-3 shadow-xs">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-[11px] sm:text-xs text-[#646B66] font-medium">Zona Geográfica</div>
                <div className="text-xs sm:text-sm font-bold text-[#00351F] font-display mt-0.5">
                  Atendimento por toda a Europa
                </div>
                <div className="text-[10px] sm:text-xs text-[#646B66] mt-0.5">
                  Sede em Guimarães, Braga - Portugal
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#F8F7F3] rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-[#E6E9E4] shadow-xs sm:shadow-sm">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-2xl font-bold text-[#00351F] font-display">
                  Envie uma Mensagem Rápida
                </h3>
                <p className="text-[11px] sm:text-sm text-[#646B66] mt-0.5 sm:mt-1">
                  Preencha os campos abaixo para abrir diretamente uma conversa com a nossa equipa técnica no WhatsApp.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-[#D4A64C] text-center space-y-2.5 sm:space-y-3">
                  <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-[#D4A64C] mx-auto" />
                  <h4 className="text-base sm:text-lg font-bold text-[#00351F] font-display">
                    Mensagem Preparada!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#646B66]">
                    A conversa no WhatsApp foi iniciada. Caso a janela não tenha aberto, clique no botão abaixo.
                  </p>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-xs font-bold text-white bg-[#00351F] rounded-xl hover:bg-[#002B19]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#D4A64C]" />
                    <span>Reabrir WhatsApp</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#00351F] mb-1 sm:mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: João Silva"
                      value={formState.nome}
                      onChange={(e) => setFormState({ ...formState, nome: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[#E6E9E4] bg-white text-xs sm:text-sm text-[#00351F] focus:outline-none focus:border-[#D4A64C] focus:ring-1 focus:ring-[#D4A64C]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#00351F] mb-1 sm:mb-1.5">
                      Contacto Telefónico / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: 935 742 686"
                      value={formState.contacto}
                      onChange={(e) => setFormState({ ...formState, contacto: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[#E6E9E4] bg-white text-xs sm:text-sm text-[#00351F] focus:outline-none focus:border-[#D4A64C] focus:ring-1 focus:ring-[#D4A64C]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#00351F] mb-1 sm:mb-1.5">
                      Especialidade Pretendida
                    </label>
                    <select
                      value={formState.servico}
                      onChange={(e) => setFormState({ ...formState, servico: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[#E6E9E4] bg-white text-xs sm:text-sm text-[#00351F] focus:outline-none focus:border-[#D4A64C] focus:ring-1 focus:ring-[#D4A64C]"
                    >
                      <option value="Afagamentos de Pavimentos">Afagamentos de Pavimentos</option>
                      <option value="Pinturas Interiores e Exteriores">Pinturas (Interiores / Exteriores)</option>
                      <option value="Envernizamentos de Soalhos">Envernizamentos</option>
                      <option value="Instalação / Aplicação de Deck">Instalação / Aplicação de Deck</option>
                      <option value="Soluções em Pladur">Pladur (Tetos / Divisórias)</option>
                      <option value="Remodelação Geral Integrada">Remodelação Geral Integrada</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#00351F] mb-1 sm:mb-1.5">
                      Detalhes da Obra ou Morada (Opcional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Indique área em m², concelho e data prevista..."
                      value={formState.mensagem}
                      onChange={(e) => setFormState({ ...formState, mensagem: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-[#E6E9E4] bg-white text-xs sm:text-sm text-[#00351F] focus:outline-none focus:border-[#D4A64C] focus:ring-1 focus:ring-[#D4A64C] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-bold text-white bg-[#00351F] hover:bg-[#002B19] rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#D4A64C]" />
                    <span>Iniciar Conversa no WhatsApp</span>
                    <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
