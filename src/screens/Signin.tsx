import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';

// styles
import flex from '@styles/flex';

const SigninScreen: NavigationFunctionComponent = () => {
  return (
    <SafeAreaView style={[flex.flex1, flex.justifyCenter, flex.itemsCenter]}>
      <Text>hello world</Text>
    </SafeAreaView>
  );
};

SigninScreen.options = {
  topBar: {
    visible: true,
    title: {
      text: 'Signin',
    },
  },
};

export default SigninScreen;
