import type { NextPage } from 'next';
import About from '../frontend/views/home/About/About';
import Banner from '../frontend/views/home/Banner/Banner';
import Roadmap from '../frontend/views/home/Roadmap/Roadmap';
import Team from '../frontend/views/home/Team/Team';
import { Frame } from '../frontend/core/frame/Frame';
import { Tokenomics } from '../frontend/views/home/Tokenomics/Tokenomics';

const Home: NextPage = () => {
  return (
    <Frame pageType="landing">
      <div className="">
        <label className="header3 text-grey-main mt-10">About GamerHub</label>
      </div>
      <Banner />
      <About />
      <Tokenomics />
      <Roadmap />
      <Team />
    </Frame>
  );
};

export default Home;
