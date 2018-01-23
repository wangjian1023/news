import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
} from 'react-native';

export default class Video extends Component {
  static navigationOptions = {
    tabBarLabel: '视频',
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon
        name={focused ? 'ios-videocam' : 'ios-videocam-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  }
  render() {
    return (
      <View>
        <Text>视频</Text>
      </View>
    );
  }
}
