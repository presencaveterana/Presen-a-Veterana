import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppLink, WHATSAPP_DISPLAY } from "../data/specialtiesData";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-1.5">
      {/* Friendly Tooltip - Compact / Menor */}
      {showTooltip && (
        <div className="relative bg-[#00351F]/95 backdrop-blur-md text-white py-2 px-2.5 sm:py-2.5 sm:px-3 rounded-xl shadow-lg border border-[#D4A64C]/35 max-w-[200px] sm:max-w-[240px] flex items-start gap-1.5 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex-1 min-w-0">
            <span className="font-bold text-[#D4A64C] text-[11px] sm:text-xs block leading-tight">
              Presença Veterana
            </span>
            <span className="text-slate-200 text-[10px] sm:text-[11px] leading-tight block mt-0.5">
              Orçamento rápido no WhatsApp
            </span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 rounded cursor-pointer shrink-0 -mr-0.5 -mt-0.5"
            aria-label="Fechar aviso"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppLink("Olá! Gostaria de esclarecer uma dúvida sobre os vossos serviços com a Presença Veterana.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Conversar no WhatsApp (${WHATSAPP_DISPLAY})`}
        className="group relative flex items-center gap-2 px-3 py-2.5 sm:px-3.5 sm:py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-105 cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 fill-current text-white shrink-0" />
        <span className="font-bold text-[11px] sm:text-xs tracking-wide pr-0.5 hidden sm:inline">
          Orçamentos
        </span>

        {/* Pulse indicator */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F6DF83] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4A64C] border border-white"></span>
        </span>
      </a>
    </div>
  );
};
