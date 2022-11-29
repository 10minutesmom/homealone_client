import React from 'react';
import BasicModalPresenter from './BasicModalPresenter';
import axios from 'axios';
import createSnackbar from '../../utils/createSnackbar';

const BasicModalContainer = ({close, getScheduleData, data}) => {
  const deleteSchedule = () => {
    axios
      .post('http://api.whoswork.co.kr/apiserver/scheduledelete', {
        time: {
          day: data.current.day,
          startHour: data.current.startHour,
          startMin: data.current.startMin,
          endHour: data.current.endHour,
          endMin: data.current.endMin,
        },
      })
      .then(response => {
        createSnackbar('스케쥴이 삭제되었습니다!');
      })
      .catch(error => {
        createSnackbar('스케쥴 삭제를 실패했습니다!');
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
