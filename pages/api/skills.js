const SKILLS = [
  {
    name: 'Coding',
    areas: [
      {
        name: 'Frontend',
        items: ['react', 'redux', 'angular',
          'typescript', 'es2015', 'javascript',
          'scss', 'bootstrap', 'material-ui',
          'html5', 'jest', 'enzyme', 'magento'
        ]
      },
      {
        name: 'Middle Tier',
        items: ['nodejs', 'express', 'stripejs', 'passport', '.NET']
      },
      {
        name: 'Backend',
        items: ['mongodb']
      }
    ]
  },
  {
    name: 'Design',
    items: ['photoshop', 'zeplin']
  },
  {
    name: 'Project Management',
    items: ['jira', 'zenhub', 'trello']
  },
  {
    name: 'Version Control',
    items: ['git', 'github', 'gitlab']
  }
];

export default function handler(req, res) {
  res.status(200).json(SKILLS);
}
