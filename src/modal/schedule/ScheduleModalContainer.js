import React, {useState, useCallback, useEffect} from 'react';
import ScheduleModalPresenter from './ScheduleModalPresenter';

const ScheduleModalContainer = ({close, data}) => {
  let title = data.current != undefined ? '수정하기' : '추가하기';

  const [show, setShow] = useState({
    startTime: false,
    endTime: false,
  });

  const [scheduleType, setScheduleType] = useState(
    data.current != undefined ? data.current.scheduleType : 'inside',
  );

  const [values, setValues] = useState({
    title: '',
    location: '',
    day: '',
    readyTime: '',
    movingTime: '',
    startTime: new Date(),
    endTime: new Date(),
  });

  useEffect(() => {
    if (data.current != undefined) {
      setValues({
        ...values,
        movingTime: data.current.movingTime,
        title: data.current.title,
        location: data.current.location,
        day: data.current.day,
        readyTime: data.current.readyTime,
        startTime: new Date(2022, 2, 2, timeFormatter(data.current.startTime)),
        endTime: new Date(2022, 2, 2, timeFormatter(data.current.endTime)),
      });
      setShow({
        ...show,
        startTime: true,
        endTime: true,
      });
    }
  }, []);

  const timeFormatter = time => {
    if (time === '12pm') return 12;
    else if (time === '12am') return 0;
    else if (time.substr(-2) === 'pm') return Number(time.slice(0, -2)) + 12;
    else return Number(time.slice(0, -2));
  };

  const onValueChange = e => {
    const {value, name} = e;

    setValues({
      ...values,
      [name]: value,
    });

    if (show[name] === false) setShow({...show, [name]: true});
  };

  const createSchedule = () => {
    console.log(values);
    close();
  };

  const changeScheduleType = useCallback(type => {
    setScheduleType(type);
  }, []);

  const props = {
    changeScheduleType: changeScheduleType,
    onValueChange: onValueChange,
    createSchedule: createSchedule,
    close: close,
    scheduleType,
    title,
    values,
    show,
  };
  return <ScheduleModalPresenter {...props} />;
};

export default ScheduleModalContainer;
