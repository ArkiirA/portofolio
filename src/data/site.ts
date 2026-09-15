export const site = {
  name: 'Rifki Rabbani',
  title: 'Rifki Rabbani — Software / Systems / AI',
  description:
    'Personal portfolio of Rifki Rabbani — software, systems, AI experiments, and things built along the way.',
  url: 'https://rifkirabbani.example',
  email: 'hello@example.com',
  location: 'Indonesia',
  age: 21,
  social: {
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
  },
  bios: {
    version: 'v2.026',
    system: 'RIFKI SYSTEMS',
    subtitle: 'PERSONAL WORKSTATION',
  },
} as const;

export const currently = {
  learning: 'Local AI / Agentic AI / RAG',
  building: 'Personal AI systems',
  exploring: 'Automation / Infrastructure',
} as const;

export const skills = [
  { label: 'LANGUAGES', items: ['PHP', 'Python', 'JavaScript', 'SQL'] },
  { label: 'SYSTEMS', items: ['Laravel', 'PostgreSQL', 'Linux', 'Git'] },
  { label: 'AI', items: ['LLM', 'RAG', 'Ollama', 'AI Agents'] },
  { label: 'TOOLS', items: ['Linux', 'Docker', 'Git', 'Astro'] },
] as const;
