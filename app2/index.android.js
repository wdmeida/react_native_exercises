//Import
import React from 'react';
import {Text, AppRegistry} from 'react-native';

//Formatações
const Estilos = {
  estiloTexto: {
    fontSize: 50
  }
};

//Cria o componente
const App = () => {
  return (
    <Text style={ Estilos.estiloTexto }>Frases do dia</Text>
  );
};

//Renderiza para o dispositivo.
AppRegistry.registerComponent('app2', () => App);