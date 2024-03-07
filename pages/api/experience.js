const EXPERIENCE = [
  {
    company: 'CityBldr',
    date: 'May 2017 – Present',
    description: [
      'Lead front end developer for both the consumer facing and internal RETech application that determines the best value and uses for land for both sellers and buyers.',
      'Built property claim flow which allows sellers to register and look up their property to determine its worth when sold alone and along with neighbors',
      'Assisted in building home-grown CRM system that partners could use to manage leads and potential targets',
      'Helped build a target dispatching platform which automates the process of building a set of target properties for any particular lead run',
      'Facilitated ongoing upgrades to the front end stack (React)',
      'State management using Redux',
      'Implemented UI components with Material UI',
      'Lead efforts in the consumer-facing site redesign',
    ],
    location: 'Remote',
    technology: 'React, Redux, Material UI, LESS',
    title: 'Frontend Engineer',
  },
  // {
  //   company: 'Plixer',
  //   date: 'September 2019 – October 2020',
  //   description: [
  //     'Assisted in re-architecting network traffic analysis system from a legacy tech-stack to modern Angular 8+ framework',
  //     'Lead development on the application’s reporting engine which gives customer’s a clear visualization of all network conversation and device usage',
  //     'Components and services strongly typed using Typescript',
  //     'Wrote unit tests using Jasmine and Karma',
  //     'Implemented Bootstrap for the UI library'
  //   ],
  //   location: 'Remote',
  //   technology: 'Angular 8+, Typescript, Bootstrap, Sass',
  //   title: 'Frontend Developer'
  // },
  // {
  //   company: 'AffinityX',
  //   date: 'Jan 2015 – May 2020',
  //   description: [
  //     'Created new functionality and features for creative content delivery platforms using KnockoutJS, jQuery and PHP',
  //     'Helped in building custom application routing system',
  //     'Developed re-usable components using KnockoutJS',
  //     'Built a custom proofing interface that allows customers to upload creative content, manage revision history and mark for approval',
  //     'Assisted in building administrative console'
  //   ],
  //   location: 'Remote',
  //   technology: 'KnockoutJS, jQuery, PHP',
  //   title: 'Sr. UI Developer'
  // },
  {
    company: 'ThreadLab Inc',
    date: 'Mar 2014 – May 2017',
    description: [
      'Lead front end development using Angular 5+, SASS',
      'Built a proxy using NodeJS for restful API consumption',
      'Developed build pipeline with Jenkins',
      'Created responsive layout using SASS/Bourbon',
      'Implemented recurring subscription system using Recurly',
      'Integrated Stripe and Paypal payment funnels',
      'Manage email marketing templates via Mailchimp and Mandrill',
    ],
    location: 'Remote',
    technology:
      'Angular 5+, NodeJS, ES6 (2015), SASS, Bourbon/Neat, Grunt, Stripe, Paypal, Groovy on Grails, MongoDB',
    title: 'Frontend Engineer',
  },
  {
    company: 'Do Something',
    date: 'May 2014 – Jan 2015',
    description: [
      'Lead development on various social awareness campaigns',
      'Creating new features, functionality to application modules using jQuery and RequireJS',
      'Ongoing maintenance within Drupal framework template system',
      'Contributed to open-sourced interface framework and pattern libraries',
    ],
    location: 'New York City',
    technology:
      'Drupal, RequireJS, jQuery, SASS, Bourbon / Neat, Stripe, Wordress',
    title: 'Software Engineer',
  },
  {
    company: 'CPXi',
    date: 'Oct 2013 – May 2014',
    description: [
      'Worked on new functionality and features for company’s internal metrics dashboard',
      'Developed browser plugins that were available in the Chrome and Firefox web stores',
      'Lead UI development on a real-time news feed application / scraper built on HandlebarsJS, NodeJS, and Sails MVC',
      'Proprietary CSS framework using LESS',
    ],
    location: 'New York City',
    technology: 'Handlebars JS, Laravel, Symfony, LESS, NodeJS, Sails MVC',
    title: 'Senior Software Engineer',
  },
  {
    company: 'Alexander Interactive',
    date: 'Jul 2006 – Oct 2013',
    description: [
      'Built, managed and lead a team of seven front-end developers',
      'In charge of providing front-end development estimates on all projects',
      'Developed and re-wrote several re-usable JavaScript widgets from Prototype JS to jQuery',
      'Introduced HTML5 and CSS3 to Magento applications',
      "Defined and authored the company's best practices and coding standards document for front-end development",
      'Worked closely with IA and Creative departments on defining new and effective user experiences',
      'Worked closely with backend development team on front-end integration points',
      'Provided technical direction for clients on front-end handoff projects',
      'Utilized text replacement technologies such as Typekit, Cufón, sIFR',
      'Skinned and integrated custom Magento themes',
      'Object-oriented JavaScript development',
      'Responsive CSS',
      'Parallax UI Development',
      'Converted Photoshop documents into HTML and CSS templates',
      'Wrote custom CSS reset framework',
    ],
    location: 'New York City',
    technology: 'jQuery, PrototypeJS, Vanilla JS, Magento, Django',
    title: 'Frontend Tech Lead',
  },
];

export default function handler(req, res) {
  res.status(200).json(EXPERIENCE);
}
