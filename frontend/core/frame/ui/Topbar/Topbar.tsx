import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import logo from '../../../../shared/assets/img/logo.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { NavMenu } from '../../../../shared/data/routes';
import styles from './Topbar.module.scss';

export const Topbar = () => {
  const { pathname } = useRouter();

  return (
    <div className={classNames(styles.header, 'header')}>
      <div className="row">
        <div className="overflow-hidden col-xl-3 col-lg-3 d-xl-flex d-lg-flex d-block align-items-center">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-7 d-xl-block d-lg-block">
              <div className="logo">
                <Link href={NavMenu.home.url} passHref>
                  <a>
                    <Image src={logo} alt="LOGO" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="d-xl-none d-lg-none col-5 d-flex align-items-center justify-content-end">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <FontAwesomeIcon icon={['fas', 'bars']} />
              </button>
            </div>
          </div>
        </div>
        <nav
          className="col-xl-9 col-lg-9 bottom-header navbar navbar-expand-lg navbar-light"
          id="navbar"
        >
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              {Object.keys(NavMenu).map((key, index) => (
                <li className="nav-item" key={index}>
                  <Link href={NavMenu[key].url} passHref>
                    <a
                      className={classNames(
                        'nav-link',
                        pathname === NavMenu[key].url ? 'active' : ''
                      )}
                    >
                      {key}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
