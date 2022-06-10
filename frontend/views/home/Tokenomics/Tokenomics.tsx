import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import styles from './Tokenomics.module.scss';
import GameCurrencyIcon from './assets/icon-2.png';
import StakingIcon from './assets/icon-4.png';
import StreamingAccessIcon from './assets/icon-7.png';
import GovernanceIcon from './assets/icon-5.png';
import MerchandiseIcon from './assets/icon-3.png';
import classNames from 'classnames';

export const Tokenomics = () => {
  return (
    <div className="affiliate" id="tokenomics">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="part-para">
              <h2 className="title">GHT Token</h2>
              <p className="mb-5">
                The GHT token is a Multichain token that will be created on
                blockchains like Solana, BSC, Ethereum, NEAR, IOTEX to give the
                whole gaming ecosystem an easy access to participate in the
                gaming revolution.
              </p>
              <p className="mb-5">
                <a href="#" className="def-btn sign-up-btn">
                  View Contract Address
                  <span className="ms-2">
                    <FontAwesomeIcon icon={['fas', 'search']} />
                  </span>
                </a>
              </p>
              <p className={classNames(styles.tokenomicsIntro, 'sub-title')}>
                TOKENOMICS
              </p>
              <span className="text-secondary">
                <h5 className={styles.tokenomicsTitle}>Seed Sale Price</h5> 1
                GHT = $0.014
                <br />
                <br />
              </span>
              <span className="text-secondary">
                <h5 className={styles.tokenomicsTitle}>Private Sale Price</h5> 1
                GHT = $0.018
                <br />
                <br />
              </span>
              <span className="text-secondary">
                <h5 className={styles.tokenomicsTitle}>Public Sale Price </h5> 1
                GHT = $0.022
                <br />
                <br />
              </span>
              <span className="text-secondary">
                <h5 className={styles.tokenomicsTitle}>TOTAL SUPPLY </h5>{' '}
                500,000,000
                <br />
                <br />
              </span>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="part-affilate-feature">
              <div className="single-feature">
                <div className="icon-box">
                  <div className="part-icon">
                    <Image
                      src={GameCurrencyIcon}
                      alt=""
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
                <div className="part-text">
                  <h3 className="title">Ecosystem Currency</h3>
                  <p>
                    GHT will be the major gaming and trading currency used on
                    the gamehub as well as the NFT & In-game marketplaces.
                  </p>
                </div>
              </div>
              <div className="single-feature">
                <div className="icon-box">
                  <div className="part-icon">
                    <Image src={StakingIcon} alt="" width={80} height={80} />
                  </div>
                </div>
                <div className="part-text">
                  <h3 className="title">GameFi and MetaFi</h3>
                  <p>
                    GHT will be used for game token mining and other GameFi
                    services.
                  </p>
                </div>
              </div>
              <div className="single-feature">
                <div className="icon-box">
                  <div className="part-icon">
                    <Image src={GovernanceIcon} alt="" width={80} height={80} />
                  </div>
                </div>
                <div className="part-text">
                  <h3 className="title">Ecosystem Governance</h3>
                  <p>
                    GHT serves as the governance token for the GamerHub
                    ecosystem.
                  </p>
                </div>
              </div>
              <div className="single-feature">
                <div className="icon-box">
                  <div className="part-icon">
                    <Image
                      src={StreamingAccessIcon}
                      alt=""
                      width={70}
                      height={80}
                    />
                  </div>
                </div>
                <div className="part-text">
                  <h3 className="title">Exclusive Access</h3>
                  <p>
                    GHT holders are granted access to exclusive games and
                    streaming content on both the GamerStream and GamerPlay
                    platforms.
                  </p>
                </div>
              </div>
              <div className="single-feature">
                <div className="icon-box">
                  <div className="part-icon">
                    <Image
                      src={MerchandiseIcon}
                      alt=""
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
                <div className="part-text">
                  <h3 className="title">Merchandise</h3>
                  <p>
                    GHT is the main currency for branding and trade of
                    merchandise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
