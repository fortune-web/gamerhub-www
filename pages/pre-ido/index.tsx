import { NextPage } from 'next';
import { Frame } from '../../frontend/core/frame/Frame';
import { Games } from '../../frontend/views/explore/container/Games/Games';
import { Segments } from '../../frontend/views/explore/container/Segments/Segments';
import { useRouter } from 'next/router';
import { RootRoutes } from '../../frontend/shared/data/routes';
import { NewReleases } from '../../frontend/views/explore/container/Games/NewReleases';
import { Trending } from '../../frontend/views/explore/container/Games/Trending';
import { MostPopular } from '../../frontend/views/explore/container/Games/MostPopular';
import About from '../../frontend/views/ido/About/About';
import Roadmap from '../../frontend/views/ido/Roadmap//Roadmap';

export const PreIDOPage: NextPage = () => {
  const { asPath: fullPath } = useRouter();

  let GamesToShow = Games;

  switch (fullPath) {
    case RootRoutes.exploreTrending.url:
      GamesToShow = Trending;
      break;
    case RootRoutes.exploreNewReleases.url:
      GamesToShow = NewReleases;
      break;
    case RootRoutes.exploreMostPopular.url:
      GamesToShow = MostPopular;
      break;
    default:
      break;
  }

  return (
    <Frame>
      <div className="container bg-grey-bg">
        <div className="flex container mx-auto">
          <About />
          <Roadmap />
        </div>
      </div>
      {/* <GamesToShow /> */}
    </Frame>
  );
};

const PreIDO: NextPage = () => <PreIDOPage />;

export default PreIDO;
