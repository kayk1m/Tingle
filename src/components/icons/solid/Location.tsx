import React from 'react';
import { ViewStyle } from 'react-native';
import { Path, Svg } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
  style?: ViewStyle;
}
export default function Location({
  size = 24,
  color = 'black',
  ...props
}: Props) {
  return (
    <Svg
      width={size}
      height={size}
      color={color}
      viewBox="0 0 20 20"
      {...props}>
      <Path
        fillRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
