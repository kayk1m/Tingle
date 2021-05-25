import { ColorValue, TextStyle, ViewStyle } from 'react-native';
import COLORS, {
  COLOR_VARIANTS,

  // types
  ColorKey,
  ColorVariant,
} from '@defines/COLORS';

function mapColors<T extends TextStyle | ViewStyle>(
  colorVariant: ColorVariant,
  mapFn: (value: ColorValue) => T,
): { [Key in ColorKey]: T } {
  return Object.fromEntries(
    Object.entries(COLORS[colorVariant]).map(([k, v]) => [k, mapFn(v)]),
  ) as { [Key in ColorKey]: T };
}

export const textColor = Object.fromEntries(
  COLOR_VARIANTS.map(variant => [
    variant,
    mapColors<TextStyle>(variant, val => ({ color: val })),
  ]),
) as { [Key in ColorVariant]: { [Key in ColorKey]: { color: ColorValue } } };

export const bgColor = Object.fromEntries(
  COLOR_VARIANTS.map(variant => [
    variant,
    mapColors<ViewStyle>(variant, val => ({ backgroundColor: val })),
  ]),
) as {
  [Key in ColorVariant]: { [Key in ColorKey]: { backgroundColor: ColorValue } };
};

export const borderColor = Object.fromEntries(
  COLOR_VARIANTS.map(variant => [
    variant,
    mapColors<ViewStyle>(variant, val => ({ borderColor: val })),
  ]),
) as {
  [Key in ColorVariant]: { [Key in ColorKey]: { borderColor: ColorValue } };
};
