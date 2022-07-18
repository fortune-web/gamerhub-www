import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import CoinIcon from '../../../../shared/assets/icon/coin.png';

export interface ICoin {}

const Coin: React.FC<ICoin> = () => {
  return (
    <div className="flex items-center text-grey-m_4 space-x-3">
      <Image src={CoinIcon} />
      <span>10K</span>
      <FontAwesomeIcon icon={faPlus} className="text-grey-m_2 text-xl" />
    </div>
  );
};

export default Coin;
