import type { AppProps } from 'next/app';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faMediumM,
  faTelegram,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import 'tailwindcss/tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.scss';
import '../frontend/shared/ui/css/animate.css';
import '../frontend/shared/ui/css/style.css';
import '../frontend/shared/ui/css/responsive.css';
import { UserProfileProvider } from '../frontend/shared/contexts/UserProfileContext/UserProfileProvider';
import * as bsc from '@binance-chain/bsc-use-wallet';
import { dark, ModalProvider, ResetCSS } from '@pancakeswap-libs/uikit';
import { ThemeProvider } from 'styled-components';

library.add(
  faBars,
  faSearch,
  faDiscord,
  faFacebookF,
  faMediumM,
  faTwitter,
  faTelegram
);

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Multi-chain crypto games aggregator" />
      <title>GamerHub</title>
    </Head>
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
          <UserProfileProvider>
            <Component {...pageProps} />
          </UserProfileProvider>
        </ModalProvider>
      </bsc.UseWalletProvider>
    </ThemeProvider>
  </>
);

export default MyApp;
