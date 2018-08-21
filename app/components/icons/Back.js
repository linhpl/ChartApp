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

class BackIcon extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        // onPress={() => navigation.goBack(null)}
      >
        <Icon
          type="ionicon"
          name="md-arrow-back"
          color="white"
          size={24}
        />
      </TouchableOpacity>
    );
  }
}

// BackIcon.propTypes = {
//   navigation: PropTypes.any.isRequired,
// };

export default BackIcon;
