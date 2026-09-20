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
  image?: string;
  cta?: string;
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
    //status: 'IN PROGRESS',
    stack: ['Laravel', 'PostgreSQL', 'RBAC', 'Spatie Permission', 'Data Systems'],
    description: [
      'A role-based data management system for university intellectual property records.',
      'Built to replace fragmented spreadsheets with a single, auditable source of truth.',
      'Designed around access control, traceability, and clean data entry.',
    ],
    image: 'images/HKI.jpg',
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
    year: '2026',
    //status: 'ACTIVE',
    stack: ['Laravel', 'MySQL', 'Crawler', 'RBAC', 'Bootstrap'],
    description: [
      'The official web platform for the AIT Alumni Association Indonesia Chapter.',
      'It serves as a member directory and organizational hub.',
    ],
    image: 'images/AITAA.jpg',
    retro: {
      title: 'AITAA WEB PAGE',
      tagline: 'AITAA v0.9',
      status: 'ONLINE!!!',
    },
  },

{
    index: '03',
    slug: 'studysync',
    title: 'StudySync',
    subtitle: 'AI - Powered Student Helper Website',
    year: '2026',
    status: 'IN PROGRESS',
    stack: ['Laravel', 'LLM integration', 'Reverb', 'Livewire', 'Bootstrap', 'External API'],
    description: [
      'full-stack web platform for university students, combining free utilities (GPA Calculator, citation generator)',
      'with AI-powered tools (notes summarizer, flashcard generator, scholarly paper search) and real-time collaborative Study Rooms featuring a shared task list and synced Pomodoro timer.',
    ],
    image: 'images/studysync.jpg',
    retro: {
      title: 'STUDYSYNC',
      tagline: 'ALL IN ONE STUDENT HELPER',
      status: 'UNDER CONSTRUCTION',
    },
  },


  {
    index: '04',
    slug: 'local-ai',
    title: 'LOCAL AI',
    subtitle: 'Local AI / Agentic AI experiments',
    year: '2026',
    status: 'EXPERIMENT',
    stack: ['Ollama', 'LLMs', 'RAG', 'Vector DB', 'Pi'],
    description: [
      'A growing set of experiments running LLMs locally.',
      'Exploring retrieval-augmented generation, small agentic loops, and how far a laptop can go.',
    ],
    retro: {
      title: 'MY COOL AI PROGRAM',
      tagline: 'LOCAL AI BETA',
      status: 'UNDER CONSTRUCTION',
    },
  },
//  {
//    index: '06',
//    slug: 'other-experiments',
//    title: 'OTHER EXPERIMENTS',
//    subtitle: 'Smaller things built along the way',
//    year: '—',
//    status: 'ARCHIVED',
//    stack: ['Various'],
//    description: [
//      'Scripts, tools, half-finished ideas, and digital objects that exist mostly to answer a question.',
//      'Not everything here is finished. That is the point.',
//    ],
//    retro: {
//      title: 'RANDOM STUFF I MADE',
//      tagline: 'EXPERIMENTS',
//      status: 'SOME WORKING',
//    },
//  },
//];
  
{
    index: '05',
    slug: 'garuda-kirana-farm',
    title: 'Garuda Kirana Farm',
    subtitle: 'Chicken Coop Management System Dashboard',
    year: '2026',
    //status: 'EXPERIMENT',
    stack: ['Laravel', 'Expert System (Inference Engine)', 'RBAC', 'Bootstrap', 'Python'],
    description: [
      'Developed a web-based management system for monitoring and managing poultry farm operations',
      'including chicken population, production records, FCR tracker, expert  system to diagnose decreasing FCR'
    ],
    image: 'images/AYAM.jpg',
    retro: {
      title: 'CHICKEN FARM DASHBOARD',
      tagline: 'EXPERT SYSTEM!',
      status: 'PRIVATE',
    },
  },

 
{
    index: '06',
    slug: 'afhs',
    title: 'AFHS LawFirm',
    subtitle: 'Company Profile Website',
    year: '2024',
    status: 'ONLINE',
    stack: ['Wordpress', 'Elementor', 'Custom HTML/CSS'],
    description: [
      'Developed a corporate website for AFHS LawFirm using WordPress,',
      'featuring the lawfirm profile, legal services, lawyers, achievements, and contact information in a professional and responsive web interface.',
    ],
    link: 'https://afhs.co.id/',
    cta: 'Visit site',
    image: 'images/afhs.jpg',
    retro: {
      title: 'AFHS LAWFIRM',
      tagline: 'WORDPRESS LAWFIRM WEBSITE',
      status: 'ONLINE',
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
