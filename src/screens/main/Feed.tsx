import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';

// styles
import { bgColor, flex, font, layout, text, textColor } from '@styles/index';
import { Avatar, Button } from 'react-native-elements';

const FeedScreen: NavigationFunctionComponent = () => {
  return (
    <SafeAreaView style={[flex.flex1]}>
      <View
        style={[
          layout.height(200),
          bgColor.GRAY[50],
          layout.px(16),
          layout.py(12),
        ]}>
        <Text style={[text.lg, textColor.GRAY[700]]}>새 여행</Text>
        <View
          style={[
            flex.flex1,
            bgColor.GRAY[100],
            flex.row,
            flex.justifyAround,
            flex.itemsCenter,
          ]}>
          <Avatar
            size="large"
            rounded
            title="K"
            containerStyle={[bgColor.GRAY[300]]}
          />
          <Button
            title="새 여행 추가"
            containerStyle={[layout.rounded(6)]}
            buttonStyle={[layout.px(16), layout.py(8)]}
            titleStyle={[text.base, font.medium]}
          />
        </View>
      </View>
      <Text style={text['2xl']}>FeedScreen</Text>
    </SafeAreaView>
  );
};

FeedScreen.options = {
  topBar: {
    title: {
      text: '동행찾기',
    },
  },
};

export default FeedScreen;
