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
        console.log(item);
        return (
          <View key={dayIndex}>
            {item.map((e, i) => {
              return (
                <Box key={i} width={width} day={day} index={dayIndex || i} />
              );
            })}
            {item[0]['id'] != '0' ? (
              <View key={dayIndex} style={styles(day, dayIndex).box}>
                <ScheduleBox
                  hour={item.length}
                  width={width}
                  title={item[0]['title']}
                  subTitle={item[0]['scheduleType']}
                  location={item[0]['location']}
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
