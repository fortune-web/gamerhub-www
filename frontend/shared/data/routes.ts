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
    url: 'https://gamerhub-1.gitbook.io/gamerhub-whitepaper-v1/',
    title: 'Whitepaper',
  },
};

export const TabMenu: Menu = {
  about: {
    url: '/token-sale#about',
    title: 'About',
  },
  tokenomics: {
    url: '/token-sale#tokenomics',
    title: 'Tokenomics',
  },
  team: {
    url: '/token-sale#team',
    title: 'Team',
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
  exploreTrending: {
    url: `/explore/trending`,
    title: 'Explore Trending Games',
  },
  exploreNewReleases: {
    url: `/explore/new-releases`,
    title: 'Explore Newly Released Games',
  },
  exploreMostPopular: {
    url: `/explore/most-popular`,
    title: 'Explore Most Popular Games',
  },
  profile: {
    url: '/profile',
    title: 'Explore Games',
  },
  sale: {
    url: '/token-sale',
    title: 'Token Sale',
  },
  main: {
    url: '/main',
    title: 'Main Application',
  },
};
