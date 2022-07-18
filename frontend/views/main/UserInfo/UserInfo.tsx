import User from '../../../shared/assets/img/user.png';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export interface IUserInfo {}

const UserInfo: React.FC<IUserInfo> = () => {
  return (
    <div className="flex items-center text-grey-m_3 space-x-2">
      <Image src={User} width={40} height={40} />
      <div>
        <span className="body2">Gamer 1</span>
        <div className="flex items-center">
          <span className="caption2 mr-1">Top Gamer</span>
          <FontAwesomeIcon icon={faStar} className="text-yellow-main text-xs" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-main text-xs" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-main text-xs" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-main text-xs" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-main text-xs" />
        </div>
      </div>
      <FontAwesomeIcon icon={faCaretDown} className="text-grey-m_3" />
    </div>
  );
};

export default UserInfo;
