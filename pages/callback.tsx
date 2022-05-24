import { NextPage } from 'next';
import { useEffect } from 'react';
import { magic } from '../frontend/lib/magic';
import { useRouter } from 'next/router';
import { Loading } from '../frontend/shared/ui/components/Loading';
import { RootRoutes } from '../frontend/shared/data/routes';

const Callback: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const backUrl = router.query['back'] ?? RootRoutes.explore.url;

      try {
        const decentralizedId = await magic.auth.loginWithCredential();

        if (decentralizedId) {
          router.push(`${backUrl}`);
        } else {
          throw new Error('User not logged in');
        }
      } catch (error) {
        console.log('Error: ', error);
        magic.user.logout().catch(console.log);
        router.push(RootRoutes.login.url);
      }
    })();
  }, [router]);

  return <Loading />;
};

export default Callback;
