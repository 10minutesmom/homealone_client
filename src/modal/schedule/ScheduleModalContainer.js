import React, {useState, useCallback, useRef, useEffect} from 'react';
import ScheduleModalPresenter from './ScheduleModalPresenter';
import {useDispatch} from 'react-redux';
import {changeInput} from '../../redux/reducers/Input';

const ScheduleModalContainer = ({close, data}) => {
  let title = data.current != undefined ? '수정하기' : '추가하기';
  const dispatch = useDispatch();

  const [show, setShow] = useState({
    startTime: false,
    endTime: false,
  });

  const [scheduleType, setScheduleType] = useState(
    data.current != undefined ? data.current.scheduleType : 'inside',
  );

  const [values, setValues] = useState({
    title: '',
    loaction: '',
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

  const onTextChange = e => {
    const {value, name} = e;

    setValues({
      ...values,
      [name]: value,
    });

    dispatch(changeInput({form: 'input', name, value}));
  };

  const onPickerItemChange = e => {
    const {value, name} = e;

    setValues({
      ...values,
      [name]: value,
    });

    console.log(e);
  };

  const onTimeChange = e => {
    const {value, name} = e;

    setValues({
      ...values,
      [name]: value,
    });

    if (show[name] === false) setShow({...show, [name]: true});
  };

  const changeScheduleType = useCallback(type => {
    setScheduleType(type);
  }, []);

  const props = {
    changeScheduleType: changeScheduleType,
    onTextChange: onTextChange,
    onPickerItemChange: onPickerItemChange,
    onTimeChange: onTimeChange,
    close: close,
    scheduleType,
    title,
    values,
    show,
  };
  return <ScheduleModalPresenter {...props} />;
};

export default ScheduleModalContainer;
