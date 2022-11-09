import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';

const Header = ({source, onPress, marginBottom, children}) => {
  return (
    <View style={styles(marginBottom).header}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles(marginBottom).text}>
          <Text size="big" weight="bold" color="black">
            {children}
          </Text>
        </View>
        {source != null ? (
          <TouchableOpacity onPress={() => onPress(0)}>
            <Icon size="big" source={source} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = marginBottom =>
  StyleSheet.create({
    header: {
      width: '100%',
      height: 74,
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      marginBottom: marginBottom,
    },
    outer: {
      height: 74,
      position: 'absolute',
      top: 0,
      justifyContent: 'flex-end',
    },
    text: {
      marginLeft: 20,
      width: Dimensions.get('window').width - 60,
    },
    icon: {
      height: 20,
      width: 20,
    },
  });

export default Header;
