import React from 'react';
import ScheduleSheetPresenter from './ScheduleSheetPresenter';

const ScheduleSheetContainer = ({data, onPress}) => {
  const props = {data, onPress};

  return <ScheduleSheetPresenter {...props}></ScheduleSheetPresenter>;
};

export default ScheduleSheetContainer;
