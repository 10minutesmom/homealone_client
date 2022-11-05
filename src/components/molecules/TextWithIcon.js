import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';

const TextWithIcon = ({source, marginBottom, children}) => {
  return (
    <View style={styles(marginBottom).textWithIcon}>
      <View style={styles(marginBottom).icon}>
        <Icon size="medium" source={source} />
      </View>
      <Text size="medium" color="black">
        {children}
      </Text>
    </View>
  );
};

const styles = margin =>
  StyleSheet.create({
    textWithIcon: {
      flexDirection: 'row',
      marginBottom: margin,
    },
    icon: {
      marginRight: 10,
    },
  });

export default TextWithIcon;
