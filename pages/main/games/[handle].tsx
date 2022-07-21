import { NextPageWithLayout } from '../../page';
import MainApplicationLayout from '../../../frontend/core/frame/ui/MainApplicationLayout/MainApplicationLayout';
import Gamerhub from '../../../frontend/views/main/Gamerhub/Gamerhub';
import { useRouter } from 'next/router';

export const GamesPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { handle } = router.query;

  return (
    <div className="flex flex-col mx-auto pb-10">
      <Gamerhub handle={handle?.toString()} />
    </div>
  );
};

export default GamesPage;

GamesPage.getLayout = (page) => {
  return <MainApplicationLayout>{page}</MainApplicationLayout>;
};
