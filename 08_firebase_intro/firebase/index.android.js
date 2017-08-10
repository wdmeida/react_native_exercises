import firebase from 'firebase';
import React, { Component } from 'react';
import { AppRegistry, View, Text, Button } from 'react-native';

class App extends Component {

  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCOCwItso_Ub8FR0tPkPO2Jshgj0QKo7BM",
      authDomain: "configuracaofirebasereac-79693.firebaseapp.com",
      databaseURL: "https://configuracaofirebasereac-79693.firebaseio.com",
      projectId: "configuracaofirebasereac-79693",
      storageBucket: "configuracaofirebasereac-79693.appspot.com",
      messagingSenderId: "791976576643"
    };
    
    firebase.initializeApp(config);
  }

  cadastrarUsuario() {
    let email = 'wdmeida@gmail.com';
    let senha = 'wagner12345';

    const usuarios = firebase.auth();

    usuarios.createUserWithEmailAndPassword(email, senha)
      .then(alert('Usuário cadastrado com sucesso'))
      .catch((erro) => {
          //erro.code, erro.message
          alert(erro.message);
        }
      );
  }

  verificarUsuarioLogado() {
    const usuarios = firebase.auth();
    /*
    const usuarioAtual = usuarios.currentUser;

    usuarioAtual ? alert("Usuário está logado!") : alert("Usuário não está logado!");
    */

    // Listener para verificar alterações de usuários cadastrados no firebase.
    usuarios.onAuthStateChanged(
      (usuariosAtual) => {
        if (usuariosAtual) {
          alert("Usuário está logado!");
        } else {
          alert("Usuário não está logado");
        }
      }
    );
  }

  logout() {
    const usuarios = firebase.auth();
    usuarios.signOut()
      .then(alert("Logout efetuado com sucesso"))
      .catch(error => (alert(error.message)));
  }

  login() {
    let email = 'wdmeida@gmail.com';
    let senha = 'wagner12345';

    const usuarios = firebase.auth();
    
    usuarios.signInWithEmailAndPassword(email, senha)
      .then(alert("Login efetuado com sucesso!"))
      .catch(error => alert(error.message));
  }

  render() {
    return (
      <View>
        <Button
          onPress={ () => { this.cadastrarUsuario(); } }
          title='Cadastrar Usuário'
          color='#841584'
          accessibilityLabel='Salvar Dados' />

        <Button
          onPress={ () => { this.verificarUsuarioLogado(); } }
          title='Verificar usuário logado'
          color='#841584'
          accessibilityLabel='Salvar Dados' />

        <Button 
          onPress={ () => { this.login(); } }
          title='Login'
          color='#841584'
          accessibilityLabel='Login' />

        <Button 
          onPress={ () => { this.logout(); } }
          title='Logout'
          color='#841584'
          accessibilityLabel='Logout' />

      </View>
    );
  }
}

AppRegistry.registerComponent('firebase', () => App );