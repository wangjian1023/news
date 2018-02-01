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
 *     Initial: 2018/02/01       Wang Jian
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar, SocialIcon, Divider } from 'react-native-elements';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import FontsSize from '../res/Fonts/size';
import Colors from '../res/color/color';

const _separator = () => {
  return <View style={{ height: 2, backgroundColor: '#aaa' }} />;
};

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
          <Ionicons
            name="ios-medal"
            size={20}
            style={{ color: Colors.Moccasin }}
          />
          <SocialIcon
            style={styles.border}
            button
            type="twitter"
          />
        </View>
        <View style={{ backgroundColor: Colors.Snow }}>
          <View style={styles.column}>
            <View>
              <FontAwesome
                name="star-half-empty"
                size={40}
                style={styles.center}
              />
              <Text style={styles.positon}>收藏</Text>
            </View>
            <View>
              <FontAwesome
                style={styles.center}
                name="star-half-empty"
                size={40}
              />
              <Text style={styles.positon}>关注</Text>
            </View>
            <View>
              <FontAwesome
                style={styles.center}
                name="star-half-empty"
                size={40}
              />
              <Text style={styles.positon}>缓存</Text>
            </View>
            <View>
              <FontAwesome
                style={styles.center}
                name="star-half-empty"
                size={40}
              />
              <Text style={styles.positon}>签到</Text>
            </View>
          </View>
        </View>
        <Divider style={{ backgroundColor: Colors.orange, height: 5 }} />
        <View style={styles.part}>
          <Text>消息</Text>
          <Text>评论点赞/系统通知</Text>
        </View>
        <Divider style={{ backgroundColor: Colors.orange, height: 5 }} />
        <View style={styles.part}>
          <Text>历史</Text>
          <FontAwesome
            style={styles.center}
            name="star-half-empty"
            size={40}
          />
        </View>
        <Divider style={{ backgroundColor: Colors.orange, height: 0.2 }} />
        <View style={styles.part}>
          <Text>历史</Text>
          <FontAwesome
            style={styles.center}
            name="star-half-empty"
            size={40}
          />
        </View>
        <Divider style={{ backgroundColor: Colors.orange, height: 0.2 }} />
        <View style={styles.part}>
          <Text>钱包</Text>
          <FontAwesome
            style={styles.center}
            name="star-half-empty"
            size={40}
          />
        </View>
        <Divider style={{ backgroundColor: Colors.orange, height: 0.3 }} />
        <View style={styles.part}>
          <Text>好评大赛</Text>
          <FontAwesome
            style={styles.center}
            name="star-half-empty"
            size={40}
          />
        </View>
        <Divider style={{ backgroundColor: Colors.orange, height: 0.2 }} />
        <View style={styles.part}>
          <Text>分享得金币</Text>
          <FontAwesome
            style={styles.center}
            name="star-half-empty"
            size={40}
          />
        </View>
        <Divider style={{ backgroundColor: Colors.orange, height: 5 }} />


      </View>
    );
  }
}
const styles = StyleSheet.create({
  overAll: {
    flexGrow: 1,
  },
  text: {
    display: 'flex',
    fontSize: FontsSize.medium,
    paddingLeft: 20,
    alignItems: 'center',
  },
  push: {
    display: 'flex',
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  border: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginLeft: 200,
  },
  column: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 15,
    height: 70,
    justifyContent: 'space-around',
    // backgroundColor: Colors.primary,
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.Moccasin,
  },
  positon: {
    display: 'flex',
    fontSize: FontsSize.large,
    paddingLeft: 1,
  },
  part: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // marginTop: 30,
    alignItems: 'center',
    height: 50,
    backgroundColor: Colors.primary,

  },
});
