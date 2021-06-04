import auth from '@react-native-firebase/auth';

export default function getUserId() {
  const authUser = auth().currentUser;
  if (!authUser) {
    throw new Error('로그인이 필요합니다.');
  }

  return authUser.uid;
}
