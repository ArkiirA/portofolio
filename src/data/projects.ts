export type ProjectStatus = 'ACTIVE' | 'EXPERIMENT' | 'IN PROGRESS' | 'ARCHIVED';

export type Project = {
  index: string;
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  status?: ProjectStatus;
  stack: string[];
  description: string[];
  link?: string;
  /* retro transformation */
  retro: {
    title: string;
    tagline: string;
    status: string;
  };
};

export const projects: Project[] = [
  {
    index: '01',
    slug: 'sentra-hki',
    title: 'SENTRA HKI',
    subtitle: 'University Data Intelligence System',
    year: '2026',
    status: 'IN PROGRESS',
    stack: ['Laravel', 'PostgreSQL', 'RBAC', 'Spatie Permission', 'Data Systems'],
    description: [
      'A role-based data management system for university intellectual property records.',
      'Built to replace fragmented spreadsheets with a single, auditable source of truth.',
      'Designed around access control, traceability, and clean data entry.',
    ],
    retro: {
      title: "RIFKI'S AMAZING COMPUTER PROJECT!!!",
      tagline: 'SENTRA HKI v1.0',
      status: 'WORKING!!!',
    },
  },
  {
    index: '02',
    slug: 'aitaa',
    title: 'AITAA',
    subtitle: 'Digital platform / website',
    year: '2025',
    status: 'ACTIVE',
    stack: ['Web', 'Digital Platform'],
    description: [
      'A digital platform and web presence built around clarity and fast access to information.',
      'Focused on clean information architecture and a low-friction user journey.',
    ],
    retro: {
      title: 'AITAA WEB PAGE',
      tagline: 'AITAA v0.9',
      status: 'ONLINE!!!',
    },
  },
  {
    index: '03',
    slug: 'local-ai',
    title: 'LOCAL AI',
    subtitle: 'Local AI / Agentic AI experiments',
    year: '2026',
    status: 'EXPERIMENT',
    stack: ['Ollama', 'LLMs', 'RAG', 'Vector DB', 'Python'],
    description: [
      'A growing set of experiments running language models locally — no cloud, no API keys.',
      'Exploring retrieval-augmented generation, small agentic loops, and how far a laptop can go.',
    ],
    retro: {
      title: 'MY COOL AI PROGRAM',
      tagline: 'LOCAL AI BETA',
      status: 'UNDER CONSTRUCTION',
    },
  },
  {
    index: '04',
    slug: 'other-experiments',
    title: 'OTHER EXPERIMENTS',
    subtitle: 'Smaller things built along the way',
    year: '—',
    status: 'ARCHIVED',
    stack: ['Various'],
    description: [
      'Scripts, tools, half-finished ideas, and digital objects that exist mostly to answer a question.',
      'Not everything here is finished. That is the point.',
    ],
    retro: {
      title: 'RANDOM STUFF I MADE',
      tagline: 'EXPERIMENTS',
      status: 'SOME WORKING',
    },
  },
];

export const experiments = [
  'LOCAL AI',
  'RAG',
  'AGENTIC SYSTEMS',
  'AUTOMATION',
  'WEB EXPERIMENTS',
  'HARDWARE',
  'DIGITAL OBJECTS',
] as const;
