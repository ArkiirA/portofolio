export type Principle = {
  index: string;
  title: string;
  body: string[];
};

export const philosophy: Principle[] = [
  {
    index: '01',
    title: 'OBSERVE',
    body: [
      'Look before building.',
      'The problem is rarely where it first appears.',
    ],
  },
  {
    index: '02',
    title: 'BREAK THE PATTERN',
    body: [
      'Existing solutions are a starting point,',
      'not always the answer.',
    ],
  },
  {
    index: '03',
    title: 'MAKE IT YOURS',
    body: [
      'Purpose in function.',
      'Intention in every detail.',
    ],
  },
  ];
