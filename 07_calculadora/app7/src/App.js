import React from 'react';
import { View } from 'react-native';

import { 
    Top,
    Panel,
    Result 
} from './components'; // './components/index' File index is default

export default props => (
  <View>
    <Top />
    <Result />
    <Panel />
  </View>
);
