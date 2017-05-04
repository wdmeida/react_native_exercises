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
        headerTintColor: '#000'
    };

    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#CCC' />

                <View style={styles.logo}>
                    <Image source={logo} />                
                </View>

                <View style={styles.menu}>

                    <View style={styles.menuGroup}>
                        
                        <TouchableHighlight 
                            onPress={() => navigate('Clients')} 
                            underlayColor={'#B9C941'} 
                            activeOpacity={0.3}
                        >
                            <Image style={styles.imgMenu} source={menuClient} />
                        </TouchableHighlight>
                        
                        <TouchableHighlight 
                            onPress={() => navigate('Company')} 
                            underlayColor={'#EC7148'} 
                            activeOpacity={0.3} 
                        >
                            <Image style={styles.imgMenu} source={menuCompany} />
                        </TouchableHighlight>

                    </View>

                    <View style={styles.menuGroup}>
                        
                        <TouchableHighlight 
                            onPress={() => navigate('Contacts')} 
                            underlayColor={'#61BD8C'} 
                            activeOpacity={0.3} 
                        >
                            <Image style={styles.imgMenu} source={menuContact} />
                        </TouchableHighlight>
                        
                        <TouchableHighlight 
                            onPress={() => navigate('Services')} 
                            underlayColor={'#19D1C8'} 
                            activeOpacity={0.3}
                        >
                            <Image style={styles.imgMenu} source={menuService} />
                        </TouchableHighlight>

                    </View>
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
