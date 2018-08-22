import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
    this.handleData = this.handleData.bind(this);
  }
  componentDidMount() {
    this.handleData();
  }
  handleData() {
    const details = {
      'Object': "UserList",
      'Values': "'','',0",
      'AuthKey': "E8383CE5-4C1A-4ABE-A9EE-3310614E2566",
      'HostKey': "FBD0720D"
    };
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    fetch('http://apiexpress.itpluspoint.com.au/api/rest/Invoke', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBody
    })
      .then(response => {
        console.log('res', response);
        return response.json()
      })
      .then(data => {
        console.log(data);
        this.setState({
          data: JSON.stringify(data),
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <ScrollView>
        <Text>{this.state.data}</Text>
        <Button onPress={() => this.props.navigation.navigate('sign_in_screen')} title="Sign In"/>
      </ScrollView>
    )
  }
}
export default Home;
