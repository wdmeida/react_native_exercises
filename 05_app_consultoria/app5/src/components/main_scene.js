import React, { Component } from 'react';
import {
    Image,
    StatusBar,
    StyleSheet,
    TouchableHighlight,
    View
} from 'react-native';

const logo = require('../imgs/logo.png');
const menuClient = require('../imgs/menu_cliente.png');
const menuContact = require('../imgs/menu_contato.png');
const menuCompany = require('../imgs/menu_empresa.png');
const menuService = require('../imgs/menu_servico.png');

export default class MainScene extends Component {
    static navigationOptions = {
        title: 'ATM Consultoria',
        headerTint: '#CCC'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <StatusBar backgroundColor='#CCC' />

                <View style={styles.logo}>
                    <Image source={logo} />                
                </View>

                <View style={styles.menu}>

                    <View style={styles.menuGroup}>
                        
                        <TouchableHighlight onPress={() => navigate('Clients')}>
                            <Image style={styles.imgMenu} source={menuClient} />
                        </TouchableHighlight>
                        
                        <Image style={styles.imgMenu} source={menuCompany} />
                    </View>

                    <View style={styles.menuGroup}>
                        
                        <TouchableHighlight onPress={() => navigate('Contacts')}>
                            <Image style={styles.imgMenu} source={menuContact} />
                        </TouchableHighlight>
                        
                        <Image style={styles.imgMenu} source={menuService} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 30,
        alignItems: 'center'
    },
    menu: {
        alignItems: 'center'
    },
    menuGroup: {
        flexDirection: 'row'
    },
    imgMenu: {
        margin: 15
    },
    textHeader: {
        textAlign: 'center',
        color: '#000'
    }
});
