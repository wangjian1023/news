/**
 * 2018-01-18   Wang Jian
 */

import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
} from 'react-native';
// import {
//   Avatar,
// } from 'react-native-elements';

const _separator = () => {
  return <View style={{ height: 0.5, backgroundColor: '#aaa' }} />;
};

function Macao(props) {
  return (
    <FlatList
      ItemSeparatorComponent={_separator}
      data={props.Evaluation}
      renderItem={({ item }) => (
        <View style={styles.overAll} key={item.key}>
          <View style={styles.src}>
            {/* <Avatar
              large
              source={{ uri: item.src }}
              activeOpacity={0.7}
              avatarStyle={{
                borderRadius: 8,
                backgroundColor: 'white',
              }}
            /> */}
            <Image source={{ uri: item.src }} style={{ width: 150, height: 80 }} />
          </View>
          <View style={styles.centerContent}>
            <View>
              <Text>{item.description}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text>{item.select}</Text>
              <Text>{item.comments}</Text>
            </View>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  overAll: {
    margin: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: '#F5DEB3',
    width: '100%',
  },
  label: {
    borderColor: '#14B9C8',
    marginRight: 10,
  },
  pic: {
    height: 60,
    width: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContent: {
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default connect(({ others }) => ({
  Evaluation: others.Evaluation,
}))(Macao);
