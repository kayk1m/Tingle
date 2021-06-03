import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { UserDataInput } from 'types/user';

export default async function updateUserData(data: Partial<UserDataInput>) {
  const authUser = auth().currentUser;
  if (!authUser) {
    throw new Error('로그인이 필요합니다.');
  }

  return await firestore().collection('user').doc(authUser.uid).update(data);
}
