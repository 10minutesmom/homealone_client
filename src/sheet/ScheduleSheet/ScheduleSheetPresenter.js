import React from 'react';
import {View, StyleSheet} from 'react-native';

const ScheduleSheetPresenter = () => {
  return <View style={styles.sheet}></View>;
};

const styles = StyleSheet.create({
  sheet: {
    width: '100%',
    height: 450,
    backgroundColor: 'black',
  },
});

export default ScheduleSheetPresenter;
