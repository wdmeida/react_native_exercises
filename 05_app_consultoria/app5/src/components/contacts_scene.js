import React, { Component } from 'react';
import {
    Image,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';

//import TitleBar from './title_bar';

const detailsContacts = require('../imgs/detalhe_contato.png');

export default class ContactsScene extends Component {
    static navigationOptions = {
        title: 'ATM Consultoria',
        headerTintColor: '#61BD8C'
    };

    render() {
        return (
            <View style={styles.container}>
               
                <StatusBar backgroundColor='#61BD8C' />
               
                <View style={styles.header}>
                    <Image source={detailsContacts} />
                    <Text style={styles.headerText}>Contatos</Text>
                </View>

                <View style={styles.detailsContacts}>
                    <Text style={styles.txtContacts}>TEL: (11) 1234-1234</Text>
                    <Text style={styles.txtContacts}>CEL: (11) 91234-1234</Text>
                    <Text style={styles.txtContacts}>EMAIL: contato@tmconsultoria.com</Text>      
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
        color: '#61BD8C',
        marginLeft: 10,
        marginTop: 25
    },
    detailsContacts: {
        marginTop: 20,
        padding: 20
    },
    txtContacts: {
        fontSize: 18
    }
});
