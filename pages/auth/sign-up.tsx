import type { NextPage } from 'next';
import { Topbar } from '../../frontend/core/frame/ui/Topbar/Topbar';
import Signup from '../../frontend/views/auth/Signup/Signup';

const SignupPage: NextPage = () => {
  return (
    <div>
      <Topbar />
      <Signup />
    </div>
  );
};

export default SignupPage;
