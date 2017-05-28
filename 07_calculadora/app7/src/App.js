import React, { Component } from 'react';
import { View } from 'react-native';

import { 
    Top,
    Panel,
    Result 
} from './components/Index'; // './components/index' File index is default

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { number1: '', number2: '', operation: 'soma', result: '' };
    

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

    this.setState({ result: result.toString() });
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
        <Top />
        <Result result={this.state.result} />
        <Panel  
          number1={this.state.number1}
          number2={this.state.number2}
          operation={this.state.operation}
          calculate={this.calculate}
          updateOperation={this.updateOperation}
          updateValue={this.updateValue}  
        />
      </View>
    );
  }
}


