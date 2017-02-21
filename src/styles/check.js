import { StyleSheet } from 'react-native';
import variables from './default';

const grid = 4;
export default StyleSheet.create({
  wrap: {
    flexDirection: 'row',
  },
  imgDom: {
    paddingVertical: 0.5 * grid,
    paddingHorizontal: 0.5 * grid,
    backgroundColor: variables.brand_important,
    borderRadius: 4 * variables.radius_sm,
    borderStyle: 'solid',
    position: 'absolute',
    bottom: -5,
    right: -5,
  },
  img: {
    width: 10,
    height: 10,
  },
});
