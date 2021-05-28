import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import {
  useNavigation,
  useNavigationButtonPress,
} from 'react-native-navigation-hooks';

import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// styles
import { layout, font, text, bgColor, textColor } from '@styles/index';

// types
import { PropsWithChildren } from 'types/index';

const Section = ({ children, title }: PropsWithChildren<{ title: string }>) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={[layout.mt(32), layout.px(24)]}>
      <Text
        style={[
          text['2xl'],
          font.semibold,
          isDarkMode ? textColor.white : textColor.black,
        ]}>
        {title}
      </Text>
      <Text
        style={[
          layout.mt(8),
          text.lg,
          isDarkMode ? textColor.GRAY[100] : textColor.GRAY[700],
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: NavigationFunctionComponent = () => {
  const { push } = useNavigation();
  useNavigationButtonPress(() => push('Profile'), {
    buttonId: 'openProfileScreen',
  });
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = isDarkMode ? bgColor.GRAY[800] : bgColor.GRAY[50];

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View style={isDarkMode ? bgColor.black : bgColor.white}>
          <Section title="Step One">
            Edit <Text style={font.bold}>App.js</Text> to change this screen and
            then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

App.options = {
  topBar: {
    rightButtons: [
      {
        id: 'openProfileScreen',
        text: 'Profile',
      },
    ],
  },
};

export default App;
