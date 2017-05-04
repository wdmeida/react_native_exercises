import React, { Component } from 'react';
import {
    Image,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';

//import TitleBar from './title_bar';

const detailsCompany = require('../imgs/detalhe_empresa.png');

export default class CompanyScene extends Component {
    static navigationOptions = {
        title: 'ATM Consultoria',
        headerTintColor: '#EC7148'
    };

    render() {
        return (
            <View style={styles.container}>
                
                <StatusBar backgroundColor="#EC7148" />
                
                <View style={styles.header}>
                    <Image source={detailsCompany} />
                    <Text style={styles.headerText}>Empresa</Text>
                </View>

                <View style={styles.detailsCompany}>
                    <Text style={styles.txtCompany}>
                        A ATM Consultoria está no mercado a mais de 20 anos...
                    </Text>
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
        color: '#EC7148',
        marginLeft: 10,
        marginTop: 25
    },
    detailsCompany: {
        marginTop: 20,
        padding: 20
    },
    txtCompany: {
        fontSize: 18
    }
});
