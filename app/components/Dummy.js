/**
 * 2018-01-31   Wang Jian
 */

import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { Tile } from 'react-native-elements';


const _separator = () => {
  return <View style={{ height: 0.5, backgroundColor: 'red ' }} />;
};

class editor extends Component {
  render() {
    return (
      <Tile
        ItemSeparatorComponent={_separator}
        imageSrc={{ uri: "http://p.chanyouji.cn/330447/1449299798969p1a5ofvqthoid1bsn15270daqu2.jpg?imageView2/1/w/480/h/288" }}
        icon={{ name: 'play-circle', type: 'font-awesome' }}
        contentContainerStyle={{ height: 70 }}
      />
    );
  }
}

// const styles = StyleSheet.create({
// });

export default editor;
