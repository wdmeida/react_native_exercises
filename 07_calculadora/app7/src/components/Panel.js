import React from 'react';
import { View } from 'react-native';

import Input from './panel_components/Input';
import Operation from './panel_components/Operation';
import Commands from './panel_components/Commands';

const Panel = props => (
    <View>
        <Input 
            number1={props.number1} 
            number2={props.number2} 
            updateValue={props.updateValue}
        />
        <Operation 
            operation={props.operation} 
            updateOperation={props.updateOperation} 
        />
        <Commands action={props.calculate} />
    </View>
);


export { Panel };
