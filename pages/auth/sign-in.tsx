import type { NextPage } from 'next';
import { Topbar } from '../../frontend/core/frame/ui/Topbar/Topbar';
import Signin from '../../frontend/views/auth/Signin/Signin';

const SigninPage: NextPage = () => {
  return (
    <div>
      <Topbar />
      <Signin />
    </div>
  );
};

export default SigninPage;
