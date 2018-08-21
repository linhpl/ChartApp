import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import SignIn from '../screens/auth/SignIn';
import Home from '../screens/home/Home';
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

const navigationOptionsDrawerLock = ({ navigation }) => {
  let drawerLockMode = 'unlocked';
  if (navigation.state.index > 0) {
    drawerLockMode = 'locked-closed';
  }

  return {
    drawerLockMode,
  };
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
  headerLeft: <Menu />,
  headerRight: <Notification/>,
};

const HomeStack = createStackNavigator(
  {
    home_screen: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: "Home"
      }),
    },
  },
  {
    navigationOptions: navigationOptionsWithHeader,
  },
);

const HomeDrawer = createDrawerNavigator(
  {
    home_stack: { screen: HomeStack, navigationOptions: navigationOptionsDrawerLock },
  },
  {
    // contentComponent: props => <SideBar {...props} />,
  },
);


const ModalStack = createStackNavigator(
  {
    home_drawer: { screen: HomeDrawer },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

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
    modal_stack: { screen: ModalStack },
  },
  {
    initialRouteName: 'auth_stack',
  },
);

export default AppNavigator;
