import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class SceneOne extends Component {
  goToSceneTwo() {
    Actions.sceneTwo({text: 'Hello There!'});
  }
  render() {
    return (
      <View style={{marginTop: 128, marginLeft: 64}}>
        <Text onPress={this.goToSceneTwo}>This is PageOne!</Text>
      </View>
    )
  }
}
