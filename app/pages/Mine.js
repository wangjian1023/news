/*
 * MIT License
 *
 * Copyright (c) 2018 SmartestEE Co., Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
 * Revision History:
 *     Initial: 2018/01/16        Wang Jian
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-elements';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import FontsSize from '../res/Fonts/size';
import Colors from '../res/color/color';

export default class Mine extends Component {
  static navigationOptions = {
    header: null,
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
        <View style={styles.push}>
          <Avatar
            medium
            rounded
            source={{ uri: "http://p.chanyouji.cn/1391695908/7C6AC2D4-7A7A-4480-9FC9-28403BDD62B1.jpg?imageView2/1/w/480/h/288" }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <Text style={styles.text}>未设置昵称 </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  overAll: {
    flexGrow: 1,
  },
  refresh: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: 40,
    marginLeft: 5,
  },
  text: {
    display: 'flex',
    fontSize: FontsSize.medium,
    paddingLeft: 50,
    alignItems: 'center',
  },
  push: {
    display: 'flex',
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
