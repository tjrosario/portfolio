const WORK = [
  {
    id: 0,
    title: 'Brewery App',
    // src: 'video/real-estate.mp4',
    preview: 'img/work/brewery.jpg',
    description: 'Fun little brewery app that lets you search breweries across the country using different sets of criteria. Built using React\'s context and hooks API\'s.',
    github: 'https://github.com/tjrosario/brewery-app'
  },
  {
    id: 1,
    title: 'Real Estate Ai Platform',
    src: 'video/real-estate.mp4',
    preview: 'img/work/real-estate.jpg',
    description: 'Real Estate platform that leverages Ai, machine learning and data science to determine best use of land for both buyers and sellers.',
  },
  {
    id: 2,
    title: 'ThreadLab Conversion Funnel',
    src: 'video/mens-shopping.mp4',
    preview: 'img/work/mens-shopping.png',
    description: 'Threadlab is an eco-friendly lifestyle personalization technology that makes it easy to discover the best new products from around the world.',
    url: 'https://www.mythreadlab.com',
    github: 'https://github.com/tjrosario/mens-shopping-app'
  },
  {
    id: 3,
    title: 'Proofing System for SMBs',
    src: 'video/proofs.mp4',
    preview: 'img/work/smb.png',
    description: 'Online proofing system tailored for helping SMBs deliver marketing projects efficiently by streamlining reviewing and approving creative content.',
  },
  {
    id: 4,
    title: 'Giphy Weirdness Calculator',
    src: 'video/giphy.mp4',
    preview: 'img/work/giphy.svg',
    description: 'A fun little app that allows you to search the Giphy Translate API by supplying a "weirdness" level. You can add any GIFs to your favorites list and generate an average "weirdness score."',
    github: 'https://github.com/tjrosario/giphy'
  }
];

export default function handler(req, res) {
  res.status(200).json(WORK);
}
