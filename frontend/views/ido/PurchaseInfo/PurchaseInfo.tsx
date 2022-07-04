import Image from 'next/image';
import favicon from '../../../shared/assets/img/favicon.png';

import styles from './PurchaseInfo.module.scss';

export interface IPurchaseInfo {}

const PurchaseInfo: React.FC<IPurchaseInfo> = () => {
  return (
    <div className={styles.gamerHubInfo}>
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
      <div className="space-y-1.5 flex flex-col items-center">
        <label className="header2 text-grey-m_4">GamerHub Token Sale</label>
        <label className="body1 text-grey-m_3">
          Multichain Crypto Game Aggregator
        </label>
      </div>
      {/* <div className={styles.ido_dates}>
        <div className="space-y-2 flex flex-col items-center">
          <label className="body2 text-grey-m_3">Pre IDO STARTS</label>
          <label className="body1 text-grey-m_4">July 1st, 12:00 PM UTC</label>
        </div>
        <div className="space-y-2 flex flex-col items-center">
          <label className="body2 text-grey-m_3">Pre IDO ENDS</label>
          <label className="body1 text-grey-m_4">July 3rd, 12:00 PM UTC</label>
        </div>
      </div> */}
    </div>
  );
};

export default PurchaseInfo;
