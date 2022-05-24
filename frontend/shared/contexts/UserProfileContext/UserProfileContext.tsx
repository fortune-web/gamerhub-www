import { Dispatch, createContext, SetStateAction } from 'react';

export interface UserProfile {
  decentralizedId: string | null;
  email?: string | null;
}

type UserProfileContextType = {
  profile?: UserProfile;
  setProfile: Dispatch<SetStateAction<UserProfile | undefined>>;
};

export const UserProfileContext = createContext<
  UserProfileContextType | undefined
>({
  profile: {
    decentralizedId: null,
  },
  setProfile: () => null,
});
