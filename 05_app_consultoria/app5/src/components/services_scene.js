import React, { Component } from 'react';
import {
    Image,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';

//import TitleBar from './title_bar';

const detailsServices = require('../imgs/detalhe_servico.png');

export default class ServicesScene extends Component {
    static navigationOptions = {
        title: 'ATM Consultoria',
        headerTintColor: '#19D1C8'
    };

    render() {
        return (
            <View style={styles.container}>
               
                <StatusBar backgroundColor="#19D1C8" />
               
                <View style={styles.header}>
                    <Image source={detailsServices} />
                    <Text style={styles.headerText}>Nossos Serviços</Text>
                </View>

                <View style={styles.detailsService}>
                    <Text style={styles.txtService}>Consultoria</Text>
                    <Text style={styles.txtService}>Processos</Text>
                    <Text style={styles.txtService}>Acompanhamento de Projetos</Text>      
                </View>
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    header: {
        flexDirection: 'row',
        marginTop: 20
    },
    headerText: {
        fontSize: 30,
        color: '#19D1C8',
        marginLeft: 10,
        marginTop: 25
    },
    detailsService: {
        marginTop: 20,
        padding: 20
    },
    txtService: {
        fontSize: 18
    }
});