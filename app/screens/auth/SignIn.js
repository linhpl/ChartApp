import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { Button, FormInput, Icon } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  },
  contentContainerStyle: {
    padding: 15
  },
  content: {
    marginHorizontal: 30
  },
  logo: {
    fontSize: 26,
    marginVertical: 20,
    color: "red"
  },
  signin: {
    fontSize: 17,
    marginVertical: 15,
    textAlign: "center"
  },
  labelInput: {
    fontSize: 12
  },
  containerStyle: {
    borderRadius: 3,
    borderColor: "gray",
    borderWidth: 1,
    minHeight: 40,
    marginTop: 5,
    marginBottom: 15,
    marginLeft: 0,
    marginRight: 0
  },
  inputStyle: {
    borderBottomWidth: 0,
    marginHorizontal: 10
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center"
  },
  checkboxText: {
    marginLeft: 7,
    fontSize: 12
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 3,
    marginHorizontal: 40,
    marginVertical: 20
  },
  footer: {
    marginHorizontal: 10,
    flexDirection: "row"
  },
  textFooter: {
    color: "gray",
    paddingVertical: 7,
    paddingHorizontal: 10,
    fontSize: 12
  },
  errorText: {
    color: 'red',
  }
});

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "barik.subrat@rocketmail.com",
      password: "subrat123",
      isKeep: false,
      loading: false,
      error: ''
    };
    this.onChange = this.onChange.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
  }
  onChange(value) {
    this.setState(value);
  }
  handleSignin() {

    this.setState({
        loading: true,
    });

    const { navigation } = this.props;
    const { username, password } = this.state;
    const details = {
      'Object': "UserList",
      'Values': `'${username}','${password}',0`,
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
        this.setState({
          loading: false,
        });
        navigation.navigate('home_screen');
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: 'Username or password fail! Please check again',
        });
      });
  }
  render() {
    const { username, password, isKeep, loading, error } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.content}>
            <Text style={styles.logo}>LOGO HERE</Text>
            <Text style={styles.signin}>SIGN IN</Text>
            <Text style={styles.labelInput}>User Name</Text>
            <FormInput
              label="User Name"
              value={username}
              onChangeText={value => this.onChange({ username: value })}
              containerStyle={styles.containerStyle}
              inputStyle={styles.inputStyle}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
            <Text style={styles.labelInput}>Password</Text>
            <FormInput
              label="Password"
              value={password}
              onChangeText={value => this.onChange({ password: value })}
              containerStyle={styles.containerStyle}
              inputStyle={styles.inputStyle}
              secureTextEntry
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
            <View style={styles.checkbox}>
              <Icon
                name={isKeep ? "checkbox-marked" : "checkbox-blank-outline"}
                type="material-community"
                onPress={() => this.setState({ isKeep: !isKeep})}
              />
              <Text style={styles.checkboxText}>Keep me logged in</Text>
            </View>
            <Button
              title="SIGN IN"
              buttonStyle={styles.button}
              onPress={this.handleSignin}
              loading={loading}
            />
            {error.length > 0 && <Text style={styles.errorText}>{error}</Text>}
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.textFooter}>Forgot Password</Text>
          <Text style={styles.textFooter}>
            Don't have account? Register Here
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
export default SignIn;
