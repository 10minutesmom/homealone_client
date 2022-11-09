import React, {useState, useCallback, useRef, useEffect} from 'react';
import ScheduleModalPresenter from './ScheduleModalPresenter';

const ScheduleModalContainer = ({close, data}) => {
  let title = data.current.length != 0 ? '수정하기' : '추가하기';
  let scheduleData = data.current[0];
  const [scheduleType, setScheduleType] = useState('inside');

  const changeScheduleType = useCallback(type => {
    setScheduleType(type);
  }, []);

  // useEffect(() => {
  //   console.log(data.current[0]);
  // });

  const props = {
    changeScheduleType: changeScheduleType,
    close: close,
    scheduleType,
    title,
    scheduleData,
  };
  return <ScheduleModalPresenter {...props} />;
};

export default ScheduleModalContainer;
