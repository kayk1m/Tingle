import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

import getAuthUser from './getAuthUser';
import createUserData from './createUserData';

// types
import { UserData } from '~/types/user';

interface GetUserDataOptions {
  force?: boolean;
}

export default async function getUserData(
  uid?: string,
  options?: GetUserDataOptions,
): Promise<UserData> {
  const userId = uid ?? getAuthUser().uid;

  if (!options?.force) {
    const dataString = await AsyncStorage.getItem(`@uid-${userId}`);
    if (dataString !== null) {
      // TODO: validation
      return JSON.parse(dataString);
    }
  }

  const user = await firestore().collection('user').doc(userId).get();

  if (!user.exists) {
    // throw new Error('로그인이 필요합니다.');
    const { phoneNumber } = getAuthUser();
    if (!phoneNumber) {
      throw new Error(
        '휴대폰 번호가 등록되어 있지 않습니다. 다시 로그인해주세요.',
      );
    }
    return await createUserData(phoneNumber);
  }

  const userData = user.data();
  if (!userData) {
    throw new Error('유저 데이터가 존재하지 않습니다.');
  }

  return userData as UserData;
}
