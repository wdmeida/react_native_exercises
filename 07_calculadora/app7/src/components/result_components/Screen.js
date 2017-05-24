import React from 'react';
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native';

export default props => (
  <View>
    <TextInput
      style={styles.screen} 
      placeholder='Resultado'
      editable={false} 
    />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    height: 100,
    fontSize: 30
  }
});
