import { NextPageWithLayout } from '../page';
import MainApplicationLayout from '../../frontend/core/frame/ui/MainApplicationLayout/MainApplicationLayout';
import Games from '../../frontend/views/main/Games/Games';
export const GamesPage: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col mx-auto pb-10">
      <Games />
    </div>
  );
};

export default GamesPage;

GamesPage.getLayout = (page) => {
  return <MainApplicationLayout>{page}</MainApplicationLayout>;
};
