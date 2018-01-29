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
            <Image source={{ uri: item.src }} style={{ width: 150, height: 80 }} />
          </View>
          <View style={styles.centerContent}>
            <View style={styles.text}>
              <Text>{item.description}</Text>
            </View>
            <View style={styles.paper} >
              <Text style={styles.border}>{item.select}</Text>
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
    flexDirection: 'row',
    position: 'relative',
    // backgroundColor: '#F5DEB3',
  },
  label: {
    borderColor: '#14B9C8',
    marginRight: 10,
  },
  pic: {
    height: 100,
    width: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContent: {
    flexDirection: 'column',
    paddingLeft: 30,
  },
  text: {
    width: 200,
    padding: 10,
    height: 60,
    marginTop: 20,
    // wordwrap: 'beak-word',
  },
  paper: {
    display: 'flex',
    marginLeft: 30,
    flexDirection: 'row',
    marginBottom: 20,
  },
  border: {
    display: 'flex',
  },

});

export default connect(({ others }) => ({
  Evaluation: others.Evaluation,
}))(Macao);
