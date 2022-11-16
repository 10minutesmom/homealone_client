import React, {useState, useCallback, useRef, useEffect} from 'react';
import ScheduleModalPresenter from './ScheduleModalPresenter';
import {useDispatch} from 'react-redux';
import {changeInput} from '../../redux/reducers/Input';

const ScheduleModalContainer = ({close, data}) => {
  let title = data != undefined ? '수정하기' : '추가하기';
  const dispatch = useDispatch();

  const [scheduleType, setScheduleType] = useState(
    data != undefined ? data.scheduleType : 'inside',
  );

  const [values, setValues] = useState({
    title: '',
    loaction: '',
    day: '',
    readyTime: '',
    movingTime: '',
  });

  useEffect(() => {
    if (data != undefined) {
      setValues({
        ...values,
        movingTime: data.movingTime,
        title: data.title,
        location: data.location,
        day: data.day,
        readyTime: data.readyTime,
      });
    }
  }, []);

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

  const changeScheduleType = useCallback(type => {
    setScheduleType(type);
  }, []);

  const props = {
    changeScheduleType: changeScheduleType,
    onTextChange: onTextChange,
    onPickerItemChange: onPickerItemChange,
    close: close,
    scheduleType,
    title,
    data,
    values,
  };
  return <ScheduleModalPresenter {...props} />;
};

export default ScheduleModalContainer;
