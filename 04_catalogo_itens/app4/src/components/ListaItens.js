import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Axios from 'axios';

import Item from './Item';

const urlRequest = 'http://faus.com.br/recursos/c/dmairr/api/itens.html';

export default class ListaItens extends Component {

  constructor(props) {
    super(props);

    this.state = { listaItens: [] };
  }

  componentWillMount() {
    //request
    Axios.get(urlRequest)
      .then(response => { this.setState({ listaItens: response.data }); })
      .catch(() => console.log('Erro ao recuperar os dados'));
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#DDD' }}>
        { this.state.listaItens.map(item => (<Item key={item.titulo} item={item} />))}
      </ScrollView>
    );
  }
}
