import React, { Component } from 'react';
import { AppLoading, Asset, Font } from 'expo';
import AppWithNavigationState from './navigators/AppWithNavigationState';

class AppProvider extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <AppWithNavigationState />
    );
  }
}

export default AppProvider;
