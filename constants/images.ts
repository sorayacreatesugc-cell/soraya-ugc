export const HERO_DEFAULT_IMAGE = '/images/soraya/hero-default.jpg';
export const HERO_FALLBACK_IMAGE = HERO_DEFAULT_IMAGE;

export const ABOUT_IMAGE_FALLBACK = HERO_DEFAULT_IMAGE;
export const ABOUT_IMAGES = [
  '/images/soraya/about-01.webp',
  '/images/soraya/about-02.png',
  '/images/soraya/about-03.jpg',
  '/images/soraya/about-04.jpg',
  '/images/soraya/about-05.jpg',
  '/images/soraya/about-06.webp',
];

export const ACTING_HEADSHOT_FALLBACK = HERO_DEFAULT_IMAGE;
export const ACTING_HEADSHOTS = [
  '/images/soraya/about-01.webp',
  '/images/soraya/headshot-extra-01.webp',
  '/images/soraya/headshot-extra-02.webp',
  '/images/soraya/hero-default.jpg',
  '/images/soraya/headshot-extra-04.webp',
  '/images/soraya/headshot-extra-03.webp',
];

export const PORTFOLIO_IMAGE_SOURCES = [
  '/images/soraya/portfolio-01.jpg',
  '/images/soraya/portfolio-02.jpg',
  '/images/soraya/portfolio-03.jpg',
  '/images/soraya/portfolio-04.jpg',
  '/images/soraya/portfolio-05.png',
  '/images/soraya/soap-01.png',
  '/images/soraya/hydracy.jpg',
  '/images/soraya/eco-essence-with-soraya.jpg'
] as const;

export const TRUSTED_BY_LOGOS = [
  {
    name: 'HelloFresh',
    src: '/images/trusted-by/hellofresh.svg',
    imageClassName: 'h-16 md:h-20 lg:h-24',
  },
  {
    name: 'Hydracy',
    src: '/images/trusted-by/hydracy.jpg',
    imageClassName: 'h-[4.5rem] md:h-24 lg:h-28 rounded-xl',
  },
  {
    name: 'Nerd Wallet',
    src: '/images/trusted-by/nerd-wallet.webp',
    imageClassName: 'h-16 md:h-20 lg:h-24',
  },
  {
    name: 'Eco Essence Nutrition',
    src: '/images/trusted-by/eco-essence-nutrition.png',
    imageClassName: 'h-16 md:h-20 lg:h-24',
  }
] as const;
