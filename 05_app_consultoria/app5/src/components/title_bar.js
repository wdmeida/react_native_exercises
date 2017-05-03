import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native';

export default class TitleBar extends Component {

    render() {
        return (
            <View style={styles.titleBar}>
                <Text style={styles.title}>ATM Consultoria</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleBar: {
        backgroundColor: '#CCC',
        padding: 10,
        height: 60
    },
    title: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#000'
    }
});
