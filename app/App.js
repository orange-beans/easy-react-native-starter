import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import styles from './styles';
import SceneOne from './SceneOne';
import SceneTwo from './SceneTwo';


class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="sceneOne" component={SceneOne} title="SceneOne" initial={true} />
          <Scene key="sceneTwo" component={SceneTwo} title="SceneTwo" />
        </Scene>
      </Router>
    );
  }
}

export default App;
