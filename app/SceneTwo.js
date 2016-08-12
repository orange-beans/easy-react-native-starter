import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Button from 'apsl-react-native-button';

export default class SceneTwo extends Component {
  render() {
    return (
      <View style={{ marginTop: 128 }}>
        <Button style={styles.button} onPress={Actions.pop}>Go back</Button>
        <Button style={styles.button} onPress={Actions.buttons}>Buttons</Button>
        <Button style={styles.button} onPress={Actions.cards}>Cards</Button>
        <Button style={styles.button} onPress={Actions.progress}>Progress</Button>
        <Button style={styles.button} onPress={Actions.sliders}>Sliders</Button>
        <Button style={styles.button} onPress={Actions.textfields}>TextFields</Button>
        <Button style={styles.button} onPress={Actions.toggles}>Toggles</Button>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 150,
    alignSelf: 'center',
  },
});
