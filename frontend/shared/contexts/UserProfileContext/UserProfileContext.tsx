import { createContext } from 'react';

export interface UserProfile {
  decentralizedId: string | null;
  email?: string | null;
}

export const UserProfileContext = createContext<UserProfile | undefined>({
  decentralizedId: null,
});
