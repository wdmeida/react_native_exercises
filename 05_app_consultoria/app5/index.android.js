import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainScene from './src/components/main_scene';
import ClientsScene from './src/components/clients_scene';
import ContactsScene from './src/components/contacts_scene';
import CompanyScene from './src/components/company_scene';
import ServicesScene from './src/components/services_scene';

export default class app5 extends Component { 
  render() {
    return (
        <MainScene />
    );
  }
}

//Register routes app.
const AppNavigator = StackNavigator({
  Home: { screen: MainScene },
  Clients: { screen: ClientsScene },
  Contacts: { screen: ContactsScene },
  Company: { screen: CompanyScene },
  Services: { screen: ServicesScene }
});

AppRegistry.registerComponent('app5', () => AppNavigator);
