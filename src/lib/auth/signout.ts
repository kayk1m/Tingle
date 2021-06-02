import auth from '@react-native-firebase/auth';
// import { setRoot } from 'react-native-navigation-hooks/dist';
// import { signinRoot } from 'routes';
// import { removeToken } from '@lib/token';

export default async function signout() {
  await auth().signOut();
}

// export async function signout() {
//   await removeToken();

//   setRoot(signinRoot);
// }
