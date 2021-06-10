import React from 'react';
import { View, Text } from 'react-native';

// styles
import { flex, text, textColor } from '@styles/index';

export default function Loading() {
  return (
    <View style={[flex.flex1, flex.justifyCenter]}>
      <Text style={[text['2xl'], textColor.white, text.center]}>Tingle</Text>
    </View>
  );
}
