import { ViewStyle } from 'react-native';

/**
 * @see https://reactnative.dev/docs/flexbox
 */
const flex: { [key: string]: ViewStyle } = {
  // flex-box; directions
  row: { flexDirection: 'row' },
  rowReverse: { flexDirection: 'row-reverse' },
  col: { flexDirection: 'column' },
  colReverse: { flexDirection: 'column-reverse' },

  // flex-box; justify-content
  justifyStart: { justifyContent: 'flex-start' },
  justifyEnd: { justifyContent: 'flex-end' },
  justifyCenter: { justifyContent: 'center' },
  justifyBetween: { justifyContent: 'space-between' },
  justifyAround: { justifyContent: 'space-around' },
  justifyEvenly: { justifyContent: 'space-evenly' },

  // flex-box; align-items
  itemsStart: { alignItems: 'flex-start' },
  itemsEnd: { alignItems: 'flex-end' },
  itemsCenter: { alignItems: 'center' },
  itemsBaseline: { alignItems: 'baseline' },
  itemsStretch: { alignItems: 'stretch' },

  // flex-box; align-self
  selfAuto: { alignSelf: 'auto' },
  selfStart: { alignSelf: 'flex-start' },
  selfEnd: { alignSelf: 'flex-end' },
  selfCenter: { alignSelf: 'center' },
  selfBaseline: { alignSelf: 'baseline' },
  selfStretch: { alignSelf: 'stretch' },

  // flex-box; flex-[nubmer]
  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  flex4: { flex: 4 },
  flex5: { flex: 5 },
  flex6: { flex: 6 },

  // flex-box; wrap
  wrap: { flexWrap: 'wrap' },
  nowrap: { flexWrap: 'nowrap' },
};

export default flex;
