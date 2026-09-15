export type Principle = {
  index: string;
  title: string;
  body: string[];
};

export const philosophy: Principle[] = [
  {
    index: '01',
    title: 'UNDERSTAND FIRST',
    body: [
      'I like knowing why something works',
      'before deciding how to build it.',
    ],
  },
  {
    index: '02',
    title: 'BUILD TO LEARN',
    body: [
      'The fastest way I understand an idea',
      'is usually to make something from it.',
    ],
  },
  {
    index: '03',
    title: 'KEEP EXPERIMENTING',
    body: [
      'Not every project needs to become',
      'a product.',
      '',
      'Some things are built simply',
      'to see what happens.',
    ],
  },
  {
    index: '04',
    title: 'MAKE IT USEFUL',
    body: [
      'Complexity is only valuable',
      'when it solves something.',
    ],
  },
];
