import React from "react";
import { MessageCircle, Mail, Phone, MapPin, Shield } from "lucide-react";
import {
  WHATSAPP_DISPLAY,
  EMAIL_CONTACT,
  getWhatsAppLink,
  SPECIALTIES_DATA
} from "../data/specialtiesData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#002B19] text-white border-t border-[#D4A64C]/20 pt-10 pb-8 sm:pt-16 sm:pb-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-10 pb-8 sm:pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            <a href="/" className="inline-block group" aria-label="Presença Veterana Unipessoal Lda.">
              <img
                src="/assets/aistudio/logo_presenca_veterana.png"
                alt="Presença Veterana Unipessoal Lda."
                className="h-10 sm:h-14 w-auto object-contain brightness-110 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] group-hover:scale-[1.02] transition-transform"
              />
            </a>

            <div className="pt-1 sm:pt-2 text-[11px] sm:text-xs text-slate-400 flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4A64C] shrink-0" />
              <span>Sociedade por Quotas Unipessoal · Atendimento por toda a Europa</span>
            </div>
          </div>

          {/* Specialties Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4A64C] font-display">
              As Nossas Especialidades
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {SPECIALTIES_DATA.map((sp) => (
                <li key={sp.id}>
                  <a
                    href={`#${sp.id}`}
                    className="hover:text-[#D4A64C] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A64C] shrink-0" />
                    <span>{sp.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4A64C] font-display">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#sobre" className="hover:text-[#D4A64C] transition-colors">
                  Sobre a Empresa
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-[#D4A64C] transition-colors">
                  As Nossas Especialidades
                </a>
              </li>
              <li>
                <a href="#vantagens" className="hover:text-[#D4A64C] transition-colors">
                  Vantagens & Métodos
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-[#D4A64C] transition-colors">
                  Simulador de Orçamento
                </a>
              </li>
              <li>
                <a href="#contactos" className="hover:text-[#D4A64C] transition-colors">
                  Contactos & Visitas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4A64C] font-display">
              Contactos Oficiais
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#D4A64C] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#D4A64C] shrink-0" />
                <span>{WHATSAPP_DISPLAY} (WhatsApp)</span>
              </a>
              <a
                href={`mailto:${EMAIL_CONTACT}`}
                className="flex items-center gap-2 hover:text-[#D4A64C] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D4A64C] shrink-0" />
                <span>{EMAIL_CONTACT}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-[#D4A64C] shrink-0" />
                <span>Guimarães, Braga (PT) · Atendimento por toda a Europa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} <strong className="text-white">Presença Veterana Unipessoal Lda.</strong> Todos os direitos reservados.
          </p>

          <p className="text-[11px] text-slate-400 max-w-xl">
            As fotografias do catálogo técnico representam fielmente os padrões de execução, materiais e métodos aplicados nas obras da empresa.
          </p>
        </div>
      </div>
    </footer>
  );
};
