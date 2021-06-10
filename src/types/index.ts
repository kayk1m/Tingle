import { ReactNode } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type PropsWithChildren<T, V extends ViewStyle | TextStyle = ViewStyle> =
  T & Partial<{ children: ReactNode; style: StyleProp<V> }>;

export type WithId<T> = T & { id: string };

export {};
