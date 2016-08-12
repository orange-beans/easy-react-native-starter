/**
 * Created by ywu on 15/8/13.
 */

import React from 'react';
import { Actions } from 'react-native-router-flux';
import Button from 'apsl-react-native-button';

const appStyles = require('./styles');

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import {
  MKProgress,
  MKSpinner,
} from 'react-native-material-kit';

const styles = Object.assign({}, appStyles, StyleSheet.create({
  progress: {
    width: 150,
    //height: 2,
  },
  spinner: {
    //width: 22,
    //height: 22,
  },
}));

const SingleColorSpinner = MKSpinner.singleColorSpinner()
  .withStyle(styles.spinner)
  .build();

const Progress = React.createClass({
  componentDidMount: function () {
    setTimeout((() => {
      if (this.refs.progBarWithBuffer) {
        this.refs.progBarWithBuffer.buffer = 0.8;
      }
    }), 1000);
    setTimeout((() => {
      if (this.refs.progBar && this.refs.progBarWithBuffer) {
        this.refs.progBar.progress = 0.6;
        this.refs.progBarWithBuffer.progress = 0.6;
      }
    }), 1600);
  },

  render: function() {
    return (
      <ScrollView style={styles.scrollView}
        contentContainerStyle={styles.container}>
        <View style={styles.row}>
          <View style={styles.col}>
            <MKProgress
              ref="progBar"
              style={styles.progress}
              progress={0.2}
            />
            <Text style={styles.legendLabel}>Default progress bar</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <MKProgress.Indeterminate
              style={styles.progress}
            />
            <Text style={styles.legendLabel}>Indeterminate</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <MKProgress
              ref="progBarWithBuffer"
              style={styles.progress}
              progress={0.2}
              buffer={0.3}
            />
            <Text style={styles.legendLabel}>Buffering</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <MKSpinner style={styles.spinner}/>
            <Text style={styles.legendLabel}>Default spinner</Text>
          </View>
          <View style={styles.col}>
            <SingleColorSpinner/>
            <Text style={styles.legendLabel}>Single color</Text>
          </View>
        </View>
        <Button style={{ width: 150, alignSelf:'center' }} onPress={Actions.pop}>Go back</Button>
      </ScrollView>
    );
  },
});

module.exports = Progress;
