import * as bsc from '@binance-chain/bsc-use-wallet';
import { dark, ModalProvider, ResetCSS } from '@pancakeswap-libs/uikit';
import { ThemeProvider } from 'styled-components';
import { NextPage } from 'next';
import { Frame } from '../../frontend/core/frame/Frame';
import { useRouter } from 'next/router';
import PurchaseInfo from '../../frontend/views/ido/PurchaseInfo/PurchaseInfo';
import DepositDialog from '../../frontend/views/ido/DepositDialog/DepositDialog';

export const PurchaseCore: NextPage = () => {
  return (
    <Frame>
      <div className="bg-grey-bg">
        <div className="flex flex-col container mx-auto pb-10">
          <PurchaseInfo />
          <DepositDialog />
        </div>
      </div>
    </Frame>
  );
};

const PurchaseMain: NextPage = () => {
  return (
    <ThemeProvider theme={dark}>
      <ResetCSS />
      <bsc.UseWalletProvider
        chainId={56}
        connectors={{
          walletconnect: { rpcUrl: 'https://bsc-dataseed.binance.org' },
          bsc,
        }}
      >
        <ModalProvider>
          <PurchaseCore />
        </ModalProvider>
      </bsc.UseWalletProvider>
    </ThemeProvider>
  );
};

export default PurchaseMain;
