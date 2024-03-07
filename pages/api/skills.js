const SKILLS = [
  {
    areas: [
      {
        items: [
          'nextjs',
          'react',
          'chakra ui',
          'tailwindcss',
          'styled components',
          'redux',
          'angular',
          'typescript',
          'es2015',
          'javascript',
          'scss',
          'bootstrap',
          'material-ui',
          'html5',
          'jest',
          'enzyme',
          'magento',
        ],
        name: 'Frontend',
      },
      {
        items: ['nodejs', 'express', 'stripejs', 'passport', '.NET'],
        name: 'Middle Tier',
      },
      {
        items: ['laravel', 'php', 'postgresql', 'mongodb'],
        name: 'Backend',
      },
    ],
    name: 'Coding',
  },
  {
    items: ['photoshop', 'zeplin'],
    name: 'Design',
  },
  {
    items: ['jira', 'zenhub', 'trello'],
    name: 'Project Management',
  },
  {
    items: ['git', 'github', 'gitlab'],
    name: 'Version Control',
  },
];

export default function handler(req, res) {
  res.status(200).json({ data: SKILLS });
}
