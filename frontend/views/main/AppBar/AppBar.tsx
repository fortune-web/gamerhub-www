import Link from 'next/link';
import { useState } from 'react';
import WalletConnect from '../../../core/frame/ui/WalletConnect/WalletConnect';
import SearchInput from '../../../core/frame/ui/SearchInput/SearchInput';
import Coin from '../../../core/frame/ui/Coin/Coin';
import UserInfo from '../UserInfo/UserInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

const AppBar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="flex justify-between py-4 items-center">
      <SearchInput />
      <div className="flex items-center space-x-12">
        <Coin />
        <FontAwesomeIcon icon={faBell} className="text-grey-m_3 text-xl" />
        <WalletConnect />
        <UserInfo />
      </div>
    </div>
  );
};

export default AppBar;
