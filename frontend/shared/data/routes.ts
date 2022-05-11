interface EachMenu {
  url: string;
  title: string;
}

interface Menu {
  [x: string]: EachMenu;
}

export const NavMenu: Menu = {
  home: {
    url: '/',
    title: 'Home',
  },
  about: {
    url: '/#about',
    title: 'About',
  },
  tokenomics: {
    url: '/#tokenomics',
    title: 'Tokenomics',
  },
  roadmap: {
    url: '/#roadmap',
    title: 'Roadmap',
  },
  whitepaper: {
    url: 'https://gamerhub-1.gitbook.io/gamerhub-whitepaper/',
    title: 'Whitepaper',
  },
};

export const RootRoutes = {
  login: {
    url: '/login',
    title: 'Explore Games',
  },
  loginCallback: {
    url: '/callback',
    title: 'Recognizing user...',
  },
  explore: {
    url: '/explore',
    title: 'Explore Games',
  },
  profile: {
    url: '/profile',
    title: 'Explore Games',
  },
};
