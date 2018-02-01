/**
 * 2018-01-31   Wang Jian
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  // StyleSheet,
  // FlatList,
} from 'react-native';

import Dummy from '../../components/Dummy';

class editor extends Component {
  render() {
    return (
      <View>
        <Dummy />
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>Caption</Text>
          <Text>Caption</Text>
        </View>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   label: {
//     borderColor: '#14B9C8',
//     marginRight: 10,
//   },
// });

export default connect(() => ({
}))(editor);
