import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from '../atoms/Icon';

const BottomNavigationBarItem = ({size, selected, source}) => {
  return (
    <View style={styles(selected).item}>
      <Icon size={size} source={source} />
    </View>
  );
};

const styles = selected =>
  StyleSheet.create({
    item: {
      width: 38,
      height: 38,
      backgroundColor: selected == true ? '#9CF1A4' : 'white',
      borderWidth: selected == true ? 0 : 2,
      borderColor: '#9CF1A4',
      borderRadius: 38,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 2,
    },
  });

export default BottomNavigationBarItem;
