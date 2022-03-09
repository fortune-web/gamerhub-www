import type { NextPage } from 'next';
import Image from 'next/image';
import IQImage from './assets/metaverse-giant.png';
import GamerHubIcon from './assets/prompt-logo.png';
import GamerGrowIcon from './assets/prompt-circle.png';
import GamerPlayIcon from './assets/prompt-triangle.png';
import GamerStreamIcon from './assets/prompt-block.png';

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
                GamerHub makes it easy for gamers to have access to different
                games on different blockchains all in one place.
              </p>
              <p>
                The crypto game aggregator framework is backed and governed by
                the gaming community.
              </p>
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
            <div className="col-md-4">
              <div className="single-feature">
                <Image
                  className="icon"
                  src={GamerHubIcon}
                  alt=""
                  width={60}
                  height={36}
                />
                <h4 className="title">GamerHub</h4>
                <p>
                  Aggregated crypto games, gaming guilds, metaverses and NFTs.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-feature">
                <Image
                  className="icon"
                  src={GamerStreamIcon}
                  alt=""
                  width={36}
                  height={36}
                />
                <h4 className="title">GamerStream</h4>
                <p>Crypto game streaming platform.</p>
                <br />
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-feature">
                <Image
                  className="icon"
                  src={GamerPlayIcon}
                  alt=""
                  width={36}
                  height={36}
                />
                <h4 className="title">GamerPlay</h4>
                <p>Exclusive games for GHT holders</p>
                <br />
              </div>
            </div>
          </div>
          <div className="row justify-content-sm-center justify-content-md-start">
            <div className="col-md-4">
              <div className="single-feature">
                <Image
                  className="icon"
                  src={GamerGrowIcon}
                  alt=""
                  width={36}
                  height={36}
                />
                <h4 className="title">GamerMerch</h4>
                <p>Gamer merchandise shop.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
