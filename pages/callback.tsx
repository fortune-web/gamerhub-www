import { NextPage } from 'next';
import { useEffect, useCallback } from 'react';
import { magic } from '../frontend/lib/magic';
import { useRouter } from 'next/router';
import { Loading } from '../frontend/shared/ui/components/Loading';
import { RootRoutes } from '../frontend/shared/data/routes';

const Callback: NextPage = () => {
  const router = useRouter();

  const magicCredential = router.query['magic_credential'] as string;
  const backUrl = (router.query['back'] as string) ?? RootRoutes.explore.url;

  useEffect(() => {
    (async () => {
      try {
        const decentralizedId = await magic.auth.loginWithCredential(
          magicCredential
        );

        if (decentralizedId) {
          window.location.assign(backUrl);
        } else {
          throw new Error('User not logged in');
        }
      } catch (error) {
        console.log('Error: ', error);
        magic.user.logout().catch(console.log);
        window.location.assign(RootRoutes.login.url);
      }
    })();
  }, [magicCredential, backUrl]);

  return <Loading />;
};

export default Callback;
