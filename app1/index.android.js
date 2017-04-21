import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const gerarNumeroAleatorio = () => {
  var numero_aleatorio = Math.random();
  
  numero_aleatorio = Math.floor(numero_aleatorio * 10);
  alert(numero_aleatorio);
}

const App = () => {
  return (
    <View>
      <Text>Gerador de números randômicos</Text>
      <Button 
        title = "Gerar um número randômico"
        onPress={gerarNumeroAleatorio}
      />
    </View>
  )
}

AppRegistry.registerComponent('app1', () =>  App );