const ABOUT = [
    "Hello!  I'm a frontend developer based out of the Jersey Shore.  I love working on fun, innovative websites.  I've been involved in technology for almost two decades now.  My journey has given me the pleasure to work with some of the world's most recognized brands including iHeartRadio, Topps, Estee Lauder, Lowes, Virgin Mobile and many others.  I've also been lucky enough to work along side with some highly talented technologists as my peers, which I have looked to as mentors throughout my career.",
    "I'm a bit of a perfectionist and take a lot of pride in all of my work.  I try to leave every piece of code a bit more modular, performant and readable than how I found it.  The web is constantly evolving and I do my part in staying up to date with latest trends and solutions.",
    'Beyond the keyboard I have a huge passion for music, fitness and the beach!',
    "I'm always looking for new opportunities and believe, with my extensive experience and passion for technology, I can be an asset to your team.",
    "Let's chat about how I can be a good fit for your company!",
];

export default function handler(req, res) {
    res.status(200).json(ABOUT);
}
