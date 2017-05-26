import React, { Component } from 'react';
import { 
  Picker, 
  StyleSheet 
} from 'react-native';

export default class Operation extends Component { 
 render() {
    return (
      <Picker 
        style={styles.operation}
        selectedValue={this.props.operation}
        onValueChange={option => { this.props.updateOperation(option); }}
      >
        <Picker.Item label='Soma' value='soma' />
        <Picker.Item label='Subtração' value='subtracao' />
        <Picker.Item label='Divisão' value='divisao' />
        <Picker.Item label='Multiplicação' value='multiplicacao' />
      </Picker> 
    );
  }
}

const styles = StyleSheet.create({
  operation: {
    marginTop: 15,
    marginBottom: 15
  }
});

