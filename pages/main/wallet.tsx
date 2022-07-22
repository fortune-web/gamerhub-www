import Wallet from '../../frontend/views/main/Wallet/Wallet';
import { NextPageWithLayout } from '../page';
import MainApplicationLayout from '../../frontend/core/frame/ui/MainApplicationLayout/MainApplicationLayout';

export const WalletPage: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col mx-auto pb-10">
      <Wallet />
    </div>
  );
};

export default WalletPage;

WalletPage.getLayout = (page) => {
  return <MainApplicationLayout>{page}</MainApplicationLayout>;
};
