import { useEffect, useState } from 'react';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { setRoot } from 'react-native-navigation-hooks/dist';

import { registrationRoot } from '../../routes';
import getUserData from '@lib/user/getUserData';

import { UserData } from '~/types/user';

export interface User extends FirebaseAuthTypes.User {
  displayName: string;
}

export default function useUser() {
  const [userData, setUserData] = useState<UserData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserData()
      .then((data) => setUserData(data))
      .catch(() => {
        setRoot(registrationRoot);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { user: userData, loading };
}
