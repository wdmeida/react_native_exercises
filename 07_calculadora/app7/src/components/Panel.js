import React, { Component } from 'react';
import { View } from 'react-native';

import Input from './panel_components/Input';
import Operation from './panel_components/Operation';
import Commands from './panel_components/Commands';

class Panel extends Component {
    
    constructor(props) {
        super(props);

        this.state = { number1: '10', number2: '20' };
       
        this.calculate = this.calculate.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }

    calculate() {
        const result = parseFloat(this.state.number1) + parseFloat(this.props.number2);
        console.log(result);
    }

    updateValue(nameInput, value) {
        const obj = {};
        obj[nameInput] = value;

        this.setState(obj);
    }
    
    render() {
        return (
            <View>
                <Input 
                    number1={this.state.number1} 
                    number2={this.state.number2} 
                    updateValue={this.updateValue}
                />
                <Operation />
                <Commands action={this.calculate} />
            </View>
        );
    }
}

export { Panel };
