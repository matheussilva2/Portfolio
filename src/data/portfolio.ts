export type Project = {
  title: string;
  description: string;
  images: { src: string; full: string; alt: string }[];
  tags: { label: string; tone: "brand" | "accent" | "mint" | "sun" }[];
};

function projectImages(
  slug: string,
  count: number,
  altPrefix: string,
): { src: string; full: string; alt: string }[] {
  return Array.from({ length: count }, (_, i) => {
    const n = i + 1;
    return {
      src: `/projects/${slug}/${n}-sm.webp`,
      full: `/projects/${slug}/${n}-lg.webp`,
      alt: `${altPrefix} — imagem ${n}`,
    };
  });
}

export const projects: Project[] = [
  {
    title: "Fábrica de Abadás",
    description:
      "Site para vendas de abadás customizados para o carnaval, de uma confecção de roupas. Integração com WhatsApp e e-mail para status de pedido e entrega, e integração com sistema de logística interno via API.",
    images: projectImages("fabrica-de-abadas", 4, "Fábrica de Abadás"),
    tags: [
      { label: "API", tone: "brand" },
      { label: "WhatsApp", tone: "mint" },
      { label: "E-mail", tone: "accent" },
    ],
  },
  {
    title: "Landing Page DowCenter",
    description: "Landing page feita com React + ElasticUI em projeto Next.js para um marketplace de criativos.",
    images: projectImages("landing-page-dowcenter", 6, "Landing Page DowCenter"),
    tags: [
      { label: "React", tone: "accent" },
      { label: "Next.js", tone: "brand" },
      { label: "ElasticUI", tone: "mint" },
    ],
  },
  {
    title: "Massapê Imóveis",
    description:
      "Plataforma para anunciar ou comprar imóveis rurais, com integração de pagamento e período de anúncio ativo. Desenvolvida em Laravel, React e Bootstrap 4.",
    images: projectImages("massape-imoveis", 3, "Massapê Imóveis"),
    tags: [
      { label: "Laravel", tone: "brand" },
      { label: "React", tone: "accent" },
      { label: "Bootstrap", tone: "sun" },
    ],
  },
  {
    title: "Sistemas de Logística",
    description:
      "Sistema interno de logística para organizar entregas, prazos e relatórios, cobrindo conferência e separação, rota de entrega e entrega concluída. Inclui rotas para motoboy, integração com a API dos Correios, disparo de status por WhatsApp e acompanhamento de produção.",
    images: projectImages("sistemas-de-logistica", 1, "Sistemas de Logística"),
    tags: [
      { label: "Laravel", tone: "brand" },
      { label: "Vue", tone: "mint" },
      { label: "Tailwind", tone: "accent" },
      { label: "MySQL", tone: "sun" },
    ],
  },
  {
    title: "UseTreine",
    description:
      "E-commerce de roupas para treino, corrida e uso casual, com tecidos de tecnologia própria. Integração com gateway de pagamento, status de pedido via WhatsApp e e-mail, e integração com sistema interno de logística.",
    images: projectImages("usetreine", 4, "UseTreine"),
    tags: [
      { label: "Laravel", tone: "brand" },
      { label: "MySQL", tone: "sun" },
      { label: "Tailwind", tone: "accent" },
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string | null;
  description: string;
  tech: string[];
  marker: "brand" | "accent" | "sun";
};

export const experiences: Experience[] = [
  {
    company: "Vip Sports",
    role: "Programador Web Fullstack PHP Pleno",
    start: "Abr 2026",
    end: null,
    description:
      "Desenvolvo do zero, aprimoro e faço deploy de sites de vendas dos projetos da empresa, sistemas de uso interno e microsserviços para uso distribuído entre sites públicos e sistemas internos. • Faço manutenção em um sistema de logística que recebe os pedidos das lojas, controlando o que falta separar e conferir, o que está pronto para entrega (motoboy ou Correios) e o que está pronto para retirada, além de dados estatísticos de prazo, custo de motoboy e tempo de entrega. • Criei e mantenho e-commerces de roupas para treino, camisas de times de futebol e uniformes esportivos (usetreine.com.br, camisasdobrasil.com.br, vipschools.com.br). • Uso IA para agilizar o desenvolvimento, com revisão de código e planejamento para garantir qualidade e decisões corretas.",
    tech: ["Laravel", "PHP", "Microsserviços", "IA"],
    marker: "brand",
  },
  {
    company: "GeraUp Tecnologia",
    role: "Programador Web Fullstack PHP Pleno",
    start: "Set 2022",
    end: "Mai 2025",
    description:
      "Desenvolvi e implementei soluções utilizando Laravel, Google Cloud e React. • Desenvolvi páginas de front-end a partir de protótipos no Figma, aplicando e sugerindo melhorias de design/UX. • Trabalhei no site de um marketplace de imagens editáveis, com editor online e central de atendimento ao cliente para funcionários. • Gerenciei a implantação e a infraestrutura na Google Cloud Platform, assegurando performance e escalabilidade.",
    tech: ["Laravel", "React", "Google Cloud", "Figma"],
    marker: "accent",
  },
  {
    company: "Magnetis Investimentos",
    role: "Programador Front-end React Júnior",
    start: "Fev 2022",
    end: "Jul 2022",
    description:
      "Desenvolvi e atualizei páginas a partir do Figma utilizando React.js e GraphQL, promovendo uma experiência de usuário otimizada. • Colaborei com a equipe sob a metodologia ágil Scrumban, refinando tarefas e melhorando a produtividade do time.",
    tech: ["React", "GraphQL", "Figma"],
    marker: "sun",
  },
  {
    company: "Udois",
    role: "Programador Web Fullstack PHP",
    start: "Fev 2021",
    end: "Fev 2022",
    description:
      "Atuei com Laravel (PHP), JavaScript, Bootstrap e Google Cloud em um marketplace de produtos digitais com mais de 1 milhão de clientes cadastrados, adicionando e aprimorando recursos do site. • Reduzi em cerca de 40% os custos de nuvem otimizando cache, imagens no upload e queries SQL.",
    tech: ["Laravel", "JavaScript", "Bootstrap", "Google Cloud"],
    marker: "brand",
  },
  {
    company: "Freelancer",
    role: "Fullstack Developer",
    start: "Set 2019",
    end: "Jan 2021",
    description:
      "Desenvolvi sites sob demanda — matrícula escolar, anúncio de imóveis e fazendas, sistema de rifa — sempre em PHP puro, Bootstrap e MySQL.",
    tech: ["PHP", "Bootstrap", "MySQL"],
    marker: "accent",
  },
];

export const stats = [
  { value: "6+", label: "anos de carreira", tone: "sun" },
  { value: "40+", label: "projetos entregues", tone: "accent" },
  { value: "18", label: "clientes atendidos", tone: "brand" },
  { value: "99%", label: "uptime das APIs", tone: "mint" },
] as const;