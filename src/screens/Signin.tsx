import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';

const SigninScreen: NavigationFunctionComponent = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>hello world</Text>
      </View>
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
