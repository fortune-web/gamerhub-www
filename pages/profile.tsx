import React, { useCallback, useContext } from 'react';
import { magic } from '../frontend/lib/magic';
import { Frame } from '../frontend/core/frame/Frame';
import { UserProfileContext } from '../frontend/shared/contexts/UserProfileContext/UserProfileContext';

export default function Profile() {
  const userProfileContext = useContext(UserProfileContext);

  const logout = useCallback(async () => {
    await magic.user.logout();
    userProfileContext && userProfileContext.setProfile(undefined);
  }, [userProfileContext]);

  return (
    <Frame>
      <div className="container mb-5 mt-5">
        <h1>
          Current user email: {userProfileContext?.profile?.email ?? 'unknown'}
        </h1>
        <button className="btn def-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </Frame>
  );
}
