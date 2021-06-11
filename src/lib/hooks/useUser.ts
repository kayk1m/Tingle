import { useCallback, useEffect, useState } from 'react';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { setRoot } from 'react-native-navigation-hooks/dist';
import firestore from '@react-native-firebase/firestore';

import { registrationRoot } from '~/routes';
import { RegisteredUserData, UserData } from '~/types/user';
import getAuthUser from '../user/getAuthUser';

export interface User extends FirebaseAuthTypes.User {
  displayName: string;
}

export default function useUser() {
  const [userData, setUserData] = useState<RegisteredUserData>();
  const [loading, setLoading] = useState(true);

  const refreshData = useCallback((data: UserData) => {
    setLoading(true);
    try {
      if (data.gender === null) {
        throw new Error('성별이 없습니다.');
      }
      if (data.birthYear === null) {
        throw new Error('출생연도가 없습니다.');
      }
      if (data.lastUpdated === null) {
        throw new Error('에러 발생');
      }
      console.log(data.profileUrl);
      setUserData(data as RegisteredUserData);
    } catch (err) {
      console.log('getUserData error:', err);
      setRoot(registrationRoot);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const subscriber = firestore()
      .collection('user')
      .doc(getAuthUser().uid)
      .onSnapshot(async (snapshot) => {
        const data = snapshot.data();
        if (!data) {
          return;
        }
        refreshData(data as UserData);
      });

    return () => subscriber();
  }, [refreshData]);

  return { user: userData, loading, refresh: refreshData };
}
