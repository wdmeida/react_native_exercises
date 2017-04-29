import React, { Component } from 'react';
import { View } from 'react-native';

import Item from './Item';

export default class ListaItens extends Component {
    
  render() {
    return (
      <View>
        <Item />
        <Item />
        <Item />
      </View>
    );
  }
}
