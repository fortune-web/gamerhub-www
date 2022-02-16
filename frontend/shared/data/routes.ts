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
};
