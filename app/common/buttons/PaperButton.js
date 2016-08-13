/**
 * Created by cczhang on 15/8/16.
 */
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import { getBtnProps, getTextProps } from './helpers';

const MK = require('react-native-material-kit');
const { MKButton, MKColor } = MK;

class PaperButton extends Component {
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
  ...MKButton.flatButton().toProps(),
  style: {
    marginLeft: 20,
    marginRight: 20,
    width: 150,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.8,
    borderRadius: 2,
    shadowRadius: 9,
  },
  // backgroundColor: MKColor.Red,
  // //maskLayerColor: MKColor.Cyan,
  // rippleLayerColor: MKColor.Red,
};

const textProps = {
  pointerEvents: 'none',
  style: {
    textAlign: 'center',
    color: '#666666',
    fontSize: 18,
    fontWeight: '300',
    borderRadius: 5,
  },
};

export default PaperButton;
