import React from 'react';
import {
  TextInput,
  StyleSheet
} from 'react-native';

export default props => (
  <TextInput 
    style={styles.number} 
    value={props.num} 
    onChangeText={valueInput => props.updateValue(props.name, valueInput)}
  />
);

const styles = StyleSheet.create({
  number: {
    width: 140,
    height: 80,
    fontSize: 20
  }
});
