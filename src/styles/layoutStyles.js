import Colors from '../constants/Colors';

const {StyleSheet} = require('react-native');

const layoutStyles = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#010A43',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifySb: {
    justifyContent: 'space-between',
  },
});

export default layoutStyles;
