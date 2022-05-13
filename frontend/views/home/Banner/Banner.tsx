import type { NextPage } from 'next';
import Link from 'next/link';
import styles from './Banner.module.scss';
import classNames from 'classnames';
import { RootRoutes } from '../../../shared/data/routes';

const Banner: NextPage = () => {
  return (
    <div className={classNames(styles.banner, 'banner')} id="home">
      <div className={classNames(styles.bannerTxt, 'banner-txt container')}>
        <div className="col-l-3 col-md-6">
          <h1>Multichain Crypto Game Aggregator</h1>
          <br />
          <h4>Metaverses . Games . Guilds . NFTs</h4>

          <Link href={RootRoutes.explore.url} passHref>
            <a className="def-btn">Dive in</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
