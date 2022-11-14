import React from 'react';
import ScheduleSheetPresenter from './ScheduleSheetPresenter';

const ScheduleSheetContainer = ({data, onPress}) => {
  const props = {data, onPress};
  // console.log(data);
  return <ScheduleSheetPresenter {...props}></ScheduleSheetPresenter>;
};

export default ScheduleSheetContainer;
