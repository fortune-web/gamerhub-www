import type { NextPage } from 'next';
import { Topbar } from '../../frontend/core/frame/ui/Topbar/Topbar';
import Profile from '../../frontend/views/auth/Profile/Profile';

const ProfilePage: NextPage = () => {
  return (
    <div>
      <Topbar />
      <Profile />
    </div>
  );
};

export default ProfilePage;
