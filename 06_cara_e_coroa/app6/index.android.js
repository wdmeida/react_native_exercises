import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { 
  Router, 
  Scene 
} from 'react-native-router-flux';

import MainScene from './src/components/MainScene';
import AboutGame from './src/components/AboutGame';
import OtherGames from './src/components/OtherGames';

export default class app6 extends Component {
  render() {
    return (
      <Router sceneStyle={{ paddingTop: 50 }}>
        <Scene key='MainScene' component={MainScene} initial title='Cara e Coroa' />
        <Scene key='AboutGame' component={AboutGame} title='Sobre o Jogo' />
        <Scene key='OtherGames' component={OtherGames} title='Outros Jogos' />
      </Router>
    );
  }
}

AppRegistry.registerComponent('app6', () => app6);
