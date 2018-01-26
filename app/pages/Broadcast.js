
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
import { Header, Avatar, Tile } from 'react-native-elements';

import {
  View,
  Text,
} from 'react-native';

import Carousel from '../components/Broadcast';
import Line from '../components/ScrollView/line';

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
      <View style={{ backgroundColor: '#F5F5F5' }}>
        <Header
          outerContainerStyles={{ backgroundColor: 'white' }}
          innerContainerStyles={{ justifyContent: 'space-between', alignItems: 'center' }}
          leftComponent={
            <Avatar
              small
              rounded
              source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
          }
          centerComponent={{ text: 'MY TITLE', style: { color: 'black' } }}
          rightComponent={{ icon: 'home', color: 'black' }}
        />
        <Line />
        <View>
          <Text>新闻</Text>
        </View>
        <Carousel />
        <Tile
          imageSrc={{ uri: "http://p.chanyouji.cn/330447/1449299798969p1a5ofvqthoid1bsn15270daqu2.jpg?imageView2/1/w/480/h/288" }}
          title="Lorem ipsum dolor sit amet, consectetur"
          icon={{ name: 'play-circle', type: 'font-awesome' }}
          contentContainerStyle={{ height: 70 }}
        >
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Caption</Text>
            <Text>Caption</Text>
          </View>
        </Tile>
      </View>
    );
  }
}
