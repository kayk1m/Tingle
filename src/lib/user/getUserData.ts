import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// types
import { UserData } from 'types/user';

export default async function getUserData(uid?: string): Promise<UserData> {
  let userId = uid;

  if (!userId) {
    const authUser = auth().currentUser;
    if (!authUser) {
      throw new Error('로그인이 필요합니다.');
    }

    userId = authUser.uid;
  }

  const user = await firestore().collection('user').doc(uid).get();

  if (!user.exists) {
    throw new Error('로그인이 필요합니다.');
  }

  const userData = user.data();
  if (!userData) {
    throw new Error('유저 데이터가 존재하지 않습니다.');
  }

  return userData as UserData;
}
