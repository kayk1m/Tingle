/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import { withNavigationProvider } from 'react-native-navigation-hooks';
import { mainRoot } from './src/routes';

// screens
import Home from '@screens/Home';

Navigation.registerComponent('Home', () => withNavigationProvider(Home));

Navigation.setDefaultOptions({
  layout: {
    orientation: ['portrait'],
  },
  topBar: {
    visible: false,
  },
  bottomTabs: {
    backgroundColor: 'whitesmoke',
  },
  bottomTab: {
    textColor: 'gray',
    selectedTextColor: 'black',
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(mainRoot);
});