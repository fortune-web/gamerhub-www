import HomeSlider from '../../frontend/views/main/HomeSlider/HomeSlider';
import HomeGames from '../../frontend/views/main/HomeGames/HomeGames';
import { NextPageWithLayout } from '../page';
import MainApplicationLayout from '../../frontend/core/frame/ui/MainApplicationLayout/MainApplicationLayout';

export const MainPage: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col mx-auto pb-10">
      <HomeSlider />
      <HomeGames />
    </div>
  );
};

export default MainPage;

MainPage.getLayout = (page) => {
  return <MainApplicationLayout>{page}</MainApplicationLayout>;
};
