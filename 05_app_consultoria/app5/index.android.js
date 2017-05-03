import React, { Component } from 'react';
import { 
  AppRegistry,
  View 
} from 'react-native';

//import MainScene from './src/components/main_scene';
import ClientScene from './src/components/client_scene';

export default class app5 extends Component {
  render() {
    return (
      <View> 
         <ClientScene />
      </View>
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
