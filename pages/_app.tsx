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
import 'bootstrap/dist/css/bootstrap.min.css';
import '../frontend/shared/ui/css/animate.css';
import '../frontend/shared/ui/css/style.css';
import '../frontend/shared/ui/css/responsive.css';
import { UserProfileProvider } from '../frontend/shared/contexts/UserProfileContext/UserProfileProvider';

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
    <UserProfileProvider>
      <Component {...pageProps} />
    </UserProfileProvider>
  </>
);

export default MyApp;
