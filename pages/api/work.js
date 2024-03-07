const WORK = [
    {
        description: 'Algolia-powered search engine built with React and NextJS that searches both blog articles and doula service providers.',
        id: 1,
        preview: 'img/work/cake.jpg',
        src: 'video/cake-search.mp4',
        title: 'Multi-facet / Multi-index search',
        url: 'https://www.joincake.com/blog'
    },
    {
        description: 'Threadlab is an eco-friendly lifestyle personalization technology that makes it easy to discover the best new products from around the world.',
        github: 'https://github.com/tjrosario/mens-shopping-app',
        id: 2,
        preview: 'img/work/mens-shopping.png',
        src: 'video/mens-shopping.mp4',
        title: 'ThreadLab Conversion Funnel',
        url: 'https://www.mythreadlab.com'
    },
    {
        description: 'Fun little brewery app that lets you search breweries across the country using different sets of criteria. Built using React\'s context and hooks API\'s.',
        github: 'https://github.com/tjrosario/brewery-app',
        id: 3,
        preview: 'img/work/brewery.jpg',
        title: 'Brewery App'
    },
    {
        description: 'Online proofing system tailored for helping SMBs deliver marketing projects efficiently by streamlining reviewing and approving creative content.',
        id: 4,
        preview: 'img/work/smb.png',
        src: 'video/proofs.mp4',
        title: 'Proofing System for SMBs'
    },
    {
        description: 'A fun little app that allows you to search the Giphy Translate API by supplying a "weirdness" level. You can add any GIFs to your favorites list and generate an average "weirdness score."',
        github: 'https://github.com/tjrosario/giphy',
        id: 5,
        preview: 'img/work/giphy.svg',
        src: 'video/giphy.mp4',
        title: 'Giphy Weirdness Calculator'
    }
];

export default function handler(req, res) {
    res.status(200).json(WORK);
}
