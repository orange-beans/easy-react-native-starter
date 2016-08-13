/**
 * Created by cczhang on 13/8/16.
 */
import update from 'react-addons-update';
import * as constants from './constants';
const { LARGE, MEDIUM, SMALL } = constants;

const MK = require('react-native-material-kit');
const { MKColor } = MK;

function getBtnSize(size_name) {
  size_name = size_name || '';
  switch(size_name.toUpperCase()) {
    case 'LARGE':
      return LARGE;
    case 'MEDIUM':
      return MEDIUM;
    case 'SMALL':
      return SMALL;
    default:
      return MEDIUM;
  }
}

export function getBtnProps(buttonProps, settings) {
  let { color, size } = settings;
  // Default color
  color = color || buttonProps.backgroundColor;
  size = getBtnSize(size);
  return update(buttonProps, {
    style: {
      width: { $set: size.width },
      height: { $set: size.height },
    },
    backgroundColor: { $set: color },
    rippleLayerColor: { $set: color },
  });
}

export function getTextProps(textProps, settings) {
  let { textColor, size } = settings;
  size = getBtnSize(size);
  // Default color
  textColor = textColor || textProps.style.color;
  return update(textProps, {
    style: {
      color: { $set: textColor },
      fontSize: { $set: size.fontSize },
    },
  });
}
