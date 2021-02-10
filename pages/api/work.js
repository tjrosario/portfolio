const WORK = [
  {
    description: 'Fun little brewery app that lets you search breweries across the country using different sets of criteria. Built using React\'s context and hooks API\'s.',
    github: 'https://github.com/tjrosario/brewery-app',
    id: 0,
    preview: 'img/work/brewery.jpg',
    title: 'Brewery App'
  },
  {
    description: 'Real Estate platform that leverages Ai, machine learning and data science to determine best use of land for both buyers and sellers.',
    id: 1,
    preview: 'img/work/real-estate.jpg',
    src: 'video/real-estate.mp4',
    title: 'Real Estate Ai Platform'
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
    description: 'Online proofing system tailored for helping SMBs deliver marketing projects efficiently by streamlining reviewing and approving creative content.',
    id: 3,
    preview: 'img/work/smb.png',
    src: 'video/proofs.mp4',
    title: 'Proofing System for SMBs'
  },
  {
    description: 'A fun little app that allows you to search the Giphy Translate API by supplying a "weirdness" level. You can add any GIFs to your favorites list and generate an average "weirdness score."',
    github: 'https://github.com/tjrosario/giphy',
    id: 4,
    preview: 'img/work/giphy.svg',
    src: 'video/giphy.mp4',
    title: 'Giphy Weirdness Calculator'
  }
];

export default function handler(req, res) {
  res.status(200).json(WORK);
}
