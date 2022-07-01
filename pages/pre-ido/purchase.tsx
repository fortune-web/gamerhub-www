import { NextPage } from 'next';
import { Frame } from '../../frontend/core/frame/Frame';
import PurchaseInfo from '../../frontend/views/ido/PurchaseInfo/PurchaseInfo';
import DepositDialog from '../../frontend/views/ido/DepositDialog/DepositDialog';

export const PurchaseCore: NextPage = () => {
  return (
    <Frame>
      <div className="bg-grey-bg">
        <div className="flex flex-col container mx-auto pb-10">
          <PurchaseInfo />
          <DepositDialog />
        </div>
      </div>
    </Frame>
  );
};

const PurchaseMain: NextPage = () => {
  return <PurchaseCore />;
};

export default PurchaseMain;
