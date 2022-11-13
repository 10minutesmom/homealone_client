import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';

const TextWithIcon = ({source, marginBottom, size, children}) => {
  return (
    <View style={styles(marginBottom, size == 'small').textWithIcon}>
      <View style={styles(marginBottom, size == 'small').icon}>
        <Icon size={size == 'small' ? 'small' : 'medium'} source={source} />
      </View>
      <Text size={size == 'small' ? 'small' : 'medium'} color="black">
        {children}
      </Text>
    </View>
  );
};

const styles = (margin, small) =>
  StyleSheet.create({
    textWithIcon: {
      flexDirection: 'row',
      marginBottom: margin,
    },
    icon: {
      marginRight: small ? 2 : 10,
    },
  });

export default TextWithIcon;
