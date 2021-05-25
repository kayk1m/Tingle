type LayoutValue = number | undefined;
type LayoutValueWithString = LayoutValue | string;

const layout = {
  /**
   * display hidden, flex
   * @description sets the display type of this component.
   * @see https://reactnative.dev/docs/layout-props#display
   */
  hidden: { display: 'none' },
  flex: { display: 'flex' },

  /**
   * aspect-ratio
   * @description Aspect ratio controls the size of the undefined dimension of a node. Aspect ratio is a non-standard property only available in React Native and not CSS.
   * @see https://reactnative.dev/docs/layout-props#aspectratio
   */
  aspectRatio(val: LayoutValue) {
    return { aspectRatio: val };
  },

  /**
   * width
   * @see https://reactnative.dev/docs/layout-props#width
   */
  width(val: LayoutValueWithString) {
    return { width: val };
  },

  /**
   * height
   * @see https://reactnative.dev/docs/layout-props#height
   */
  height(val: LayoutValueWithString) {
    return { height: val };
  },

  /**
   * margins
   * @see https://reactnative.dev/docs/layout-props#margin
   */
  m(val: LayoutValueWithString) {
    return { margin: val };
  },
  mt(val: LayoutValueWithString) {
    return { marginTop: val };
  },
  mr(val: LayoutValueWithString) {
    return { marginRight: val };
  },
  mb(val: LayoutValueWithString) {
    return { marginBottom: val };
  },
  ml(val: LayoutValueWithString) {
    return { marginLeft: val };
  },
  mx(val: LayoutValueWithString) {
    return { marginHorizontal: val };
  },
  my(val: LayoutValueWithString) {
    return { marginVertical: val };
  },

  /**
   * paddings
   * @see https://reactnative.dev/docs/layout-props#padding
   */
  p(val: LayoutValueWithString) {
    return { padding: val };
  },
  pt(val: LayoutValueWithString) {
    return { paddingTop: val };
  },
  pr(val: LayoutValueWithString) {
    return { paddingRight: val };
  },
  pb(val: LayoutValueWithString) {
    return { paddingBottom: val };
  },
  pl(val: LayoutValueWithString) {
    return { paddingLeft: val };
  },
  px(val: LayoutValueWithString) {
    return { paddingHorizontal: val };
  },
  py(val: LayoutValueWithString) {
    return { paddingVertical: val };
  },

  /**
   * border-width
   * @see https://reactnative.dev/docs/layout-props#borderWidth
   */
  border(val: LayoutValue) {
    return { borderWidth: val };
  },
  borderT(val: LayoutValue) {
    return { borderTopWidth: val };
  },
  borderR(val: LayoutValue) {
    return { borderRightWidth: val };
  },
  borderB(val: LayoutValue) {
    return { borderBottomWidth: val };
  },
  borderL(val: LayoutValue) {
    return { borderLeftWidth: val };
  },

  /**
   * border-radius
   * @see https://reactnative.dev/docs/view-style-props#borderradius
   */
  rounded(val: LayoutValue) {
    return { borderRadius: val };
  },
  roundedT(val: LayoutValue) {
    return { borderTopLeftRadius: val, borderTopRightRadius: val };
  },
  roundedR(val: LayoutValue) {
    return { borderBottomRightRadius: val, borderTopRightRadius: val };
  },
  roundedB(val: LayoutValue) {
    return { borderBottomLeftRadius: val, borderBottomRightRadius: val };
  },
  roundedL(val: LayoutValue) {
    return { borderTopLeftRadius: val, borderBottomLeftRadius: val };
  },

  /**
   * position
   * @see https://reactnative.dev/docs/layout-props#position
   */
  relative: { position: 'relative' },
  absolute: { position: 'absolute' },
  top(val: LayoutValue) {
    return { top: val };
  },
  right(val: LayoutValue) {
    return { right: val };
  },
  bottom(val: LayoutValue) {
    return { bottom: val };
  },
  left(val: LayoutValue) {
    return { left: val };
  },

  /**
   * overflow
   * @see https://reactnative.dev/docs/layout-props#overflow
   */
  overflowHidden: { overflow: 'hidden' },
  overflowScroll: { overflow: 'scroll' },
  overflowVisible: { overflow: 'visible' },

  /**
   * opacity
   * @see https://reactnative.dev/docs/view-style-props#opacity
   */
  opacity(val: LayoutValue) {
    return { opacity: val };
  },

  /**
   * z-index
   * @see https://reactnative.dev/docs/layout-props#zindex
   */
  z(val: LayoutValue) {
    return { zIndex: val };
  },

  /**
   * object-fit
   * @default 'cover'
   * @see https://reactnative.dev/docs/image-style-props#resizemode
   */
  objectContain: { resizeMode: 'contain' },
  objectCover: { resizeMode: 'cover' },
  objectFill: { resizeMode: 'stretch' },
  objectCenter: { resizeMode: 'center' },
  objectRepeat: { resizeMode: 'repaet' },
} as const;

export default layout;
