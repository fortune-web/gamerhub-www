import { NextPage } from 'next';
import { useCallback, useState } from 'react';
import { magic } from '../frontend/lib/magic';
import { Frame } from '../frontend/core/frame/Frame';
import { Login } from '../frontend/views/auth/Login/Login';
import { RootRoutes } from '../frontend/shared/data/routes';

export interface LoginData {
  email: string;
}

const LoginPage: NextPage = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const login = useCallback(async (data: LoginData) => {
    try {
      setIsLoggingIn(true);

      await magic.auth.loginWithMagicLink({
        ...data,
        redirectURI: new URL(
          RootRoutes.loginCallback.url,
          window.location.origin
        ).href,
      });
    } finally {
      setIsLoggingIn(false);
    }
  }, []);

  return (
    <Frame>
      <Login isDisabled={isLoggingIn} handleLoginClick={login} />
    </Frame>
  );
};

export default LoginPage;
