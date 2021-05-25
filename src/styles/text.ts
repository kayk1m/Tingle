const EM = 16 as const;

/**
 * font-size
 * @see https://reactnative.dev/docs/text-style-props#fontsize
 */
export const text = {
  xs: { fontSize: 0.75 * EM, lineHeight: 1 * EM },
  sm: { fontSize: 0.875 * EM, lineHeight: 1.25 * EM },
  base: { fontSize: 1 * EM, lineHeight: 1.5 * EM },
  lg: { fontSize: 1.125 * EM, lineHeight: 1.75 * EM },
  xl: { fontSize: 1.25 * EM, lineHeight: 1.75 * EM },
  '2xl': { fontSize: 1.5 * EM, lineHeight: 2 * EM },
  '3xl': { fontSize: 1.875 * EM, lineHeight: 2.25 * EM },
  '4xl': { fontSize: 2.25 * EM, lineHeight: 2.5 * EM },
} as const;

/**
 * font-weight
 * @see https://reactnative.dev/docs/text-style-props#fontweight
 */
export const font = {
  light: { fontWeight: '300' },
  normal: { fontWeight: '400' },
  medium: { fontWeight: '500' },
  semibold: { fontWeight: '600' },
  bold: { fontWeight: '700' },
  extrabold: { fontWeight: '800' },
} as const;

/**
 * letter-spacing
 * @see https://reactnative.dev/docs/text-style-props#letterspacing
 */
export const spacing = {
  tighter: { letterSpacing: -0.05 * EM },
  tight: { letterSpacing: -0.025 * EM },
  normal: { letterSpacing: 0 },
  wide: { letterSpacing: 0.025 * EM },
  wider: { letterSpacing: 0.05 * EM },
  widest: { letterSpacing: 0.1 * EM },
} as const;
