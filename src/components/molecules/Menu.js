import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';
import right_arrow_icon from '../../asset/images/right_arrow_icon.png';

const menu = ({item}) => {
  return (
    <View style={styles.menu}>
      <Text size="regular" color="black" weight="bold" marginBottom={20}>
        Account
      </Text>
      {item.map(item => {
        return (
          <View style={styles.item}>
            <Text size="regular" color="black">
              {item}
            </Text>
            <Icon size="small" source={right_arrow_icon} />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOpacity: 0.03,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    paddingVertical: 20,
  },
  item: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
});

export default menu;
