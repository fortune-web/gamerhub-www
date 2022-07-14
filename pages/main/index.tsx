import { NextPage } from 'next';
import { Frame } from '../../frontend/core/frame/Frame';
import { useRouter } from 'next/router';
import GamerHubInfo from '../../frontend/views/ido/GamerHubInfo/GamerHubInfo';
import Tabs from '../../frontend/views/ido/Tabs/Tabs';
import About from '../../frontend/views/ido/About/About';
import Roadmap from '../../frontend/views/ido/Roadmap/Roadmap';
import Tokenomics from '../../frontend/views/ido/Tokenomics/Tokenomics';
import Team from '../../frontend/views/ido/Team/Team';
import { TabMenu } from '../../frontend/shared/data/routes';
import AppBar from '../../frontend/views/main/AppBar/AppBar';
import NavMenu from '../../frontend/views/main/NavMenu/NavMenu';
import HomeSlider from '../../frontend/views/main/HomeSlider/HomeSlider';
import HomeGames from '../../frontend/views/main/HomeGames/HomeGames';

export const MainPage: NextPage = () => {
  return (
    <div className="bg-bg-main min-h-screen flex">
      <NavMenu />
      <div className="w-full px-8">
        <AppBar />
        <div className="flex flex-col mx-auto pb-10">
          <HomeSlider />
          <HomeGames />
        </div>
      </div>
    </div>
  );
};

const Main: NextPage = () => <MainPage />;

export default Main;
