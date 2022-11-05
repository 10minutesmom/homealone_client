import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Icon = ({size, source}) => {
  const width = size => {
    const widthMap = {
      small: 14,
      medium: 18,
      big: 20,
    };
    return widthMap[size];
  };

  return <Image style={styles(width(size)).image} source={source} />;
};

const styles = size =>
  StyleSheet.create({
    image: {
      width: size,
      height: size,
    },
  });

export default Icon;
