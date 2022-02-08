import type { NextPage } from 'next';
import About from '../frontend/views/home/About/About';
import Banner from '../frontend/views/home/Banner/Banner';

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <About />
    </>
  );
};

export default Home;
