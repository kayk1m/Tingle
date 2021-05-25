import { ColorValue, TextStyle, ViewStyle } from 'react-native';
import COLORS, {
  COLOR_VARIANTS,

  // types
  ColorKey,
  ColorVariant,
  NAMED_COLORS,
  NamedColor,
} from '@defines/COLORS';

function mapColors<T extends TextStyle | ViewStyle>(
  colorVariant: ColorVariant,
  mapFn: (value: ColorValue) => T,
): { [Key in ColorKey]: T } {
  return Object.fromEntries(
    Object.entries(COLORS[colorVariant]).map(([k, v]) => [k, mapFn(v)]),
  ) as { [Key in ColorKey]: T };
}

export const textColor = Object.fromEntries([
  ...COLOR_VARIANTS.map(variant => [
    variant,
    mapColors<TextStyle>(variant, val => ({ color: val })),
  ]),
  NAMED_COLORS.map(color => [color, { color }]),
]) as { [Key in ColorVariant]: { [Key in ColorKey]: { color: ColorValue } } } &
  { [Key in NamedColor]: { color: ColorValue } };

export const bgColor = Object.fromEntries([
  ...COLOR_VARIANTS.map(variant => [
    variant,
    mapColors<ViewStyle>(variant, val => ({ backgroundColor: val })),
  ]),
  NAMED_COLORS.map(color => [color, { backgroundColor: color }]),
]) as {
  [Key in ColorVariant]: {
    [Key in ColorKey]: { backgroundColor: ColorValue };
  };
} &
  { [Key in NamedColor]: { backgroundColor: ColorValue } };

export const borderColor = Object.fromEntries([
  ...COLOR_VARIANTS.map(variant => [
    variant,
    mapColors<ViewStyle>(variant, val => ({ borderColor: val })),
  ]),
  NAMED_COLORS.map(color => [color, { borderColor: color }]),
]) as {
  [Key in ColorVariant]: { [Key in ColorKey]: { borderColor: ColorValue } };
} &
  { [Key in NamedColor]: { borderColor: ColorValue } };
