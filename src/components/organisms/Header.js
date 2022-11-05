import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';

const Header = ({source, children}) => {
  return (
    <View style={styles.outer}>
      <View style={styles.header}>
        <View style={styles.text}>
          <Text size="big" weight="bold" color="black">
            {children}
          </Text>
        </View>
        {source != null ? (
          <View style={styles.icon}>
            <Icon size="big" source={source} />
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  outer: {
    height: 74,
    position: 'absolute',
    top: 0,
    justifyContent: 'flex-end',
  },
  text: {
    width: '100%',
  },
  icon: {
    position: 'absolute',
    right: 20,
  },
});

export default Header;
