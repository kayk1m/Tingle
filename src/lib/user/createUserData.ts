import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { initialUserDataInput } from 'types/user';

export default async function createUserData(phoneNum: string) {
  const authUser = auth().currentUser;
  if (!authUser) {
    throw new Error('로그인이 필요합니다.');
  }

  return await firestore()
    .collection('user')
    .doc(authUser.uid)
    .set({
      ...initialUserDataInput,
      birthYear: null,
      phoneNum,
    });
}
