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
        <View style={styles(day).box}>
          {dailyData.map((item, dayIndex) => {
            print(item.data.id);
            return item.data.id != '0' ? (
              <ScheduleBox
                key={dayIndex}
                count={item.count}
                width={width}
                data={item.data}
                day={day}
                time={item.time}
                onPress={onPress}
              />
            ) : (
              <View key={dayIndex} style={marginStyle(item.count).margin} />
            );
          })}
        </View>
      </View>
    </View>
  );
};

const marginStyle = count =>
  StyleSheet.create({
    margin: {
      marginBottom: (count / 6) * 42,
    },
  });

const styles = day =>
  StyleSheet.create({
    matrix: {
      alignItems: 'center',
    },
    box: {
      position: 'absolute',
      left: day == 'mon' ? 2 : 0,
    },
  });

export default DailyScheduleMatrix;
