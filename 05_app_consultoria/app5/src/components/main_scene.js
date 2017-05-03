import React, { Component } from 'react';
import {
    Image,
    StatusBar,
    StyleSheet,
    View
} from 'react-native';

import TitleBar from './title_bar';

const logo = require('../imgs/logo.png');
const menuClient = require('../imgs/menu_cliente.png');
const menuContact = require('../imgs/menu_contato.png');
const menuCompany = require('../imgs/menu_empresa.png');
const menuService = require('../imgs/menu_servico.png');

export default class MainScene extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor='#CCC'/>

                <TitleBar />

                <View style={styles.logo}>
                    <Image source={logo} />                
                </View>

                <View style={styles.menu}>
                    <View style={styles.menuGroup}>
                        <Image style={styles.imgMenu} source={menuClient} />
                        <Image style={styles.imgMenu} source={menuCompany} />
                    </View>

                    <View style={styles.menuGroup}>
                        <Image style={styles.imgMenu} source={menuContact} />
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
    }
});
