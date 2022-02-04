import type { AppProps } from "next/app";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="description" content="Multi-chain games aggregator" />
      <title>GamerHub</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
