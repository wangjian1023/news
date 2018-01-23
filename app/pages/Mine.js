import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  View,
  Text,
} from 'react-native';

export default class Mine extends Component {
  static navigationOptions = {
    tabBarLabel: '我',
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon
        name={focused ? 'people' : 'people-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  }
  render() {
    return (
      <View>
        <Text>我</Text>
      </View>
    );
  }
}
