//Import
import React from 'react';
import { AppRegistry, Text, View, Image, TouchableOpacity } from 'react-native';

//Formatações
const Styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddignHorizontal: 40,
    marginTop: 20,
    elevation: 3
  },
  textButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

//Cria o componente
const App = () => {

  const { button, container, textButton } = Styles;

  return ( 
    <View style={ container }>

      <Image source={ require('./imgs/logo.png') } />
      
      <TouchableOpacity style={ button }>
        <Text style={ textButton }>Nova frase</Text>
      </TouchableOpacity>
    </View>
  );
};

//Renderiza para o dispositivo.
AppRegistry.registerComponent('app2', () => App);