import React from 'react';
import {View, StyleSheet} from 'react-native';

const Container = ({color, center, children}) => {
  return <View style={styles(color, center).container}>{children}</View>;
};

const styles = (color, center) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: center == false ? '' : 'center',
      backgroundColor: color == 'white' ? '#FDFDFD' : '#F4F4F4',
    },
  });

export default Container;
