import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Text from '../atoms/Text';

const TimePicker = ({show, marginBottom, value, handle}) => {
  return (
    <View style={styles(marginBottom).input}>
      <View style={{marginRight: 12}}>
        <View style={styles(0).box}>
          <Text size="medium" color="black">
            {show.startTime
              ? `${value.startTime.getHours()}시 ${value.startTime.getMinutes()}분`
              : '시작 시간'}
          </Text>
        </View>
        <View style={{position: 'absolute', width: 50, opacity: 0}}>
          <DateTimePicker
            testID="dateTimePicker"
            minuteInterval={10}
            value={value.startTime}
            mode="time"
            is24Hour={true}
            onChange={(event, selectedDate) =>
              handle({value: selectedDate, name: 'startTime'})
            }
          />
        </View>
      </View>
      <Text size="medium" color="black" marginRight={12}>
        ~
      </Text>

      <View style={{marginRight: 12}}>
        <View style={styles(0).box}>
          <Text size="medium" color="black">
            {show.endTime
              ? `${value.endTime.getHours()}시 ${value.endTime.getMinutes()}분`
              : '끝나는 시간'}
          </Text>
        </View>
        <View style={{position: 'absolute', width: 50, opacity: 0}}>
          <DateTimePicker
            testID="dateTimePicker"
            minuteInterval={10}
            value={value.endTime}
            mode="time"
            is24Hour={true}
            onChange={(e, selectedDate) =>
              handle({value: selectedDate, name: 'endTime'})
            }
          />
        </View>
      </View>
    </View>
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
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingLeft: 8,
    },
    box: {
      height: 40,
      justifyContent: 'center',
      backgroundColor: 'white',
    },
  });

export default TimePicker;
