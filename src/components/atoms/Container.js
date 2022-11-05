import React from 'react';
import {View, StyleSheet} from 'react-native';

const Container = ({color, children}) => {
  return <View style={styles(color).container}>{children}</View>;
};

const styles = color =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: color == 'white' ? '#FDFDFD' : '#F4F4F4',
    },
  });

export default Container;
