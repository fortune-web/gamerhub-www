import { FC, useEffect, useState } from 'react';
import { UserProfileContext, UserProfile } from './UserProfileContext';
import { magic } from '../../../lib/magic';
import { Loading } from '../../ui/components/Loading';
import { RootRoutes } from '../../data/routes';
import { useRouter } from 'next/router';

export const UserProfileProvider: FC = ({ children }) => {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(true);
  const [userProfileContext, setUserProfileContext] = useState<UserProfile>();

  useEffect(() => {
    (async () => {
      const userIsLoggedIn = await magic.user.isLoggedIn();

      if (userIsLoggedIn) {
        const { email } = await magic.user.getMetadata();
        const decentralizedId = await magic.user.getIdToken();

        setUserProfileContext({ decentralizedId, email });
      }
      setPageLoading(false);
    })();
  });

  if (pageLoading) {
    return <Loading />;
  }

  if (!userProfileContext) {
    if (!router.pathname.includes(RootRoutes.login.url)) {
      router.push(`${RootRoutes.login.url}?back=${router.pathname}`);
      return null;
    }
  }

  return (
    <UserProfileContext.Provider value={userProfileContext}>
      {children}
    </UserProfileContext.Provider>
  );
};
