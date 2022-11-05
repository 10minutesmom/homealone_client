import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Avatar = ({source}) => {
  return (
    <View style={styles.avatar}>
      <Image source={source} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 88,
    height: 88,
    borderRadius: 88,
    overflow: 'hidden',
  },
});

export default Avatar;
