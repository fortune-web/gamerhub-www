import { NextPage } from 'next';
import { Frame } from '../../frontend/core/frame/Frame';
import { useRouter } from 'next/router';
import GamerHubInfo from '../../frontend/views/ido/GamerHubInfo/GamerHubInfo';
import Tabs from '../../frontend/views/ido/Tabs/Tabs';
import About from '../../frontend/views/ido/About/About';
import Tokenomics from '../../frontend/views/ido/Tokenomics/Tokenomics';
import Team from '../../frontend/views/ido/Team/Team';
import { TabMenu } from '../../frontend/shared/data/routes';

export const PreIDOPage: NextPage = () => {
  const { asPath: fullPath } = useRouter();

  let Content = About;

  switch (fullPath) {
    case TabMenu.about.url:
      Content = About;
      break;
    case TabMenu.tokenomics.url:
      Content = Tokenomics;
      break;
    case TabMenu.team.url:
      Content = Team;
      break;
    default:
      break;
  }

  return (
    <Frame>
      <div className="bg-grey-bg">
        <div className="flex flex-col container mx-auto pb-10">
          <GamerHubInfo />
          <Tabs />
          <Content />
        </div>
      </div>
    </Frame>
  );
};

const PreIDO: NextPage = () => <PreIDOPage />;

export default PreIDO;
