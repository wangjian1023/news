import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  View,
  Text,
} from 'react-native';

export default class Trends extends Component {
  static navigationOptions = {
    tabBarLabel: '风直播',
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon
        name={focused ? 'live-tv' : 'live-help'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  }
  render() {
    return (
      <View>
        <Text>风直播</Text>
      </View>
    );
  }
}
