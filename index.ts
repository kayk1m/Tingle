/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import { withNavigationProvider } from 'react-native-navigation-hooks';

// routes
import { mainRoot } from 'routes';

// screens
import Home from '@screens/Home';
import Signin from '@screens/Signin';
import Profile from '@screens/Profile';
import ChatList from '@screens/ChatList';
import BoardList from '@screens/BoardList';
import Menu from '@screens/Menu';

// libraries
// import { checkSignedIn } from '@lib/auth/checkSignedIn';

// definitions
import COLORS from '@defines/COLORS';

Navigation.registerComponent('Home', () => withNavigationProvider(Home));
Navigation.registerComponent('Signin', () => withNavigationProvider(Signin));
Navigation.registerComponent('Profile', () => withNavigationProvider(Profile));
Navigation.registerComponent('ChatList', () =>
  withNavigationProvider(ChatList),
);
Navigation.registerComponent('BoardList', () =>
  withNavigationProvider(BoardList),
);
Navigation.registerComponent('Menu', () => withNavigationProvider(Menu));

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

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(mainRoot);
});
