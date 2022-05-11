import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Frame } from '../frontend/core/frame/Frame';
import { magic } from '../frontend/lib/magic';
import { Games } from '../frontend/views/explore/ui/Games/Games';
import { Segments } from '../frontend/views/explore/ui/Segments/Segments';
import { Loading } from '../frontend/shared/ui/components/Loading';
import { useRouter } from 'next/router';
import { RootRoutes } from '../frontend/shared/data/routes';

const Explore: NextPage = () => {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(true);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  //TODO: move this to context
  useEffect(() => {
    (async () => {
      if (pageLoading) {
        setUserIsLoggedIn(await magic.user.isLoggedIn());
        setPageLoading(false);
      }
    })();
  }, [pageLoading]);

  if (!pageLoading && !userIsLoggedIn) {
    router.push(RootRoutes.login.url);
    return null;
  }

  return (
    <Frame>
      {userIsLoggedIn ? (
        <div className="games game-page">
          <div className="container">
            <div className="row">
              <Segments />
              <Games />
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </Frame>
  );
};

export default Explore;
