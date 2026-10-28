import React from "react";

export const AdvantagesSection: React.FC = () => {
  return (
    <section id="vantagens" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: "Nosso Compromisso" + Horizontal Line */}
        <div className="flex items-center gap-4 sm:gap-6 mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#00351F] font-display tracking-tight shrink-0">
            Nosso Compromisso
          </h2>
          <div className="flex-1 h-[2px] bg-[#00351F]" />
        </div>

        {/* 4 Pillars Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 sm:gap-y-12 gap-x-8 sm:gap-x-14">
          {/* 1. Acabamento de excelência */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
              <svg
                viewBox="0 0 64 64"
                className="w-full h-full drop-shadow-[0_2px_4px_rgba(212,166,76,0.25)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="goldCompromisso1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F9DF7B" />
                    <stop offset="45%" stopColor="#D4A64C" />
                    <stop offset="100%" stopColor="#B38022" />
                  </linearGradient>
                </defs>
                {/* 5 Stars along an arc */}
                {/* Star 1 (far left) */}
                <polygon
                  points="10,25 11.8,28.7 15.8,29.3 12.9,32.1 13.6,36.1 10,34.2 6.4,36.1 7.1,32.1 4.2,29.3 8.2,28.7"
                  fill="url(#goldCompromisso1)"
                />
                {/* Star 2 (mid left) */}
                <polygon
                  points="20,18 21.8,21.7 25.8,22.3 22.9,25.1 23.6,29.1 20,27.2 16.4,29.1 17.1,25.1 14.2,22.3 18.2,21.7"
                  fill="url(#goldCompromisso1)"
                />
                {/* Star 3 (center top) */}
                <polygon
                  points="32,13 34,17.1 38.5,17.7 35.2,20.9 36,25.4 32,23.3 28,25.4 28.8,20.9 25.5,17.7 30,17.1"
                  fill="url(#goldCompromisso1)"
                />
                {/* Star 4 (mid right) */}
                <polygon
                  points="44,18 45.8,21.7 49.8,22.3 46.9,25.1 47.6,29.1 44,27.2 40.4,29.1 41.1,25.1 38.2,22.3 42.2,21.7"
                  fill="url(#goldCompromisso1)"
                />
                {/* Star 5 (far right) */}
                <polygon
                  points="54,25 55.8,28.7 59.8,29.3 56.9,32.1 57.6,36.1 54,34.2 50.4,36.1 51.1,32.1 48.2,29.3 52.2,28.7"
                  fill="url(#goldCompromisso1)"
                />
                {/* Person Head */}
                <circle cx="32" cy="37" r="7" fill="url(#goldCompromisso1)" />
                {/* Person Torso / Shoulders */}
                <path
                  d="M19 55C19 48.9 24.8 46 32 46C39.2 46 45 48.9 45 55C45 56.1 44.1 57 43 57H21C19.9 57 19 56.1 19 55Z"
                  fill="url(#goldCompromisso1)"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#00351F] font-display tracking-tight leading-snug">
                Acabamento de excelência
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-[#00351F]/80 font-normal leading-relaxed mt-0.5">
                resultados duradouros e sofisticados.
              </p>
            </div>
          </div>

          {/* 2. Qualidade garantida */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
              <svg
                viewBox="0 0 64 64"
                className="w-full h-full drop-shadow-[0_2px_4px_rgba(212,166,76,0.25)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="goldCompromisso2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F9DF7B" />
                    <stop offset="45%" stopColor="#D4A64C" />
                    <stop offset="100%" stopColor="#B38022" />
                  </linearGradient>
                </defs>
                {/* Ribbon tails at bottom */}
                <path
                  d="M23 42L23 57L28 52L33 57L33 44"
                  stroke="url(#goldCompromisso2)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M31 44L31 57L36 52L41 57L41 42"
                  stroke="url(#goldCompromisso2)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* Scalloped rosette / flower medal */}
                <path
                  d="M32 10
                     C34.5 7.5 38.5 7.5 41 10
                     C43.5 10.5 46.5 12 48 14.5
                     C49.5 17 49.5 20.5 50.5 23.5
                     C51.5 26.5 54 29 54 32
                     C54 35 51.5 37.5 50.5 40.5
                     C49.5 43.5 49.5 47 48 49.5
                     C46.5 52 43.5 53.5 41 54
                     C38.5 54.5 34.5 54.5 32 54
                     C29.5 54.5 25.5 54.5 23 54
                     C20.5 53.5 17.5 52 16 49.5
                     C14.5 47 14.5 43.5 13.5 40.5
                     C12.5 37.5 10 35 10 32
                     C10 29 12.5 26.5 13.5 23.5
                     C14.5 20.5 14.5 17 16 14.5
                     C17.5 12 20.5 10.5 23 10
                     C25.5 7.5 29.5 7.5 32 10 Z"
                  stroke="url(#goldCompromisso2)"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* Star in the center */}
                <polygon
                  points="32,21 34.8,26.7 41.1,27.6 36.5,32.1 37.6,38.4 32,35.4 26.4,38.4 27.5,32.1 22.9,27.6 29.2,26.7"
                  stroke="url(#goldCompromisso2)"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#00351F] font-display tracking-tight leading-snug">
                Qualidade garantida
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-[#00351F]/80 font-normal leading-relaxed mt-0.5">
                materiais premium e técnicas avançadas.
              </p>
            </div>
          </div>

          {/* 3. Atendimento personalizado */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
              <svg
                viewBox="0 0 64 64"
                className="w-full h-full drop-shadow-[0_2px_4px_rgba(212,166,76,0.25)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="goldCompromisso3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F9DF7B" />
                    <stop offset="45%" stopColor="#D4A64C" />
                    <stop offset="100%" stopColor="#B38022" />
                  </linearGradient>
                </defs>
                {/* Back bubble */}
                <path
                  d="M24 16C15.2 16 8 22.3 8 30C8 33.6 9.6 36.9 12.3 39.4L10 47L17.5 43.6C19.5 44.5 21.7 45 24 45C24.4 45 24.8 45 25.2 45C24.4 43 24 40.8 24 38.5C24 29.9 31.8 23 41.5 23C42.7 23 43.8 23.1 45 23.4C43.2 19.1 34.3 16 24 16Z"
                  fill="url(#goldCompromisso3)"
                />
                {/* Front bubble */}
                <path
                  d="M40 25C30.6 25 23 31.5 23 39.5C23 43.2 24.6 46.5 27.2 49L25 56L32.1 52.8C34.5 53.6 37.2 54 40 54C49.4 54 57 47.5 57 39.5C57 31.5 49.4 25 40 25Z"
                  fill="url(#goldCompromisso3)"
                />
                {/* 3 Dots inside front bubble */}
                <circle cx="33" cy="39.5" r="2.2" fill="#FFFFFF" />
                <circle cx="40" cy="39.5" r="2.2" fill="#FFFFFF" />
                <circle cx="47" cy="39.5" r="2.2" fill="#FFFFFF" />
              </svg>
            </div>
            <div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#00351F] font-display tracking-tight leading-snug">
                Atendimento personalizado
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-[#00351F]/80 font-normal leading-relaxed mt-0.5">
                equipa dedicada e qualificada.
              </p>
            </div>
          </div>

          {/* 4. Experiência sólida */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
              <svg
                viewBox="0 0 64 64"
                className="w-full h-full drop-shadow-[0_2px_4px_rgba(212,166,76,0.25)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="goldCompromisso4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F9DF7B" />
                    <stop offset="45%" stopColor="#D4A64C" />
                    <stop offset="100%" stopColor="#B38022" />
                  </linearGradient>
                </defs>
                {/* Handle on top */}
                <path
                  d="M26 21V17C26 15.3 27.3 14 29 14H35C36.7 14 38 15.3 38 17V21"
                  stroke="url(#goldCompromisso4)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Main Case Body */}
                <rect
                  x="12"
                  y="21"
                  width="40"
                  height="28"
                  rx="4"
                  fill="url(#goldCompromisso4)"
                />
                {/* Horizontal divider crease */}
                <line
                  x1="12"
                  y1="34"
                  x2="52"
                  y2="34"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  opacity="0.8"
                />
                {/* Left clasp */}
                <rect
                  x="21"
                  y="31"
                  width="5"
                  height="6"
                  rx="1"
                  fill="#FFFFFF"
                  opacity="0.9"
                />
                {/* Right clasp */}
                <rect
                  x="38"
                  y="31"
                  width="5"
                  height="6"
                  rx="1"
                  fill="#FFFFFF"
                  opacity="0.9"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#00351F] font-display tracking-tight leading-snug">
                Experiência sólida
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-[#00351F]/80 font-normal leading-relaxed mt-0.5">
                profissionais com mais de 25 anos no setor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
