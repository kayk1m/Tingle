import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';

// styles
import { flex, text } from '@styles/index';

const FeedScreen: NavigationFunctionComponent = () => {
  return (
    <SafeAreaView style={[flex.flex1, flex.justifyCenter]}>
      <Text style={text['2xl']}>FeedScreen</Text>
    </SafeAreaView>
  );
};

export default FeedScreen;
