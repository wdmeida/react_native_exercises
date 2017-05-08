import React from 'react';
import { 
  Router, 
  Scene 
} from 'react-native-router-flux';

import MainScene from './components/MainScene';
import AboutGame from './components/AboutGame';
import OtherGames from './components/OtherGames';
import Result from './components/Result';

const Routes = () => (
    <Router sceneStyle={{ paddingTop: 50 }}>
        <Scene key='mainScene' component={MainScene} initial title='Cara e Coroa' />
        <Scene key='aboutGame' component={AboutGame} title='Sobre o Jogo' />
        <Scene key='otherGames' component={OtherGames} title='Outros Jogos' />
        <Scene key='result' component={Result} title='Resultado' />
      </Router>
);

export default Routes;
