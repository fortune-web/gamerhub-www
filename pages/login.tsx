import { NextPage } from 'next';
import { useCallback, useState } from 'react';
import { magic } from '../frontend/lib/magic';
import { Frame } from '../frontend/core/frame/Frame';
import { Login } from '../frontend/views/auth/Login/Login';
import { RootRoutes } from '../frontend/shared/data/routes';
import { useRouter } from 'next/router';

export interface LoginData {
  email: string;
}

const LoginPage: NextPage = () => {
  const router = useRouter();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  let callBackUrl = RootRoutes.loginCallback.url;
  const backUrl = router.query['back'] as string;

  if (backUrl) {
    callBackUrl = `${callBackUrl}?back=${backUrl}`;
  }

  const login = useCallback(
    async (data: LoginData) => {
      setIsLoggingIn(true);

      await magic.auth.loginWithMagicLink({
        ...data,
        redirectURI: new URL(callBackUrl, window.location.origin).href,
      });

      setIsLoggingIn(false);
    },
    [callBackUrl]
  );

  return (
    <Frame>
      <Login isDisabled={isLoggingIn} handleLoginClick={login} />
    </Frame>
  );
};

export default LoginPage;
