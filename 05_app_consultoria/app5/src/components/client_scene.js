import React, { Component } from 'react';
import {
    Image,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';

//Import Components
import TitleBar from './title_bar';

//Import images
const detailsClients = require('../imgs/detalhe_cliente.png');
const clientOne = require('../imgs/cliente1.png');
const clientTwo = require('../imgs/cliente2.png');

export default class ClientScene extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor="#CCC" />

                <TitleBar />

                <View style={styles.header}>
                    <Image source={detailsClients} />
                    <Text style={styles.headerText}>Nossos Clientes</Text>
                </View>

                <View style={styles.contentClients}>
                    <Image source={clientOne} />
                    <Text style={styles.contentClientsText}>Lorem ipsum dolorem</Text>
                </View>

                <View style={styles.contentClients}>
                    <Image source={clientTwo} />
                    <Text style={styles.contentClientsText}>Lorem ipsum dolorem</Text>
                </View>                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginTop: 20
    },
    headerText: {
        fontSize: 30,
        color: '#B9C941',
        marginLeft: 10,
        marginTop: 25
    },
    contentClients: {
        padding: 20,
        marginTop: 10
    },
    contentClientsText: {
        fontSize: 18,
        marginLeft: 20
    }
});
