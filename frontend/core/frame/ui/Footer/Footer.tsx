import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import logo from './assets/logo.png';

export const Footer = () => (
  <div className="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-4 col-sm-10">
            <div className="about-widget">
              <a href="index.html" className="logo">
                <Image src={logo} alt="LOGO" />
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis commodi ut illum. Cumque, unde suscipit error!
              </p>
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
          <div className="col-xl-2 col-lg-2 col-sm-10">
            <div className="link-widget">
              <h4 className="title">Play Games</h4>
              <ul>
                <li>
                  <a href="#0" className="single-link">
                    Action Games
                  </a>
                </li>
                <li>
                  <a href="#0" className="single-link">
                    Intellectual
                  </a>
                </li>
                <li>
                  <a href="#0" className="single-link">
                    Online Casino
                  </a>
                </li>
                <li>
                  <a href="#0" className="single-link">
                    Lottery Draw
                  </a>
                </li>
                <li>
                  <a href="#0" className="single-link">
                    Chess Master
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-sm-10">
            <div className="newsletter-widget">
              <h4 className="title">Subscribe To Our Newsletter</h4>
              <form className="newsletter-form">
                <input type="text" placeholder="Enter Your Mail Address" />
                <button className="def-btn def-small">Subscribe</button>
              </form>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi accusamus labore recusandae! Quia sint consectetur
                explicabo.
              </p>
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
              Copyright © <a href="index.html">The Misco</a> - 2020. All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
