import Image from 'next/image';
import Link from 'next/link';
import favicon from '../../../shared/assets/img/favicon.png';
import hubInfoBack from '../../../shared/assets/img/hub_info_back.png';
import styles from './GamerHubInfo.module.scss';

export interface IGamerHubInfo {}

const GamerHubInfo: React.FC<IGamerHubInfo> = () => {
  return (
    <div className={styles.gamerHubInfo}>
      <div className="flex">
        <div className={styles.logo_container}>
          <div className="h-full w-full relative">
            <Image
              src={favicon}
              alt="logo"
              className={styles.logo_image}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="space-y-1.5 flex flex-col">
          <label className="header2 text-grey-m_4">
            GamerHub Token Pre IDO
          </label>
          <label className="body1 text-grey-m_3">
            Multichain Crypto Game Aggregator
          </label>
        </div>
      </div>
      <div className={styles.ido_dates}>
        <div className="space-y-2 flex flex-col">
          <label className="body2 text-grey-m_3">Pre IDO STARTS</label>
          <label className="body1 text-grey-m_4">July 1st, 12:00 PM UTC</label>
        </div>
        <div className="space-y-2 flex flex-col">
          <label className="body2 text-grey-m_3">Pre IDO ENDS</label>
          <label className="body1 text-grey-m_4">July 3rd, 12:00 PM UTC</label>
        </div>
      </div>
      <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
        <div className={styles.back_container}>
          <img
            src="/static/img/hub_info_back.png"
            alt="logo"
            className={styles.back_image}
          />
        </div>
        <div className={styles.gft_goal}>
          <div className="flex flex-col">
            <label className="body1 text-grey-m_4 mb-4">
              <big>Join GamerHub Pre IDO</big>
            </label>
            <div className="flex justify-between mb-3">
              <label className="body1 text-grey-m_3">Price Per Token</label>
              <label className="body1 text-grey-m_4">$0.022</label>
            </div>
            <div className="flex justify-between mb-3">
              <label className="body1 text-grey-m_3">Currencies</label>
              <label className="body1 text-grey-m_4">USDT and BUSD</label>
            </div>
            <div className="flex justify-between mb-3">
              <label className="body1 text-grey-m_3">Blockchain</label>
              <label className="body1 text-grey-m_4">Binance (BEP20)</label>
            </div>
            <div className="flex justify-between mb-3">
              <label className="body1 text-grey-m_3">Minimum Allocation</label>
              <label className="body1 text-grey-m_4">$50</label>
            </div>
            <div className="flex justify-between mb-3">
              <label className="body1 text-grey-m_3">Maximum Allocation</label>
              <label className="body1 text-grey-m_4">$5,000</label>
            </div>
          </div>
          <Link href="/pre-ido/purchase">
            <button className="def-btn">Buy GHT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GamerHubInfo;
