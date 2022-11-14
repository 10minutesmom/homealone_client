import React, {useState, useCallback, useRef, useEffect} from 'react';
import ScheduleModalPresenter from './ScheduleModalPresenter';

const ScheduleModalContainer = ({close, data}) => {
  let title = data.id != '0' ? '수정하기' : '추가하기';

  const [scheduleType, setScheduleType] = useState(data.scheduleType);

  const changeScheduleType = useCallback(type => {
    setScheduleType(type);
  }, []);

  const props = {
    changeScheduleType: changeScheduleType,
    close: close,
    scheduleType,
    title,
    data,
  };
  return <ScheduleModalPresenter {...props} />;
};

export default ScheduleModalContainer;
