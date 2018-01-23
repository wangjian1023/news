
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {
  View,
  Text,
} from 'react-native';

export default class Classify extends Component {
  static navigationOptions = {
    tabBarLabel: '新闻',
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon
        name={focused ? 'newsletter' : 'news'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  }
  render() {
    return (
      <View>
        <Text>新闻</Text>
      </View>
    );
  }
}
