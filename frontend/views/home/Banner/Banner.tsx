import type { NextPage } from 'next';
import Link from 'next/link';
import styles from './Banner.module.scss';
import classNames from 'classnames';

const Banner: NextPage = () => {
  return (
    <div className={classNames(styles.banner, 'banner')} id="home">
      <div className={classNames(styles.bannerTxt, 'banner-txt container')}>
        <div className="col-l-3 col-md-6">
          <h1>Multichain Crypto Game Aggregator</h1>
          <br />
          <h4>Metaverses . Games . Guilds . NFTs</h4>
          <Link
            href="https://gamerhub-1.gitbook.io/gamerhub-whitepaper/"
            passHref
          >
            <a className="def-btn">Whitepaper</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
