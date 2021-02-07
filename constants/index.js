export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const ABSOLUTE_PATH = process.env.NEXT_PUBLIC_ABSOLUTE_PATH;

export const SITE_MENU = [
  {
    label: 'About Me',
    text: 'Get to know me',
    value: '/about'
  },
  {
    label: 'Work Samples',
    text: 'Some of my most recent projects',
    value: '/work'
  },
  {
    label: 'Skills',
    text: 'What\'s in my toolbox',
    value: '/skills'
  },
  {
    label: 'Experience',
    text: 'Where I\'ve worked',
    value: '/experience'
  },
];
