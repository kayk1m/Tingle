import firestore from '@react-native-firebase/firestore';

import getUserId from './getUserId';

// types
import { UserData } from 'types/user';

export default async function getUserData(uid?: string): Promise<UserData> {
  const userId = uid ?? getUserId();

  const user = await firestore().collection('user').doc(userId).get();

  if (!user.exists) {
    throw new Error('로그인이 필요합니다.');
  }

  const userData = user.data();
  if (!userData) {
    throw new Error('유저 데이터가 존재하지 않습니다.');
  }

  return userData as UserData;
}
