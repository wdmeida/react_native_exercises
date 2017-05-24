import React from 'react';
import { 
  StyleSheet, 
  View 
} from 'react-native';

import ReadInputUser from '../shared/ReadInputUser';

export default props => (
  <View style={styles.readNumbers}>
    <ReadInputUser />
    <ReadInputUser />
  </View>
);

const styles = StyleSheet.create({
  readNumbers: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

