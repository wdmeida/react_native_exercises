import React from 'react';
import { View } from 'react-native';

import Input from './panel_components/Input';
import Operation from './panel_components/Operation';
import Commands from './panel_components/Commands';

const Panel = props => (
    <View>
        <Input />
        <Operation />
        <Commands />
    </View>
);

export { Panel };
