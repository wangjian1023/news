
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
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { Tile, SearchBar } from 'react-native-elements';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Carousel from '../components/Broadcast';
import Line from '../components/ScrollView/line';
import Informatiom from '../components/hierarchy/information';

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
      <ScrollView style={styles.overAll}>
        <View style={{ backgroundColor: '#F5F5F5' }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            height: 60,
            backgroundColor: '#F0F8FF',
            }}
          >
            {/* <View>
              <Avatar
                small
                rounded
                source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
            </View> */}
            <Text style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>凤凰新闻</Text>
            <View style={{ display: 'flex', width: 260, height: 30 }}>
              <SearchBar
                round
                lightTheme
                placeholder="|搜索"
              />
            </View>
            {/* <Image source={{ uri: 'http://p.chanyouji.cn/330447/1449299798969p1a5ofvqthoid1bsn15270daqu2.jpg?imageView2/1/w/480/h/288' }} style={{ width: 40, height: 40 }} /> */}
            <Text style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>发现</Text>
          </View>
          <Line />
          <Carousel />
          <View style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            marginLeft: 100,
            marginTop: 20,
            }}
          >
            <Text style={styles.refresh}>
            下拉一下，看我感兴趣的内容
              <Ionicons
                name="chevron-circle-down"
                size={20}
                marginRight={30}
                paddingLeft={10}
                style={{ color: 'pink' }}
              />
            </Text>
          </View>
          <Tile
            imageSrc={{ uri: "http://p.chanyouji.cn/330447/1449299798969p1a5ofvqthoid1bsn15270daqu2.jpg?imageView2/1/w/480/h/288" }}
            icon={{ name: 'play-circle', type: 'font-awesome' }}
            contentContainerStyle={{ height: 70 }}
          >
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Caption</Text>
              <Text>Caption</Text>
            </View>
          </Tile>
          <Informatiom />
        </View>
      </ScrollView>
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
});
