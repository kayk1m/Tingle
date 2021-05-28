/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import { withNavigationProvider } from 'react-native-navigation-hooks';

// routes
import { mainRoot, signinRoot } from 'routes';

// screens
import Home from '@screens/Home';
import Signin from '@screens/Signin';
import Profile from '@screens/Profile';

// libraries
import { checkSignedIn } from '@lib/auth/checkSignedIn';

// definitions
import COLORS from '@defines/COLORS';

Navigation.registerComponent('Home', () => withNavigationProvider(Home));
Navigation.registerComponent('Signin', () => withNavigationProvider(Signin));
Navigation.registerComponent('Profile', () => withNavigationProvider(Profile));

Navigation.setDefaultOptions({
  layout: {
    orientation: ['portrait'],
  },
  bottomTabs: {
    backgroundColor: COLORS.GRAY[50],
  },
  bottomTab: {
    textColor: 'gray',
    selectedTextColor: 'black',
  },
});

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot((await checkSignedIn()) ? mainRoot : signinRoot);
});
