import React from 'react';
import {StyleSheet, Text} from 'react-native';

const CustomText = ({
  size,
  weight,
  color,
  fixHeight,
  marginBottom,
  marginRight,
  children,
}) => {
  const setFontSize = size => {
    const sizeMap = {
      small: 12,
      medium: 14,
      regular: 16,
      semi: 18,
      big: 20,
      extra: 36,
    };
    return sizeMap[size];
  };

  const setHeight = size => {
    const heightMap = {
      small: 16,
      medium: 18,
      regular: 20,
      semi: 22,
      big: 24,
      extra: 44,
    };
    return heightMap[size];
  };

  const setFontColor = color => {
    if (color == 'white') return '#FFFFFF';
    if (color == 'black') return '#000000';
    if (color == 'grey') return '#767676';
  };

  return (
    <Text
      style={
        styles(
          setFontSize(size),
          weight,
          setFontColor(color),
          setHeight(size),
          fixHeight,
          marginBottom,
          marginRight,
        ).text
      }>
      {children}
    </Text>
  );
};

const styles = (
  size,
  weight,
  color,
  height,
  fixHeight,
  marginBottom,
  marginRight,
) =>
  StyleSheet.create({
    text: {
      fontSize: size,
      fontWeight: weight == 'bold' ? 'bold' : 'normal',
      color: color,
      height: fixHeight > 0 ? fixHeight : height,
      lineHeight: fixHeight > 0 ? 0 : height,
      marginBottom: marginBottom,
      marginRight: marginRight,
    },
  });

export default CustomText;
