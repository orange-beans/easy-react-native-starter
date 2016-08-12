import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class SceneTwo extends Component {
  render() {
    return (
      <View style={{marginTop: 128, marginLeft: 64}}>
        <Text>This is PageTwo!</Text>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
}
