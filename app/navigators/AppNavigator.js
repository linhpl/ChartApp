import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';
import SignIn from '../screens/auth/SignIn';
// import { Menu, Back, Notification} from '../components/Icons';
import Back from '../components/icons/Back';
import Menu from '../components/icons/Menu';
import Notification from '../components/icons/Notification';

const navigationOptions = {
  headerStyle: {
    elevation: 0,
  },
  headerTitleStyle: {
    fontSize: 16,
  },
  gesturesEnabled: true,
};

const navigationOptionsWithHeader = {
  ...navigationOptions,
  headerStyle: {
    ...navigationOptions.headerStyle,
    backgroundColor: 'red',
  },
  headerTintColor: 'white',
  // headerLeft: [
  //   <Menu key={1}/>,
  //   <Back key={2}/>,
  // ],
  // headerRight: <Notification/>,
};


const AuthStack = createStackNavigator(
  {
    sign_in_screen: {
      screen: SignIn,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "SIGN IN",
      }),
    },
  },
  {
    navigationOptions: navigationOptionsWithHeader,
  },
);

const AppNavigator = createSwitchNavigator(
  {
    auth_stack: { screen: AuthStack },
  },
  {
    initialRouteName: 'auth_stack',
  },
);

export default AppNavigator;
