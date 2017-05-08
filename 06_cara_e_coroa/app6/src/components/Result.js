import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    View
} from 'react-native';

const face = require('../imgs/moeda_cara.png');
const crown = require('../imgs/moeda_coroa.png');

export default class Result extends Component {
    constructor(props) {
        super(props);

        this.state = { result: '' };
    }//constructor()

    componentWillMount() {
        const numRandom = Math.floor(Math.random() * 2);
        let faceOrCrown = '';
        
        if (numRandom === 0) { 
            faceOrCrown = 'face';
        } else {
            faceOrCrown = 'crown';
        }

        this.setState({ result: faceOrCrown });
    }//componentWillMount()

    render() {
        if (this.state.result === 'face') {
            return (
                <View style={styles.result}>
                    <Image source={face} />
                </View>
           );
        } 
        
        return (
            <View style={styles.result}>
                <Image source={crown} />
            </View>
        );
    }//render()
}

const styles = StyleSheet.create({
    result: {
        flex: 1,
        backgroundColor: '#61BD8C',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
