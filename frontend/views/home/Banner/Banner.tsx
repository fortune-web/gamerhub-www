import type { NextPage } from 'next';
import styles from './Banner.module.scss';
import classNames from 'classnames';

const Banner: NextPage = () => {
  return (
    <div className={classNames(styles.banner, 'banner')} id="home">
      <div
        className={classNames(
          styles.bannerTxt,
          'banner-txt container justify-content-center'
        )}
      >
        <h1>Multichain Crypto Game Aggregator.</h1>
        <h4>Metaverses . Gaming . NFTs</h4>
        <a href="#0" className="def-btn">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Banner;
