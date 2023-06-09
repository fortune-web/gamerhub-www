import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import logo from '../../../../shared/assets/img/logo.png';
import favicon from '../../../../shared/assets/img/favicon.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { NavMenu, RootRoutes } from '../../../../shared/data/routes';
import styles from './Topbar.module.scss';
import { useState } from 'react';
import { useWindowScrollPosition } from 'rooks';
import { PageType } from '../../Frame';
import WalletConnect from '../WalletConnect/WalletConnect';

interface Props {
  pageType?: PageType;
}

export const Topbar = ({ pageType }: Props) => {
  const { pathname } = useRouter();
  const [navOpen, setNavOpen] = useState(false);

  let verticalScrollPosition = 0;

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    verticalScrollPosition = useWindowScrollPosition().scrollY;
  }

  return (
    <nav
      className={classNames('header animated navbar navbar-expand-lg', {
        'header-fixed': pageType !== 'others',
        fadeInDown: pageType !== 'others',
        [styles.header]: pageType !== 'others' && verticalScrollPosition <= 300,
        [styles.headerFixed]: verticalScrollPosition > 300,
      })}
    >
      <div className="container align-middle">
        <div className="navbar-brand m-0">
          <Link href={NavMenu.home.url} passHref>
            <a onClick={() => setNavOpen(false)}>
              <div className="hidden sm:block">
                <Image src={logo} alt="LOGO" width={190} height={30} />
              </div>
              <div className="block sm:hidden">
                <Image
                  src={favicon}
                  alt="LOGO"
                  width={60}
                  height={50}
                  className="block sm:hidden"
                />
              </div>
            </a>
          </Link>
        </div>
        <div className="flex">
          <div className="flex md:hidden">
            <WalletConnect />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setNavOpen(!navOpen)}
          >
            <FontAwesomeIcon icon={['fas', 'bars']} />
          </button>
          <div
            className={classNames(
              navOpen
                ? `${styles.mobileNavOpen} col-md-12 p-0 dropdown-menu`
                : 'collapse navbar-collapse',
              styles.mobileNav,
              'bottom-header navbar'
            )}
          >
            <ul className="navbar-nav w-100 justify-content-end align-items-center">
              {Object.keys(NavMenu).map((key, index) => (
                <li
                  className={classNames(
                    navOpen ? styles.navItem : '',
                    'nav-item'
                  )}
                  key={index}
                >
                  <Link href={NavMenu[key].url} passHref>
                    <a
                      className={classNames(
                        'nav-link',
                        pathname === NavMenu[key].url ? 'active' : ''
                      )}
                      onClick={() => setNavOpen(false)}
                    >
                      {key}
                    </a>
                  </Link>
                </li>
              ))}
              {pathname === '/token-sale/purchase' ? (
                <div className="hidden md:flex">
                  <WalletConnect />
                </div>
              ) : (
                <li className="nav-item">
                  <Link href={RootRoutes.explore.url} passHref>
                    <a className="def-btn">Explore</a>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
