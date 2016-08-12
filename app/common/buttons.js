/**
 * Created by ywu on 15/7/16.
 */
import React, { Component } from 'react';
const MK = require('react-native-material-kit');
const appStyles = require('./styles');

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';

const {
  MKButton,
  MKColor,
} = MK;

// customize the material design theme
// MK.setTheme({
//   primaryColor: MKColor.Teal,
//   accentColor: MKColor.Purple,
// });

const styles = Object.assign({}, appStyles, StyleSheet.create({
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  fab: {
    // width: 200,
    // height: 200,
    // borderRadius: 100,
  },
}));

export const ColoredRaisedButton = MKButton.coloredButton()
  .withText('BUTTON')
  .withOnPress(() => {
    console.log("Hi, it's a colored button!");
  })
  .build();
export const AccentColoredRaisedButton = MKButton.accentColoredButton()
  .build();
export const PlainRaisedButton = MKButton.button()
  .withText('BUTTON')
  .build();
const _FlatButton = MKButton.flatButton()
  .withText('BUTTON')
  .build();
export const ColoredFlatButton = MKButton.coloredFlatButton()
  .withText('BUTTON')
  .build();
export const AccentColoredFlatButton = MKButton.accentColoredFlatButton()
  .withText('BUTTON')
  .build();

export const ColoredFab = MKButton.coloredFab()
  .withStyle(styles.fab)
  .build();
export const AccentColoredFab = MKButton.accentColoredFab()
  .withStyle(styles.fab)
  .build();
export const PlainFab = MKButton.plainFab()
  .withStyle(styles.fab)
  .build();



var coloredButtonProps = {
  ...MKButton.coloredButton().toProps(),
  style: {
    marginLeft: 20,
    marginRight: 20,
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    //borderWidth: 1,
    borderRadius: 6,
    shadowRadius: 9,
  },
  backgroundColor: MKColor.Cyan,
  //maskLayerColor: MKColor.Cyan,
  rippleLayerColor: MKColor.Cyan,
};

var buttonTextProps = {
  pointerEvents: 'none',
  style: {
    textAlign: 'center',
    //color: '#666666',
    color: 'white',
    fontSize: 18,
    fontWeight: '300',
    borderRadius: 5,
  },
};


export class FlatButton extends Component {
  render() {
    return (
      <MKButton {...coloredButtonProps} onPress={this.props.onPress}>
        <Text {...buttonTextProps}>
          {this.props.children}
        </Text>
      </MKButton>
    );
  }
}
