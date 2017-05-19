import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
 } from 'react-native';

 export default props => (
     <View style={styles.top}>
        <Text style={styles.txtTitle}>Calculadora 1.0</Text>
     </View>
 );

const styles = StyleSheet.create({
    top: {
        backgroundColor: '#2196F3',
        padding: 10,
        alignItems: 'center'
    },
    txtTitle: {
        fontSize: 25,
        color: '#FFF'
    } 
});
