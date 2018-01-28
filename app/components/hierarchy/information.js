/**
 * 2018-01-18   Wang Jian
 */

import React from 'react';
import { connect } from 'dva';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';

// import Size from '../../res/size/medium';

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
            {item.img}
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
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  label: {
    borderColor: '#14B9C8',
    marginRight: 10,
  },
  pic: {
    height: 60,
    width: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContent: {
    flexDirection: 'column',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default connect(({ others }) => ({
  Evaluation: others.Evaluation,
}))(Macao);
