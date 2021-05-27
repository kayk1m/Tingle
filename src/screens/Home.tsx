import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// styles
import { bgColor, textColor } from '@styles/color';
import layout from '@styles/layout';
import { font, text } from '@styles/text';

// types
import { PropsWithChildren } from 'types';

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

const App = () => {
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

export default App;
