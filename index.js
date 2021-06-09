/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import { setRoot, withNavigationProvider } from 'react-native-navigation-hooks';
import auth from '@react-native-firebase/auth';

// routes
import { mainRoot, registrationRoot, signinRoot } from 'routes';

// screens
import {
  BoardListScreen,
  ChatListScreen,
  FeedScreen,
  HomeScreen,
  MenuScreen,
  ProfileScreen,
} from '@screens/main';
import { UserDataRegistrationScreen } from '@screens/registration';
import { PhoneAuthScreen } from '@screens/signin';

// libraries
import checkUserData from '@lib/user/checkUserData';

// definitions
import COLORS from '@defines/COLORS';

/**
 * registering screen components
 */
Navigation.registerComponent('BoardList', () =>
  withNavigationProvider(BoardListScreen),
);
Navigation.registerComponent('ChatList', () =>
  withNavigationProvider(ChatListScreen),
);
Navigation.registerComponent('Feed', () => withNavigationProvider(FeedScreen));
Navigation.registerComponent('Home', () => withNavigationProvider(HomeScreen));
Navigation.registerComponent('Menu', () => withNavigationProvider(MenuScreen));
Navigation.registerComponent('Profile', () =>
  withNavigationProvider(ProfileScreen),
);
Navigation.registerComponent('UserDataRegistration', () =>
  withNavigationProvider(UserDataRegistrationScreen),
);
Navigation.registerComponent('PhoneAuth', () =>
  withNavigationProvider(PhoneAuthScreen),
);

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
  const authUser = auth().currentUser;

  if (authUser === null) {
    return setRoot(signinRoot);
  }

  if (await checkUserData()) {
    return setRoot(mainRoot);
  }

  return setRoot(registrationRoot);
});
