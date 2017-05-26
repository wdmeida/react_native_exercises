import React, { Component } from 'react';
import { 
  Picker, 
  StyleSheet 
} from 'react-native';

export default class Operation extends Component {

  constructor(props) {
    super(props);
    this.state = { operation: '' };
  }

  render() {
    return (
      <Picker 
        style={styles.operation}
        selectedValue={this.state.operation}
        onValueChange={option => { this.setState({ operation: option }); }}
      >
        <Picker.Item label='Soma' value='soma' />
        <Picker.Item label='Subtração' value='subtracao' />
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

