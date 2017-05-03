import React, { Component } from 'react';
import {
    Image,
    StatusBar,
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

                <Image source={logo} />
                <Image source={menuClient} />
                <Image source={menuCompany} />
                <Image source={menuContact} />
                <Image source={menuService} />
            </View>
        );
    }
}

