/*
 * MIT License
 *
 * Copyright (c) 2018 SmartestEE Co., Ltd..
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
 *     Initial: 2018/01/26       Wang Jian
 */

import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  Button,
} from 'react-native-elements';

// import BasicColor from '../../res/Color/BasicColor';
import medium from '../../res/Fonts/size';

export default class RankHeader extends React.Component {
  render() {
    const labelData = [
      {
        key: '0',
        content: '头条',
      },
      {
        key: '1',
        content: '要闻',
      },
      {
        key: '2',
        content: '视频',
      },
      {
        key: '3',
        content: '推荐',
      },
      {
        key: '4',
        content: '娱乐',
      },
      {
        key: '5',
        content: '北京',
      },
      {
        key: '6',
        content: '军事',
      },
      {
        key: '7',
        content: '体育',
      },
      {
        key: '8',
        content: '财经',
      },
      {
        key: '9',
        content: '科技',
      },
    ];
    return (
      <View style={styles.view}>
        <ScrollView horizontal>
          {
            labelData.map(item => (
              <View style={styles.headtype} key={item.key}>
                <Button
                  title={item.content}
                  buttonStyle={{
                    width: 60,
                    height: 40,
                    marginTop: 10,
                    marginBottom: 10,
                    borderRadius: 15,
                    backgroundColor: 'black',
                  }}
                  backgroundColor="#DDD"
                />
              </View>
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headtype: {
    display: 'flex',
    flexDirection: 'row',
  },
  allranktype: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5,
  },
  textrank: {
    marginRight: 10,
    fontSize: medium.medium,
  },
});
