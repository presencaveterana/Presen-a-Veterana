import React, { useState } from "react";
import { ZoomIn, Sparkles } from "lucide-react";
import {
  SPECIALTIES_DATA,
  Specialty,
  ServicePhoto,
  getWhatsAppLink,
  WHATSAPP_DISPLAY
} from "../data/specialtiesData";
import { ImageLightboxModal } from "./ImageLightboxModal";

export const SpecialtiesSection: React.FC = () => {
  // Modal state
  const [activeSpecialty, setActiveSpecialty] = useState<Specialty | null>(null);
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenPhoto = (specialty: Specialty, index: number) => {
    setActiveSpecialty(specialty);
    setPhotoIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="especialidades" className="py-12 sm:py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E6E9E4] to-transparent" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#D4A64C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-40 w-96 h-96 bg-[#00351F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative">
        {/* Main Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#B8862D] bg-[#F8F7F3] border border-[#E6E9E4] rounded-full mb-3 sm:mb-4">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4A64C]" />
            Mestria Técnica & Acabamentos Nobres
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#00351F] tracking-tight font-display text-balance">
            AS NOSSAS ESPECIALIDADES
          </h2>

          <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2">
            <span className="w-8 sm:w-12 h-0.5 sm:h-1 metallic-gold-gradient rounded-full" />
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#D4A64C]" />
            <span className="w-8 sm:w-12 h-0.5 sm:h-1 metallic-gold-gradient rounded-full" />
          </div>
        </div>

        {/* 5 Distinct Specialty Sections */}
        <div className="space-y-12 sm:space-y-20 lg:space-y-32">
          {SPECIALTIES_DATA.map((specialty, index) => {
            // Alternate column order on desktop: Even indices (0, 2, 4) text left, grid right; Odd indices (1, 3) grid left, text right.
            const isReversedOnDesktop = index % 2 !== 0;

            return (
              <article
                key={specialty.id}
                id={specialty.id}
                className="scroll-mt-24 group/specialty"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-14 items-center ${
                    isReversedOnDesktop ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* TEXT COLUMN */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-center ${
                      isReversedOnDesktop ? "lg:col-start-7" : ""
                    }`}
                  >
                    {/* Specialty Kicker */}
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <span className="w-2 h-2 rounded-full bg-[#D4A64C]" />
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#B8862D]">
                        Especialidade Presença Veterana
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-[#00351F] font-display tracking-tight leading-snug sm:leading-tight">
                      {specialty.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="mt-0.5 sm:mt-1 text-xs sm:text-base font-semibold text-[#D4A64C] tracking-wide">
                      {specialty.subtitle}
                    </p>

                    {/* Full Description */}
                    <p className="mt-2.5 sm:mt-4 text-xs sm:text-sm lg:text-base text-[#646B66] leading-relaxed">
                      {specialty.description}
                    </p>
                  </div>

                  {/* 4 PHOTOGRAPHS (2×2 GRID) COLUMN */}
                  <div
                    className={`lg:col-span-6 ${
                      isReversedOnDesktop ? "lg:col-start-1" : ""
                    }`}
                  >
                    <div className="p-1.5 sm:p-3 bg-[#F8F7F3] rounded-xl sm:rounded-2xl border border-[#E6E9E4] shadow-sm">
                      <div className="grid grid-cols-2 gap-1.5 sm:gap-3">
                        {specialty.images.map((photo, photoIdx) => {
                          const isHero = specialty.images.length === 3 && photoIdx === 0;
                          return (
                            <div
                              key={photoIdx}
                              onClick={() => handleOpenPhoto(specialty, photoIdx)}
                              className={`group/photo relative rounded-lg sm:rounded-xl overflow-hidden bg-slate-200 cursor-pointer shadow-xs hover:shadow-md transition-all border border-[#E6E9E4]/80 ${
                                isHero ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                              }`}
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  handleOpenPhoto(specialty, photoIdx);
                                }
                              }}
                              aria-label={`Ampliar fotografia: ${photo.title}`}
                            >
                            <img
                              src={photo.url}
                              alt={photo.alt}
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/photo:scale-108"
                              onError={(e) => {
                                // Zero-broken image policy fallback
                                const target = e.currentTarget;
                                target.onerror = null;
                                target.src = "/assets/aistudio/Sitio_digital_minimalista_visual_6fc519c0.jpg";
                              }}
                            />

                            {/* Scrim Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2 sm:p-3">
                              <div className="flex items-center justify-between text-white">
                                <span className="text-[11px] sm:text-xs font-semibold truncate drop-shadow-sm pr-2">
                                  {photo.title}
                                </span>
                                <span className="p-1 rounded-full bg-white/20 text-[#D4A64C] shrink-0">
                                  <ZoomIn className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                </span>
                              </div>
                              <span className="text-[9px] sm:text-[10px] text-slate-300 font-mono mt-0.5">
                                Clique para ampliar
                              </span>
                            </div>

                            {/* Subtle Image Tag/Index Indicator */}
                            <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 px-1 sm:px-1.5 py-0.5 rounded bg-black/50 text-[9px] sm:text-[10px] font-mono text-white/90 backdrop-blur-xs pointer-events-none">
                              {photoIdx + 1}
                            </div>
                          </div>
                        );
                      })}
                      </div>

                      {/* Small Caption for Gallery */}
                      <div className="mt-1.5 sm:mt-2.5 px-1.5 sm:px-2 flex items-center justify-between text-[10px] sm:text-[11px] text-[#646B66]">
                        <span>{specialty.images.length} fotos · Toque para ampliar</span>
                        <span className="text-[#B8862D] font-medium hidden sm:inline">
                          Galeria {specialty.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle Divider between specialties */}
                {index < SPECIALTIES_DATA.length - 1 && (
                  <div className="mt-12 sm:mt-20 lg:mt-32 border-b border-[#E6E9E4]/60" />
                )}
              </article>
            );
          })}
        </div>

        {/* Global Specialty Bottom Banner */}
        <div className="mt-12 sm:mt-20 lg:mt-28 p-5 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl bg-[#00351F] text-white relative overflow-hidden shadow-xl border border-[#D4A64C]/30">
          <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-[#D4A64C]/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 text-center lg:text-left">
            <div className="max-w-2xl space-y-1.5 sm:space-y-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#D4A64C]">
                Tem um projeto específico ou necessita de aconselhamento?
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-white">
                Combinamos várias especialidades na mesma obra
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Podemos integrar afagamento de chão, pinturas completas, tetos em pladur e aplicação de decks num único planeamento coordenado, sem intermediários.
              </p>
            </div>

            <div className="shrink-0 flex items-center w-full sm:w-auto">
              <a
                href="#contactos"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 rounded-xl transition-all border border-white/20 shadow-sm"
              >
                Ver todos os contactos →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeSpecialty && (
        <ImageLightboxModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          photos={activeSpecialty.images}
          currentIndex={photoIndex}
          onNavigate={(newIdx) => setPhotoIndex(newIdx)}
          serviceTitle={activeSpecialty.title}
          whatsappMessage={activeSpecialty.whatsappMessage}
        />
      )}
    </section>
  );
};
