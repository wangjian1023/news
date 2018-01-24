
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
import Icon from 'react-native-vector-icons/Entypo';
import { Header, Avatar } from 'react-native-elements';

import {
  View,
  Text,
} from 'react-native';

export default class Classify extends Component {
  static navigationOptions = {
    header: null,
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
        <Header
          leftComponent={
            <Avatar
              small
              rounded
              source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
          }
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <View>
          <Text>新闻</Text>
        </View>
      </View>
    );
  }
}
