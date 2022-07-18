import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import logo from '../../../shared/assets/img/logo.png';
import Link from 'next/link';
import { NavMenu as menu, RootRoutes } from '../../../shared/data/routes';
import Home from '../../../shared/assets/icon/home.svg';
import Gamehub from '../../../shared/assets/icon/gamehub.svg';
import Wallet from '../../../shared/assets/icon/wallet.svg';
import GameFi from '../../../shared/assets/icon/gamefi.svg';
import NFTs from '../../../shared/assets/icon/NFT.svg';
import Market from '../../../shared/assets/icon/market.svg';
import Stream from '../../../shared/assets/icon/stream.svg';
import GameHub from '../../../shared/assets/icon/gamehub.svg';
import Merch from '../../../shared/assets/icon/merch.svg';
import Settings from '../../../shared/assets/icon/settings.svg';
import styles from './NavMenu.module.scss';

export interface INavMenu {}

const NavMenuItems = [
  { title: 'Home', link: '/main', icon: Home },
  { title: 'Games', link: '/main/games', icon: Gamehub },
  { title: 'Wallet', link: '/main', icon: Wallet },
  { title: 'GameFi', link: '/main', icon: GameFi },
  { title: 'NFTs', link: '/main', icon: NFTs },
  { title: 'Marketplace', link: '/main', icon: Market },
  { title: 'GamerStream', link: '/main', icon: Stream },
  { title: 'GamerPlay', link: '/main', icon: GameHub },
  { title: 'GamerMerch', link: '/main', icon: Merch },
  { title: 'Settings', link: '/main', icon: Settings },
];

const NavMenu: React.FC<INavMenu> = () => {
  return (
    <div className={styles.nav_menu}>
      <div className="navbar-brand mb-12 ml-3">
        <Link href={menu.home.url} passHref>
          <a>
            <Image src={logo} alt="LOGO" width={190} height={30} />
          </a>
        </Link>
      </div>
      <div className="flex flex-col m-2">
        {NavMenuItems.map((item) => (
          <Link href={item.link} passHref>
            <div className={styles.nav_item}>
              <Image src={item.icon} alt="Wallet" />
              <span>{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavMenu;
