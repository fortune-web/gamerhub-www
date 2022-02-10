import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../shared/assets/img/logo.png';
import { NavMenu } from '../../../../shared/data/routes';

export const Footer = () => (
  <div className="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6 col-sm-10">
            <div className="about-widget">
              <a href="index.html" className="logo">
                <Image src={logo} alt="LOGO" />
              </a>
              <p>Connect with the community</p>
              <div className="social-links">
                <ul>
                  <li>
                    <a href="#0" className="single-link">
                      <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="single-link">
                      <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="single-link">
                      <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="single-link">
                      <FontAwesomeIcon icon={['fab', 'pinterest-p']} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-sm-10">
            <div className="link-widget">
              <ul>
                <li>
                  <a href="#0" className="single-link">
                    GamerGrow
                  </a>
                </li>
                <li>
                  <a href="#0" className="single-link">
                    GamerPlay
                  </a>
                </li>
                <li>
                  <a href="#0" className="single-link">
                    GamerMerch
                  </a>
                </li>
                <li>
                  <a href="#0" className="single-link">
                    GamerStream
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8">
            <p>
              <small>
                Copyright {new Date().getFullYear() + ' '}
                <Link href={NavMenu.home.url} passHref>
                  <a> GamerHub </a>
                </Link>{' '}
                All Rights Reserved.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
