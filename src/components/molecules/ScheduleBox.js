import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from '../atoms/Text';
import TextWithIcon from '../molecules/TextWithIcon';
import location_icon from '../../asset/images/location_icon.png';

const ScheduleBox = ({hour, width, title, subTitle, location, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={boxStyle(hour, width).scheduleBox}>
        <View style={styles.textBox}>
          <Text size="medium" color="black" marginBottom={2}>
            {title}
          </Text>
          {hour >= 2 ? (
            <Text size="small" color="grey">
              {subTitle}
            </Text>
          ) : null}
        </View>
        <View style={styles.icon}>
          <TextWithIcon source={location_icon} size="small">
            {location}
          </TextWithIcon>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textBox: {
    width: '100%',
    marginTop: 6,
  },
  icon: {
    position: 'absolute',
    bottom: 2,
  },
});

const boxStyle = (hour, width) =>
  StyleSheet.create({
    scheduleBox: {
      backgroundColor: 'white',
      width: (width - 12) / 5 - 1,
      height: hour * 42,
      borderColor: '#9CF1A4',
      borderTopWidth: 2,
      shadowColor: '#000000',
      shadowOpacity: 0.08,
      shadowOffset: {
        width: 2,
        height: 4,
      },
      paddingHorizontal: 2,
    },
  });

export default ScheduleBox;
