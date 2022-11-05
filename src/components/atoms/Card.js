import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = ({height, children}) => {
  return <View style={styles(height).card}>{children}</View>;
};

const styles = height =>
  StyleSheet.create({
    card: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 40,
      height: height,
      borderRadius: 12,
      backgroundColor: 'white',
    },
  });

export default Card;
