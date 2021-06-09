import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { initialUserDataInput, UserData } from '~/types/user';

export default async function createUserData(
  phoneNum: string,
): Promise<UserData> {
  const authUser = auth().currentUser;
  if (!authUser) {
    throw new Error('로그인이 필요합니다.');
  }

  const newUserData = {
    ...initialUserDataInput,
    phoneNum,
    created: new Date(),
    lastUpdated: null,
  };

  await firestore().collection('user').doc(authUser.uid).set(newUserData);

  return (
    await firestore().collection('user').doc(authUser.uid).get()
  ).data() as UserData;
}
