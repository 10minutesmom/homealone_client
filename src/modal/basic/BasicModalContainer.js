import React from 'react';
import BasicModalPresenter from './BasicModalPresenter';
import axios from 'axios';

const BasicModalContainer = ({close, getScheduleData, data}) => {
  const deleteSchedule = async () => {
    axios
      .post('http://127.0.0.1:8000/apiserver/scheduledelete', {
        time: {
          day: data.current.day,
          startHour: data.current.startHour,
          startMin: data.current.startMin,
          endHour: data.current.endHour,
          endMin: data.current.endMin,
        },
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        getScheduleData();
      });

    close();
  };

  const props = {
    close: close,
    deleteSchedule: deleteSchedule,
  };

  return <BasicModalPresenter {...props} />;
};

export default BasicModalContainer;
