import {BottomTabBarHeightCallbackContext} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';

const Button = ({big, border, width, icon, onPress, children}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={styles(big, border, width).button}>
        {icon != null ? (
          <View style={styles(big, border, width).icon}>
            <Icon size="big" source={icon} />
          </View>
        ) : null}
        <Text size="medium">{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = (big, border, width) =>
  StyleSheet.create({
    button: {
      height: big == true ? 42 : 36,
      borderWidth: border == true ? 2 : 0,
      borderColor: '#9CF1A4',
      backgroundColor: border == false ? '#9CF1A4' : 'white',
      width: width,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    icon: {
      position: 'absolute',
      left: 32,
    },
  });

export default Button;
