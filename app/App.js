import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import styles from './styles';
import SceneOne from './SceneOne';
import SceneTwo from './SceneTwo';

import Buttons from './rnmk/buttons';
import Cards   from './rnmk/cards';
import Progress from './rnmk/progress';
import Sliders from './rnmk/sliders';
import TextFields from './rnmk/textfields';
import Toggles from './rnmk/toggles';

class App extends Component {
  render() {
    return (
      <Router>
        <Scene key='root' hideNavBar hideTabBar>
          <Scene key='sceneOne' component={SceneOne} title='SceneOne' initial />
          <Scene key='sceneTwo' component={SceneTwo} title='SceneTwo' />
          <Scene key='buttons' component={Buttons} title='Buttons'/>
          <Scene key='cards' component={Cards} title='Cards'/>
          <Scene key='progress' component={Progress} title='Progress'/>
          <Scene key='sliders' component={Sliders} title='Sliders'/>
          <Scene key='textfields' component={TextFields} title='TextFields'/>
          <Scene key='toggles' component={Toggles} title='Toggles'/>
        </Scene>
      </Router>
    );
  }
}

export default App;
