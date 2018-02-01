/**
 * 2018-01-31   Wang Jian
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  // StyleSheet,
  Text,
} from 'react-native';
import { Tile } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons/Feather';

const _separator = () => {
  return <View style={{ height: 0.5, backgroundColor: 'red ' }} />;
};

class editor extends Component {
  render() {
    return (
      <View>
        <Tile
          ItemSeparatorComponent={_separator}
          imageSrc={{ uri: "http://p.chanyouji.cn/330447/1449299798969p1a5ofvqthoid1bsn15270daqu2.jpg?imageView2/1/w/480/h/288" }}
          icon={{ name: 'play-circle', type: 'font-awesome' }}
          contentContainerStyle={{ height: 70 }}
        />
        {/* <View>liuqi</View> */}
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   overAll: {
//     margin: 10,
//     display: 'flex',
//     alignItems: 'center',
//     flexDirection: 'row',
//     position: 'relative',
//     // backgroundColor: '#F5DEB3',
//   },
//   label: {
//     borderColor: '#14B9C8',
//     marginRight: 10,
//   },
//   pic: {
//     height: 100,
//     width: 250,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   centerContent: {
//     flexDirection: 'column',
//     paddingLeft: 30,
//   },
//   text: {
//     width: 200,
//     padding: 10,
//     height: 60,
//     marginTop: 20,
//     // wordwrap: 'beak-word',
//   },
//   paper: {
//     display: 'flex',
//     marginLeft: 30,
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   border: {
//     display: 'flex',
//   },

// });

export default connect(() => ({
}))(editor);
