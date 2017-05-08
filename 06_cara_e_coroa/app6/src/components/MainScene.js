import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const logo = require('../imgs/logo.png');
const btnPlay = require('../imgs/botao_jogar.png');
const btnAboutGame = require('../imgs/sobre_jogo.png');
const btnOtherGames = require('../imgs/outros_jogos.png');

export default class MainScene extends Component {
  render() {
    return (
      <View style={styles.mainScene}>
        
        <View style={styles.showGame}>
          <Image source={logo} />
          <Image source={btnPlay} />
        </View>

        <View style={styles.footer}>
            <TouchableHighlight
                onPress={() => { Actions.aboutGame(); }}
            >
                <Image source={btnAboutGame} />
            </TouchableHighlight>
          
            <TouchableHighlight
                onPress={() => { Actions.otherGames(); }}
            >
                <Image source={btnOtherGames} />
            </TouchableHighlight>        
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainScene: {
    flex: 1,
    backgroundColor: '#61BD8C'
  },
  showGame: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
