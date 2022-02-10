import type { NextPage } from 'next';
import About from '../frontend/views/home/About/About';
import Banner from '../frontend/views/home/Banner/Banner';
import Roadmap from '../frontend/views/home/Roadmap/Roadmap';
import Team from '../frontend/views/home/Team/Team';
import { Frame } from '../frontend/core/frame/Frame';

const Home: NextPage = () => {
  return (
    <Frame>
      <Banner />
      <About />
      <Roadmap />
      <Team />
    </Frame>
  );
};

export default Home;
