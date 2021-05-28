import { setRoot } from 'react-native-navigation-hooks/dist';
import { signinRoot } from 'routes';
import { removeToken } from '@lib/token';

export async function signout() {
  await removeToken();

  setRoot(signinRoot);
}
