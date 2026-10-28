import React, { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, MessageCircle, ZoomIn } from "lucide-react";
import { ServicePhoto, getWhatsAppLink } from "../data/specialtiesData";

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: ServicePhoto[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  serviceTitle: string;
  whatsappMessage: string;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  photos,
  currentIndex,
  onNavigate,
  serviceTitle,
  whatsappMessage
}) => {
  const currentPhoto = photos[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + photos.length) % photos.length);
      } else if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % photos.length);
      }
    },
    [isOpen, onClose, onNavigate, currentIndex, photos.length]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Galeria de fotografias - ${serviceTitle}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
    >
      {/* Container to prevent backdrop click closing when clicking inside card */}
      <div
        className="relative w-full max-w-5xl bg-[#002B19] border border-[#D4A64C]/30 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-3 py-2 sm:px-5 sm:py-3.5 border-b border-white/10 bg-[#00351F]/90">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#D4A64C] bg-[#D4A64C]/10 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded">
              {serviceTitle}
            </span>
            <span className="text-[11px] sm:text-xs text-slate-300 font-mono">
              Foto {currentIndex + 1} de {photos.length}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href={getWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-[#00351F] bg-[#D4A64C] hover:bg-[#F6DF83] rounded-lg transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Pedir Orçamento
            </a>
            <button
              onClick={onClose}
              aria-label="Fechar galeria de fotografias"
              className="p-1.5 sm:p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Central Image Viewport */}
        <div className="relative flex-1 min-h-[220px] sm:min-h-[460px] max-h-[60vh] sm:max-h-[70vh] bg-black/50 flex items-center justify-center p-1.5 sm:p-6 select-none">
          <img
            src={currentPhoto.url}
            alt={currentPhoto.alt}
            referrerPolicy="no-referrer"
            className="max-h-[55vh] sm:max-h-[64vh] max-w-full object-contain rounded-lg shadow-lg"
            onError={(e) => {
              // Graceful fallback to prevent broken image
              const target = e.currentTarget;
              target.onerror = null;
              target.src = "/assets/aistudio/Sitio_digital_minimalista_visual_6fc519c0.jpg";
            }}
          />

          {/* Previous Button */}
          {photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((currentIndex - 1 + photos.length) % photos.length);
              }}
              aria-label="Foto anterior"
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-[#D4A64C] text-white hover:text-[#00351F] transition-all backdrop-blur shadow-md cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          )}

          {/* Next Button */}
          {photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((currentIndex + 1) % photos.length);
              }}
              aria-label="Foto seguinte"
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-[#D4A64C] text-white hover:text-[#00351F] transition-all backdrop-blur shadow-md cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          )}
        </div>

        {/* Bottom Metadata & Thumbnails */}
        <div className="p-3 sm:p-5 bg-[#002B19] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div className="space-y-0.5 sm:space-y-1">
            <h4 className="text-sm sm:text-lg font-bold text-white font-display">
              {currentPhoto.title}
            </h4>
            <p className="text-[11px] sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              {currentPhoto.description}
            </p>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex items-center gap-1.5 sm:gap-2 self-stretch sm:self-auto overflow-x-auto pb-0.5 sm:pb-0">
            {photos.map((photo, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate(idx)}
                aria-label={`Ver foto ${idx + 1}: ${photo.title}`}
                className={`relative w-12 h-9 sm:w-16 sm:h-12 rounded-md sm:rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                  idx === currentIndex
                    ? "border-[#D4A64C] scale-105 shadow-sm"
                    : "border-white/20 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={photo.url}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
