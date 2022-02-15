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
              <p>
                Gamerhub makes it easy for Gamers to have access to different
                games on different blockchains all in one place.
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
                <h4 className="title">Unique Gamer Profile</h4>
                <p>One unique profile for all GamerHub services.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-feature">
                <Image
                  className="icon"
                  src={GamerGrowIcon}
                  alt=""
                  width={36}
                  height={36}
                />
                <h4 className="title">100s of Aggregated Games</h4>
                <p>Includes gaming guilds, metaverse, DEFI, NFT, P2E games.</p>
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
                <h4 className="title">In-game Asset Marketplace</h4>
                <p>
                  Intertrade in-game assets, characters, accessories, and NFTs.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-sm-center justify-content-md-start">
            <div className="col-md-4">
              <div className="single-feature">
                <Image
                  className="icon"
                  src={GamerPlayIcon}
                  alt=""
                  width={36}
                  height={36}
                />
                <h4 className="title">Dapp Corner</h4>
                <p>Supports multi-chain 3rd party DApp services.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-feature">
                <Image
                  className="icon"
                  src={GamerHubIcon}
                  alt=""
                  width={60}
                  height={36}
                />
                <h4 className="title">NFT Marketplace</h4>
                <p>Create, auction and trade NFTs on the GamerHub platform.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
