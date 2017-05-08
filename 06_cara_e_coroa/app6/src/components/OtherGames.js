import React, { Component } from 'react';
import {
    StyleSheet, 
    Text 
} from 'react-native';

export default class OtherGames extends Component {
    render() {
        return (
            <Text style={styles.container}>
                Aqui podem ser apresentadas informações sobre outros jogos do desenvolvedor.
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#61BD8C'
    }
});
