import type { NextPage } from 'next';
import Image from 'next/image';
import IQImage from './assets/metaverse-giant.png';
import GamerHubIcon from './assets/prompt-logo.png';
import GamerGrowIcon from './assets/prompt-circle.png';
import GamerPlayIcon from './assets/prompt-triangle.png';

const About: NextPage = () => {
  return (
    <div className="iq-feature" id="about">
      <div className="container">
        <div className="row justify-content-xl-end justify-content-lg-end justify-content-sm-center">
          <div className="col-xl-5 col-lg-6 col-sm-10 col-md-7 d-xl-flex d-lg-flex d-block align-items-center">
            <div className="part-text">
              <h2>Reinventing The Crypto Gaming Experience</h2>
              <p>Access all games across all blockchains in one place.</p>
              <p>
                The game aggregator framework is backed by a cross-chain
                stablecoin protocol governed by the community.
              </p>
              <a href="#0" className="def-btn">
                play now
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 col-sm-10 col-md-5 offset-xl-1 offset-lg-1 offset-0">
            <div className="part-img">
              <Image src={IQImage} alt="" />
            </div>
          </div>
        </div>
        <div className="part-features">
          <div className="row justify-content-sm-center justify-content-md-start">
            <div className="col-xl-4 col-lg-4 col-sm-10 col-md-6">
              <div className="single-feature">
                <Image
                  className="icon"
                  src={GamerHubIcon}
                  alt=""
                  width={60}
                  height={36}
                />
                <h3 className="title">GamerHub</h3>
                <p>Crypto games with DeFi and NFT features.</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-10 col-md-6">
              <div className="single-feature">
                <Image
                  className="icon"
                  src={GamerGrowIcon}
                  alt=""
                  width={36}
                  height={36}
                />
                <h3 className="title">GamerGrow</h3>
                <p>Crypto Game Incubator</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-10 col-md-6">
              <div className="single-feature">
                <Image
                  className="icon"
                  src={GamerPlayIcon}
                  alt=""
                  width={36}
                  height={36}
                />
                <h3 className="title">GamerPlay</h3>
                <p>Exclusive games for GHT holders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
