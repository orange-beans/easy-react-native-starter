import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

// Common components
import { FlatButton } from './common/buttons';

export default class SceneOne extends Component {
  goToSceneTwo() {
    Actions.sceneTwo({text: 'Hello There!'});
  }
  render() {
    return (
      <View style={{marginTop: 128}}>
        <View style={{alignSelf:'center'}}>
          <FlatButton style={{ width: 150, alignSelf:'center' }} onPress={this.goToSceneTwo}>Menu</FlatButton>
          <Text onPress={this.goToSceneTwo}>This is PageOne!</Text>
        </View>

      </View>
    );
  }
}
