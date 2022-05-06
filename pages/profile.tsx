import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { magic } from '../frontend/lib/magic';
import { MagicUserMetadata } from 'magic-sdk';
import { Frame } from '../frontend/core/frame/Frame';
import { Loading } from '../frontend/shared/ui/components/Loading';
import { RootRoutes } from '../frontend/shared/data/routes';

export default function Profile() {
  const [userMetadata, setUserMetadata] = useState<MagicUserMetadata>();
  const router = useRouter();

  useEffect(() => {
    magic.user.isLoggedIn().then((magicIsLoggedIn) => {
      if (magicIsLoggedIn) {
        magic.user.getMetadata().then(setUserMetadata);
      } else {
        router.push(RootRoutes.login.url);
      }
    });
  }, [router]);

  const logout = useCallback(() => {
    magic.user.logout().then(() => {
      router.push(RootRoutes.login.url);
    });
  }, [router]);

  return (
    <Frame>
      {userMetadata ? (
        <div className="container">
          <h1>Current user: {userMetadata.email}</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <Loading />
      )}
    </Frame>
  );
}
