import React from 'react';
import {View, StyleSheet} from 'react-native';

const Box = ({width, day, index}) => {
  return <View style={styles(width, index, day).box}></View>;
};

const styles = (width, index, day) =>
  StyleSheet.create({
    box: {
      width: day == 'mon' ? (width - 12) / 5 + 4 : (width - 12) / 5 + 2,
      height: index == 0 ? 44 : 42,
      borderColor: '#D9D9D9',
      borderTopWidth: index == 0 ? 2 : 0,
      borderBottomWidth: 2,
      borderRightWidth: 2,
      borderLeftWidth: day == 'mon' ? 2 : 0,
      backgroundColor: 'transparent',
    },
  });

export default Box;
