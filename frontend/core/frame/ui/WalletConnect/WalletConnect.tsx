import { useWallet } from '@binance-chain/bsc-use-wallet';
import { useWalletModal } from '@pancakeswap-libs/uikit';
import { sortAddress } from '../../../../lib/utils';
import Image from 'next/image';
import Dropdown from '../../../../shared/assets/icon/dropdown.svg';
import Wallet from '../../../../shared/assets/icon/wallet.svg';
import styles from './WalletConnect.module.scss';

export interface IWalletConnect {}

const WalletConnect: React.FC<IWalletConnect> = () => {
  const { account, connect, reset, status, ethereum, chainId } = useWallet();

  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    (data) => connect(data),
    () => reset(),
    account || ''
  );

  return (
    <div>
      {status === 'connected' ? (
        <button onClick={onPresentAccountModal} className={styles.btn_connect}>
          <Image src={Wallet} />
          <span className="hidden sm:block">{sortAddress(account || '')}</span>
        </button>
      ) : (
        <button className={styles.btn_connect} onClick={onPresentConnectModal}>
          <Image src={Wallet} />
          <div className="hidden sm:block">
            <span>Connect Wallet</span>
          </div>
        </button>
      )}
    </div>
  );
};

export default WalletConnect;
