import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

class MenuIcon extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.openDrawer()}
      >
        <Icon
          type="entypo"
          name="menu"
          color="white"
          size={25}
        />
      </TouchableOpacity>
    );
  }
}
//
// MenuIcon.propTypes = {
//   navigation: PropTypes.any.isRequired,
// };

export default MenuIcon;
