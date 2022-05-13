import { NextPage } from 'next';
import { useEffect } from 'react';
import { magic } from '../frontend/lib/magic';
import { useRouter } from 'next/router';
import { Loading } from '../frontend/shared/ui/components/Loading';
import { RootRoutes } from '../frontend/shared/data/routes';

const Callback: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    magic.auth
      .loginWithCredential()
      .then((decentralizedId) => {
        if (decentralizedId) {
          router.query['back']
            ? router.push(`${router.query['back']}`)
            : router.push(RootRoutes.explore.url);
        } else throw new Error('User not logged in');
      })
      .catch(() => {
        router.push(RootRoutes.login.url);
      });
  }, [router]);

  return <Loading />;
};

export default Callback;
