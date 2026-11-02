export const links = {
  email: "leiaoliver388@gmail.com",
  linkedin: "https://www.linkedin.com/in/l%C3%A9ia-oliveira/",
  github: "https://github.com/leiaoliver",
  whatsapp: "https://wa.me/5511996588992",
};

export const experiences = [
  {
    company: "Vizo",
    role: "Desenvolvedora Full Stack",
    period: "abr 2025 — atual",
    place: "Remoto · clientes internacionais",
    summary:
      "Desenvolvimento de soluções web e mobile para clientes de diferentes países, do front ao back.",
    bullets: [
      "Aplicações com React, Next.js, React Native e Node.js",
      "Uso de IA em análise de relatórios e automação de processos",
      "Contato direto com clientes e times internacionais",
    ],
    tags: ["Next.js", "React", "React Native", "Node.js", "GraphQL", "IA"],
  },
  {
    company: "Evostack",
    role: "Desenvolvedora Full Stack Pleno",
    period: "out 2023 — abr 2025",
    place: "São Paulo · remoto",
    summary:
      "Desenvolvimento de uma plataforma financeira white-label e multi-tenant para empresas do setor financeiro.",
    bullets: [
      "Aplicações web e mobile com React e React Native",
      "Integração com APIs de parceiros bancários",
      "Produto com foco em segurança e escalabilidade",
    ],
    tags: ["React", "React Native", "Node.js", "TypeScript"],
  },
  {
    company: "Banco BV",
    role: "Analista de Sistemas",
    period: "fev 2023 — jul 2024",
    place: "Banking as a Service",
    summary:
      "Atuação na área de BaaS, com foco no monitoramento de APIs e filas de mensageria.",
    bullets: [
      "Acompanhamento de APIs em produção",
      "Monitoramento de filas com RabbitMQ",
    ],
    tags: ["APIs REST", "RabbitMQ", "Monitoramento"],
  },
  {
    company: "Loomer Tech",
    role: "Desenvolvedora Front-end Júnior",
    period: "jan 2022 — set 2022",
    place: "Primeira experiência",
    summary:
      "Onde tudo começou: primeiras aplicações web e mobile em produção, em times multidisciplinares.",
    bullets: ["Aplicações com React e React Native"],
    tags: ["React", "React Native", "JavaScript"],
  },
];

export const works = [
  {
    title: "Kysee",
    kind: "IA aplicada",
    description:
      "Plataforma que usa IA para analisar relatórios e automatizar processos, transformando tarefas manuais em fluxos rápidos e confiáveis.",
    tags: ["IA", "LLMs", "Engenharia de prompt", "Automação"],
    glyph: "ai",
  },
  {
    title: "Plataforma de talentos e agendamentos",
    kind: "Web · Next.js",
    description:
      "Gestão de talentos e agendamentos para várias marcas, com componentes reutilizáveis e dados via GraphQL.",
    tags: ["Next.js", "React", "Apollo / GraphQL", "Ant Design", "CSS Modules"],
    glyph: "calendar",
  },
  {
    title: "Plataforma financeira white-label",
    kind: "Fintech · web e mobile",
    description:
      "Produto multi-tenant em que cada empresa ganha sua própria marca, com fluxos de abertura de conta integrados a parceiros bancários.",
    tags: ["React", "React Native", "Multi-tenant", "APIs bancárias"],
    glyph: "bank",
  },
] as const;

export const stack = [
  {
    group: "Front-end",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Vue.js", "Angular", "Ant Design", "Tailwind CSS", "CSS Modules"],
  },
  { group: "Mobile", items: ["React Native", "Expo"] },
  {
    group: "Back-end e dados",
    items: ["Node.js", "GraphQL", "Apollo", "Hasura", "Supabase", "PostgreSQL", "RabbitMQ"],
  },
  { group: "IA", items: ["Engenharia de prompt", "LLMs", "Automação de processos"] },
  { group: "Ferramentas", items: ["Git", "GitHub", "Postman", "Vercel"] },
];

export const education = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    place: "FIAP",
    detail: "Tecnólogo · 2023 — 2025",
  },
  {
    title: "Técnico integrado em Informática",
    place: "ETEC",
    detail: "2018 — 2020 · onde comecei a programar",
  },
  {
    title: "Engenharia de Prompt e NLW IA",
    place: "Rocketseat",
    detail: "Certificações em IA generativa",
  },
];
