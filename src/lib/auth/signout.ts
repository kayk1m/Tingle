import auth from '@react-native-firebase/auth';

export default async function signout() {
  await auth().signOut();
}
