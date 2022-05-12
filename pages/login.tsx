import { NextPage } from 'next';
import { useCallback, useState } from 'react';
import { magic } from '../frontend/lib/magic';
import { Frame } from '../frontend/core/frame/Frame';
import { Login } from '../frontend/views/auth/Login/Login';
import { RootRoutes } from '../frontend/shared/data/routes';
import { UserProfileProvider } from '../frontend/shared/contexts/UserProfileContext/UserProfileProvider';

export interface LoginData {
  email: string;
}

const LoginPage: NextPage = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const login = useCallback(async (data: LoginData) => {
    setIsLoggingIn(true);

    try {
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
    <UserProfileProvider>
      <Frame>
        <Login isDisabled={isLoggingIn} handleLoginClick={login} />
      </Frame>
    </UserProfileProvider>
  );
};

export default LoginPage;
