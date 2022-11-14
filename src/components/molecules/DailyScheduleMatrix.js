import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../atoms/Text';
import ScheduleBox from './ScheduleBox';
import Box from '../atoms/Box';

const DailyScheduleMatrix = ({width, day, dailyData, onPress}) => {
  return (
    <View style={styles(day, 0).matrix}>
      <Text size="small" color="black" marginBottom={14}>
        {day}
      </Text>

      {dailyData.map((item, dayIndex) => {
        let time = 0;
        return (
          <View key={dayIndex}>
            {item.map((e, i) => {
              time += 1;
              return (
                <Box key={i} width={width} day={day} index={dayIndex || i} />
              );
            })}
            {item[0]['id'] != '0' ? (
              <View key={dayIndex} style={styles(day, dayIndex).box}>
                <ScheduleBox
                  hour={item.length}
                  width={width}
                  data={item[0]}
                  day={day}
                  time={time}
                  onPress={onPress}
                />
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

const styles = (day, dayIndex) =>
  StyleSheet.create({
    matrix: {
      alignItems: 'center',
    },
    box: {
      position: 'absolute',
      top: dayIndex == 0 ? 0 : -2,
      left: day == 'mon' ? 2 : 0,
    },
  });

export default DailyScheduleMatrix;
