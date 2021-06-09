import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
// types
import { UserData } from '~/types/user';
import getUserData from './getUserData';

export default async function saveUserData(data?: UserData) {
  const authUser = auth().currentUser;
  if (!authUser) {
    throw new Error('로그인이 필요합니다.');
  }

  const userData = data ?? (await getUserData(authUser.uid));

  await AsyncStorage.setItem(`@uid-${authUser.uid}`, JSON.stringify(userData));
}
