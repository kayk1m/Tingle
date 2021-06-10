import auth from '@react-native-firebase/auth';
import { setRoot } from 'react-native-navigation-hooks';

import { signinRoot } from '~/routes';

export default async function signout() {
  await auth().signOut();
  setRoot(signinRoot);
}
