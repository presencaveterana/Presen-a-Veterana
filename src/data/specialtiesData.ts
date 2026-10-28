export interface ServicePhoto {
  url: string;
  title: string;
  description: string;
  alt: string;
}

export interface Specialty {
  id: string;
  number?: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  whatsappMessage: string;
  images: ServicePhoto[];
}

export const WHATSAPP_PHONE = "351935742686"; // Número oficial Presença Veterana
export const WHATSAPP_DISPLAY = "+351 935 742 686";
export const EMAIL_CONTACT = "presencaveterana@gmail.com";

export const getWhatsAppLink = (customMessage?: string) => {
  const defaultText = "Olá, gostaria de solicitar um orçamento à Presença Veterana Unipessoal Lda.";
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
};

export const SPECIALTIES_DATA: Specialty[] = [
  {
    id: "afagamentos",
    title: "AFAGAMENTOS",
    subtitle: "Pavimentos, assoalhos e outros",
    description:
      "Uma excelente opção de tratamento de pavimentos de madeira, valoriza esteticamente o espaço de uma casa ou empresa, conferindo aos pavimentos um aspeto nobre e brilhante. Afagar é a melhor forma de garantir durabilidade e correto tratamento da madeira.",
    details: [
      "Maquinaria moderna com aspiração integrada que reduz drasticamente a poeira",
      "Nivelamento milimétrico e remoção de riscos profundos, manchas e desgaste",
      "Recuperação integral de tacos, parquet tradicional, soalhos maciços e tábua corrida",
      "Preparação ideal da madeira para receber verniz poliuretano ou óleo protetor"
    ],
    whatsappMessage: "Olá! Gostaria de pedir um orçamento para o serviço de Afagamentos de Pavimentos e Assoalhos com a Presença Veterana.",
    images: [
      {
        url: "/assets/aistudio/istockphoto-1180236492-612x612_7a45d9dd.jpg",
        title: "Afagamento e Nivelamento de Precisão",
        description: "Maquinaria rotativa profissional com sistema de aspiração que previne a dispersão de pó no ambiente.",
        alt: "Máquina profissional de afagamento e nivelamento de chão de madeira"
      },
      {
        url: "/assets/aistudio/sanding_2f1cac35.webp",
        title: "Tratamento Técnico e Polimento",
        description: "Técnico especialista com domínio absoluto da granulometria e recuperação dos veios naturais da madeira.",
        alt: "Profissional especializado a operar afagadora em soalho com acabamento nobre"
      },
      {
        url: "/assets/aistudio/4ccc35f145426fe95baf6399f84d19cd_ff873198.jpg",
        title: "Restauração de Tábuas e Deck",
        description: "Recuperação profunda com remoção do desgaste e revelação do tom original e vivo da madeira.",
        alt: "Restauração e lixamento detalhado de tábuas de pavimento em madeira"
      },
      {
        url: "/assets/aistudio/Captura_de_tela_2025-03-12_162733_e88f1d00.png",
        title: "Soalho Nobre Recuperado e Finalizado",
        description: "Salão com tábua corrida de madeira perfeitamente afagada, nivelada e protegida com acabamento natural duradouro.",
        alt: "Amplo salão com soalho de madeira nobre restaurado com acabamento impecável e traves de madeira à vista"
      }
    ]
  },
  {
    id: "pinturas",
    title: "PINTURAS",
    subtitle: "Interiores e exteriores",
    description:
      "São muito mais do que adornos estéticos. Permitem dar um aspeto completamente renovado e fresco à casa, mas também servem para reparar problemas de humidade, bolores ou fungos, isolar termicamente e fazer um adequado controlo de luz.",
    details: [
      "Tratamento preventivo e corretivo contra fungos, salitre, fissuras e condensação",
      "Utilização de primários e tintas de alta lavabilidade e elevada resistência aos raios UV",
      "Isolamento rigoroso de rodapés, caixilharias, portas e mobiliário antes da aplicação",
      "Consultoria de cores, acabamentos acetinados, mates e revestimentos térmicos"
    ],
    whatsappMessage: "Olá! Gostaria de pedir um orçamento para o serviço de Pinturas (Interiores/Exteriores) com a Presença Veterana.",
    images: [
      {
        url: "/assets/aistudio/istockphoto-493376129-612x612_787edb95.jpg",
        title: "Pintura de Interiores & Acabamento Nobre",
        description: "Acabamentos impecáveis de pintura em paredes e tetos, combinando cores contemporâneas com iluminação embutida.",
        alt: "Espaço amplo renovado com pintura em parede de destaque verde e teto com focos de luz"
      },
      {
        url: "/assets/aistudio/How_to_Build_a_Dynamic_Accent_Wall_578c58c1.jpg",
        title: "Aplicação de Tinta com Rolo Profissional",
        description: "Técnica refinada de pintura em rolo garantindo cobertura uniforme, linhas retas perfeitas e sem marcas.",
        alt: "Aplicação precisa de tinta com rolo criando parede com recorte e cor aveludada"
      },
      {
        url: "/assets/aistudio/Pintar_a_casa_a8ac87d4.jpg",
        title: "Preparação e Proteção Rigorosa do Espaço",
        description: "Proteção integral de pavimentos e rodapés com telas e fitas técnicas antes de qualquer demão.",
        alt: "Ambiente preparado para pintura com escadote, tintas, tabuleiro e proteção completa do piso"
      },
      {
        url: "/assets/aistudio/istockphoto-1128708846-612x612_f91837b3.jpg",
        title: "Renovação Integral e Pintura Decorativa",
        description: "Execução técnica cuidada com contraste de tons, realce arquitetónico e acabamento aveludado duradouro.",
        alt: "Remodelação com pintura interior de parede de destaque azul, tetos com sanca e chão em madeira"
      }
    ]
  },
  {
    id: "envernizamentos",
    title: "ENVERNIZAMENTOS",
    subtitle: "Assoalhos, flutuantes e outros",
    description:
      "O envernizamento funciona como um acabamento embelezador para pavimentos de madeira. Após envernizado, o chão fica protegido contra agressões, manchas e escurecimento, contribuindo para a valorização do seu imóvel.",
    details: [
      "Aplicação de vernizes poliuretano mono e bicomponentes de elevada dureza",
      "Escolha personalizada de acabamento: Brilho Clássico, Meio-Brilho / Acetinado ou Mate Nobre",
      "Proteção eficaz contra riscos de sapatos, garras de animais domésticos e líquidos",
      "Fórmula não amarelante que preserva a tonalidade autêntica da madeira ao longo dos anos"
    ],
    whatsappMessage: "Olá! Gostaria de pedir um orçamento para o serviço de Envernizamento de Pavimentos e Assoalhos com a Presença Veterana.",
    images: [
      {
        url: "/servicos/envernizamentos/01-aplicacao-verniz-rolo.jpg",
        title: "Aplicação de Verniz com Rolo Especial",
        description: "Aplicação uniforme de demãos de verniz para uma selagem perfeita e sem marcas.",
        alt: "Profissional a envernizar pavimento de madeira com rolo e tabuleiro"
      },
      {
        url: "/servicos/envernizamentos/02-tratamento-selagem-madeira.jpg",
        title: "Tratamento & Selagem com Aplicador",
        description: "Distribuição cuidada de óleo protetor e verniz de alta durabilidade em soalho de madeira nobre.",
        alt: "Técnico especializado a aplicar tratamento protetor em réguas de madeira"
      },
      {
        url: "/servicos/envernizamentos/03-acabamento-brilhante-sala.jpg",
        title: "Acabamento Nobre com Reflexo Luminoso",
        description: "Pavimento em madeira com vitrificação de alto brilho e reflexão natural da luz.",
        alt: "Salão com soalho de madeira perfeitamente envernizado com brilho e reflexos solares"
      },
      {
        url: "/servicos/envernizamentos/04-pavimento-envernizado-nobre.jpg",
        title: "Pavimento Restaurado de Elevada Dureza",
        description: "Realce espetacular dos veios e tonalidades nobres da madeira com proteção duradoura.",
        alt: "Pavimento em madeira nobre envernizado com textura e tonalidade viva impecável"
      }
    ]
  },
  {
    id: "deck",
    title: "INSTALAÇÃO / APLICAÇÃO DE DECK",
    subtitle: "Piscinas, jardins, terraços ou esplanadas",
    description:
      "Pavimentos que se ajustam a qualquer circunstância. Em áreas residenciais ou comerciais, conseguimos associar valor estético à durabilidade do pavimento.",
    details: [
      "Instalação de decks em madeiras exóticas (Ipê, Cumaru, Teca) ou compósito de alta densidade",
      "Estrutura de suporte robusta com vigamento tratado, pés reguláveis e fixação oculta em inox",
      "Resistência superior à humidade permanente, cloração de piscinas e exposição solar extrema",
      "Soluções de drenagem integrada e acabamento seguro antiderrapante"
    ],
    whatsappMessage: "Olá! Gostaria de pedir um orçamento para Instalação e Aplicação de Deck com a Presença Veterana.",
    images: [
      {
        url: "/servicos/deck/01-deck-piscina.jpg",
        title: "Deck de Madeira em Piscina",
        description: "Madeira nobre tratada para contacto com água, acabamento antiderrapante e conforto térmico ao pisar.",
        alt: "Deck em madeira nobre debruçado sobre piscina com água azul cristalina"
      },
      {
        url: "/servicos/deck/02-instalacao-estrutura-piscina.jpg",
        title: "Instalação da Estrutura de Suporte",
        description: "Vigamento técnico com calços reguláveis e nivelamento rigoroso à beira da piscina.",
        alt: "Processo de montagem de deck exterior com estrutura de vigas e réguas em madeira"
      },
      {
        url: "/servicos/deck/03-deck-jardim-terraco.jpg",
        title: "Deck em Terraço & Jardim Contemporâneo",
        description: "Integração arquitetónica perfeita de réguas nobres com zonas ajardinadas e pátios.",
        alt: "Terraço exterior moderno revestido a deck de madeira com canteiro de lavanda e lounge"
      },
      {
        url: "/servicos/deck/04-corte-instalacao-profissional.jpg",
        title: "Corte e Ajuste Técnico Profissional",
        description: "Execução especializada com esquadria, medição de precisão e cortes limpos no local.",
        alt: "Profissional especializado a cortar régua de deck com serra circular e esquadro"
      }
    ]
  },
  {
    id: "pladur",
    title: "PLADUR",
    subtitle: "Tetos falsos, divisórias e revestimentos",
    description:
      "Proporciona soluções modernas para tetos falsos, divisórias e revestimentos, garantindo excelente acabamento, isolamento térmico e acústico e maior valorização do espaço.",
    details: [
      "Conceção de tetos falsos com sancas de iluminação indireta LED e rasgos arquitetónicos",
      "Divisórias acústicas com lã de rocha para conforto sonoro e privacidade absoluta",
      "Placas hidrófugas (verdes) para cozinhas e casas de banho e corta-fogo (rosas) para segurança",
      "Barramento total de juntas com bandas microperfuradas, pronto para pintura impecável"
    ],
    whatsappMessage: "Olá! Gostaria de pedir um orçamento para o serviço de Pladur (Tetos, Divisórias e Revestimentos) com a Presença Veterana.",
    images: [
      {
        url: "/servicos/pladur/01-instalacao-tetos-falsos.jpg",
        title: "Instalação de Tetos Falsos",
        description: "Tetos contínuos lisos com integração perfeita de iluminação embutida e sancas.",
        alt: "Teto falso em pladur com fita LED embutida em sala de estar moderna"
      },
      {
        url: "/assets/aistudio/about-CKGIpOG4_d66420e2.jpg",
        title: "Nivelamento e Alinhamento de Precisão",
        description: "Controlo rigoroso com nível para garantir esquadria, verticalidade e prumo milimétrico.",
        alt: "Técnico a verificar prumo e alinhamento milimétrico de parede com nível"
      },
      {
        url: "/assets/aistudio/placas-yeso-en-aragon_d6c40844.jpg",
        title: "Montagem e Barramento de Juntas em Pladur",
        description: "Aplicação técnica de placas de gesso cartonado com tratamento e barramento de juntas contínuo.",
        alt: "Estrutura e divisórias em pladur com barramento de juntas e preparação para pintura"
      },
      {
        url: "/servicos/pladur/04-teto-falso-nichos-led.jpg",
        title: "Teto Falso com Sancas LED e Nichos Embutidos",
        description: "Tetos falsos em múltiplos níveis com iluminação indireta oculta e parede com nichos iluminados para TV.",
        alt: "Teto falso multinível em pladur com sancas de luz LED e móvel de TV com nichos decorativos embutidos"
      }
    ]
  }
];
