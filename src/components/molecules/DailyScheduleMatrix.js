import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../atoms/Text';
import ScheduleBox from './ScheduleBox';
import Box from '../atoms/Box';

const DailyScheduleMatrix = ({width, day, dailyData}) => {
  return (
    <View style={styles(day, 0).matrix}>
      <Text size="small" color="black" marginBottom={14}>
        {day}
      </Text>

      {dailyData.map((item, dayIndex) => {
        return (
          <View>
            {item.map((e, i) => {
              return <Box width={width} day={day} index={dayIndex || i} />;
            })}
            {item[0] != 0 ? (
              <View style={styles(day, dayIndex).box}>
                <ScheduleBox
                  hour={item.length}
                  width={width}
                  title="학교"
                  subTitle="외부일정"
                  location="학교"
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
