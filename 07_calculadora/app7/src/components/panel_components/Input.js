import React from 'react';
import { 
  StyleSheet, 
  View 
} from 'react-native';

import ReadInputUser from '../shared/ReadInputUser';

export default props => (
  <View style={styles.readNumbers}>
    <ReadInputUser num={props.number1} updateValue={props.updateValue} name='number1' />
    <ReadInputUser num={props.number2} updateValue={props.updateValue} name='number2' />
  </View>
);

const styles = StyleSheet.create({
  readNumbers: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

