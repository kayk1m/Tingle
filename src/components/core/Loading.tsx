import React from 'react';
import { View, Text } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';

// styles
import { flex, text, textColor } from '@styles/index';

const LoadingScreen: NavigationFunctionComponent = () => {
  return (
    <View style={[flex.flex1, flex.justifyCenter]}>
      <Text style={[text['2xl'], textColor.white, text.center]}>Tingle</Text>
    </View>
  );
};

LoadingScreen.options = {
  topBar: {
    visible: false,
  },
};

export default LoadingScreen;
