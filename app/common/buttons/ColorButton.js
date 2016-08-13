/**
 * Created by cczhang on 15/8/16.
 */
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import { getBtnProps, getTextProps } from './helpers';

const MK = require('react-native-material-kit');
const { MKButton, MKColor } = MK;

class ColorButton extends Component {
  render() {
    return (
      <MKButton {...getBtnProps(buttonProps, this.props)} onPress={this.props.onPress}>
        <Text {...getTextProps(textProps, this.props)}>
          {this.props.children}
        </Text>
      </MKButton>
    );
  }
}

const buttonProps = {
  ...MKButton.coloredButton().toProps(),
  style: {
    marginLeft: 20,
    marginRight: 20,
    width: 150,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    //borderWidth: 1,
    borderRadius: 5,
    shadowRadius: 9,
  },
  //backgroundColor: MKColor.Red,
  //maskLayerColor: MKColor.Cyan,
  //rippleLayerColor: MKColor.Red,
};

const textProps = {
  pointerEvents: 'none',
  style: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '300',
    borderRadius: 5,
  },
};

export default ColorButton;
