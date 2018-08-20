
import React, { Component } from 'react';
import { BackHandler, ToastAndroid } from 'react-native';
import { NavigationActions, DrawerActions } from 'react-navigation';
import AppNavigator from './AppNavigator';


class AppWithNavigationState extends Component {

  render() {
    return (
      <AppNavigator />
    );
  }
}

export default AppWithNavigationState;
