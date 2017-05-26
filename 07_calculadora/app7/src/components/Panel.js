import React, { Component } from 'react';
import { View } from 'react-native';

import Input from './panel_components/Input';
import Operation from './panel_components/Operation';
import Commands from './panel_components/Commands';

class Panel extends Component {
    
    constructor(props) {
        super(props);

        this.state = { number1: '', number2: '' };
    }

    calculate() {
        console.log('Vamos calculare');
    }
    
    render() {
        return (
            <View>
                <Input number1={this.state.number1} number2={this.state.number2} />
                <Operation />
                <Commands action={this.calculate} />
            </View>
        );
    }
}

export { Panel };
