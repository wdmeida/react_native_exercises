import React, { Component } from 'react';
import { View } from 'react-native';

import Input from './panel_components/Input';
import Operation from './panel_components/Operation';
import Commands from './panel_components/Commands';

class Panel extends Component {
    
    constructor(props) {
        super(props);

        this.state = { number1: '', number2: '', operation: 'soma' };
       
        this.calculate = this.calculate.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.updateOperation = this.updateOperation.bind(this);
    }

    calculate() {
        let result = 0;
        
        switch (this.state.operation) {
            case 'soma':
                result = parseFloat(this.state.number1) + parseFloat(this.state.number2);     
            break;
            case 'subtracao':
                result = parseFloat(this.state.number1) - parseFloat(this.state.number2);
            break;
            case 'divisao':
                result = parseFloat(this.state.number1) / parseFloat(this.state.number2);
            break;
            case 'multiplicacao':
                result = parseFloat(this.state.number1) * parseFloat(this.state.number2);
            break;
            default:
                result = 0;
            break;
        }
    }

    updateValue(nameInput, value) {
        const obj = {};
        obj[nameInput] = value;

        this.setState(obj);
    }

    updateOperation(value) {
        this.setState({ operation: value });
    }
    
    render() {
        return (
            <View>
                <Input 
                    number1={this.state.number1} 
                    number2={this.state.number2} 
                    updateValue={this.updateValue}
                />
                <Operation 
                    operation={this.state.operation} 
                    updateOperation={this.updateOperation} 
                />
                <Commands action={this.calculate} />
            </View>
        );
    }
}

export { Panel };
