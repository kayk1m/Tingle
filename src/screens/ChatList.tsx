import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';

// styles
import { flex, text } from '@styles/index';

const ChatListScreen: NavigationFunctionComponent = () => {
  return (
    <SafeAreaView style={[flex.flex1, flex.justifyCenter]}>
      <Text style={text['2xl']}>ChatListScreen</Text>
    </SafeAreaView>
  );
};

export default ChatListScreen;
