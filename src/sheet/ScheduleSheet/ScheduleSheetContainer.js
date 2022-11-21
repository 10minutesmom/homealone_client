import React from 'react';
import ScheduleSheetPresenter from './ScheduleSheetPresenter';

const ScheduleSheetContainer = ({data, onPress}) => {
  const startTime = `${data.startHour} : ${data.startMin}`;
  const endTime =
    data.endMin === '50'
      ? `${(Number(data.endHour) + 1).toString().padStart(2, '0')} : 00`
      : `${data.endHour} : ${Number(data.endMin) + 10}`;

  const props = {data, startTime, endTime, onPress};

  return <ScheduleSheetPresenter {...props}></ScheduleSheetPresenter>;
};

export default ScheduleSheetContainer;
