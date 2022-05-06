import { NextPage } from 'next';
import { useCallback, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { magic } from '../frontend/lib/magic';
import { Frame } from '../frontend/core/frame/Frame';
import { Login } from '../frontend/views/auth/Login/Login';
import { Loading } from '../frontend/shared/ui/components/Loading';
import { RootRoutes } from '../frontend/shared/data/routes';

export interface LoginData {
  email: string;
}

const LoginPage: NextPage = () => {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      if (pageLoading) {
        setUserIsLoggedIn(await magic.user.isLoggedIn());
        setPageLoading(false);
      }
    })();
  }, [pageLoading]);

  const login = useCallback(
    async (data: LoginData) => {
      setIsLoggingIn(true);

      try {
        await magic.auth.loginWithMagicLink({
          ...data,
          redirectURI: new URL(
            RootRoutes.loginCallback.url,
            window.location.origin
          ).href,
        });
        router.push(RootRoutes.explore.url);
      } catch {
        setIsLoggingIn(false);
      }
    },
    [router]
  );

  if (userIsLoggedIn) {
    router.push(RootRoutes.explore.url);
    return null;
  }

  return (
    <Frame>
      {!pageLoading ? (
        <Login isDisabled={isLoggingIn} handleLoginClick={login} />
      ) : (
        <Loading />
      )}
    </Frame>
  );
};

export default LoginPage;
