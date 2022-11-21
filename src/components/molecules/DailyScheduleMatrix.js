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
      <View>
        {[...new Array(24).keys()].map((e, i) => {
          return <Box key={i} width={width} day={day} index={e || i} />;
        })}

        {dailyData.map((item, dayIndex) => {
          return item.data.id != '0' ? (
            <View key={dayIndex} style={styles(day, dayIndex).box}>
              <ScheduleBox
                count={item.count}
                width={width}
                data={item.data}
                day={day}
                time={item.time}
                onPress={onPress}
              />
            </View>
          ) : null;
        })}
      </View>
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
