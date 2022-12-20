type framework = string;
type set = {
  q: string;
  a: number[];
  note?: string | null;
};

export const frameworks: framework[] = ['Vue', 'Angular', 'React'];
export const data: set[] = [
  {
    q: 'Performance',
    a: [5, 5, 5],
    note: 'Not really any difference, it depends...',
  },
  {
    q: 'Testability',
    a: [5, 5, 5],
    note: 'All support testing frameworks like Jest, all support Storybook',
  },
  {
    q: 'Popularity',
    a: [4, 3, 5],
    note: 'Recruitment pool, but framework does not really matter. Angular/React devs can be real a-holes though...',
  },
  {
    q: 'Lifecycle',
    a: [3, 5, 5],
    note: 'Vue has lot of traction, but it is still a community-driven project',
  },
  {
    q: 'Enterprise-ready',
    a: [3, 5, 3],
    note: 'What does that even mean though...',
  },
  { q: 'Fun factor', a: [4, 3, 5], note: null },
  {
    q: 'How opinionated is it',
    a: [2, 5, 2],
    note: 'Not just in terms of structure but how to do things e.g. templating, animations. Angular can really be niche..',
  },
  {
    q: 'Compatibility (Plugins, NX Workspace)',
    a: [4, 5, 5],
    note: 'React/Angular are fully supported',
  },
];
