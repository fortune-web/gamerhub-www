import type { AppProps } from 'next/app';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import { Frame } from '../frontend/core/frame/Frame';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../frontend/shared/assets/css/animate.css';
import '../frontend/shared/assets/css/style.css';
import '../frontend/shared/assets/css/responsive.css';

library.add(
  faBars,
  faSearch,
  faFacebookF,
  faInstagram,
  faTwitter,
  faPinterestP
);

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Multi-chain games aggregator" />
      <title>GamerHub</title>
    </Head>
    <Frame>
      <Component {...pageProps} />
    </Frame>
  </>
);

export default MyApp;
