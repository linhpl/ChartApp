import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

class NotificationIcon extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        // onPress={() => navigation.navigate('notifications_screen')}
      >
        <Icon
          type="ionicon"
          name="md-notifications"
          color="#000066"
          size={24}
        />
      </TouchableOpacity>
    );
  }
}

export default NotificationIcon;
