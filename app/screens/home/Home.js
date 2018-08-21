import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class Home extends Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
        <Button onPress={() => this.props.navigation.navigate('sign_in_screen')} title="Sign In"/>
      </View>
    )
  }
}
export default Home;
