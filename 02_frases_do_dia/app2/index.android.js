//Import
import React from 'react';
import { AppRegistry, Alert, Image, Text, TouchableOpacity, View } from 'react-native';

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

const getNewPhrase = () => {
  var randomNumber = Math.floor((Math.random() * 10));

  var phrases = [
    'Sorria, seu código compila!',
    'Pra que pagar se posso fazer eu mesmo?',
    'É só uma alteração pequena.',
    'Precisa ser feito para ontem!',
    'O projeto será concluído no prazo.',
    'O café acabou.',
    'É um projeot simples, fácil',
    'Parou de funcionar depois que você mexeu.',
    'Para entender recursão, devemos primeiro compreender uma recursão.',
    'O espaço entre a teoria e a prática não é tão grande como é, a teoria na prática.'
  ];

  Alert.alert(phrases[randomNumber]);
}//getNewPhrases()

//Cria o componente
const App = () => {

  const { button, container, textButton } = Styles;

  return ( 
    <View style={ container }>

      <Image source={ require('./imgs/logo.png') } />
      
      <TouchableOpacity 
        onPress={getNewPhrase}
        style={ button }>
        <Text style={ textButton }>Nova frase</Text>
      </TouchableOpacity>
    </View>
  );
};

//Renderiza para o dispositivo.
AppRegistry.registerComponent('app2', () => App);