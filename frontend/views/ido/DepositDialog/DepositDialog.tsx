import { useWallet } from '@binance-chain/bsc-use-wallet';
import { useWalletModal } from '@pancakeswap-libs/uikit';
import Image from 'next/image';
import GHTLogo from '../../../shared/assets/img/logo_2.png';
import USDT from '../../../shared/assets/img/USDT.png';
import ArrowDown from '../../../shared/assets/icon/arrow_down.png';
import styles from './DepositDialog.module.scss';

export interface IDepositDialog {}

const DepositDialog: React.FC<IDepositDialog> = () => {
  const { account, connect, reset, status, ethereum, chainId } = useWallet();

  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    (data) => connect(data),
    () => reset(),
    account || ''
  );

  return (
    <div className={styles.deposit_dialog}>
      <div className="flex items-center">
        <Image src={USDT} alt="logo" width={28} height={28} />
        <label className="body1 text-grey-m_4 ml-2">USDT</label>
      </div>
      <div className="relative">
        <input type="number" step={0.01} className={styles.input} />
        <button className={styles.btn_max}>Max</button>
      </div>

      <div className="flex justify-center">
        <Image src={ArrowDown} alt="logo" width={40} height={40} />
      </div>

      <div className="flex items-center">
        <Image src={GHTLogo} alt="logo" width={28} height={28} />
        <label className="body1 text-grey-m_4 ml-2">GHT</label>
      </div>
      <input type="number" step={0.01} className={styles.input} />

      <div className="flex justify-between body1 text-grey-m_3 mb-6 mt-2">
        Price: $0.0022
      </div>

      {status === 'connected' ? (
        <button className="def-btn mb-10">Approve</button>
      ) : (
        <button className="def-btn mb-10" onClick={onPresentConnectModal}>
          Connect Wallet
        </button>
      )}

      <div className="flex justify-between body1 text-grey-m_3 mb-4">
        <label>Minimum Allocation</label>
        <label>
          <strong>$50</strong>
        </label>
      </div>
      <div className="flex justify-between body1 text-grey-m_3">
        <label>Maximum Allocation</label>
        <label>
          <strong>$5,000</strong>
        </label>
      </div>
    </div>
  );
};

export default DepositDialog;
