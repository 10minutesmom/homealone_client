import React from 'react';
import {View, TextInput, StyleSheet, ShadowPropTypesIOS} from 'react-native';

const Input = ({hint, marginBottom, value, handle}) => {
  return (
    <TextInput
      style={styles(marginBottom).input}
      placeholder={hint}
      value={value}
      onChangeText={() => handle()}
    />
  );
};

const styles = marginBottom =>
  StyleSheet.create({
    input: {
      width: '100%',
      marginBottom: marginBottom,
      height: 40,
      borderRadius: 12,
      backgroundColor: 'white',
      shadowColor: '#000000',
      shadowOpacity: 0.03,
      shadowOffset: {
        width: 4,
        height: 4,
      },
      paddingLeft: 8,
    },
  });

export default Input;
