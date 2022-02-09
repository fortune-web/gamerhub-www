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
    url: '/about',
    title: 'About',
  },
  roadmap: {
    url: '/#roadmap',
    title: 'Roadmap',
  },
};
