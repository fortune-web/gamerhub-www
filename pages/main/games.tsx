import HomeSlider from '../../frontend/views/main/HomeSlider/HomeSlider';
import HomeGames from '../../frontend/views/main/HomeGames/HomeGames';
import { NextPageWithLayout } from '../page';
import MainApplicationLayout from '../../frontend/core/frame/ui/MainApplicationLayout/MainApplicationLayout';

export const GamesPage: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col mx-auto pb-10">
      <h1>GAMES</h1>
    </div>
  );
};

export default GamesPage;

GamesPage.getLayout = (page) => {
  return <MainApplicationLayout>{page}</MainApplicationLayout>;
};
