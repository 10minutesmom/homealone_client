import React, {useState, useCallback, useRef, useEffect} from 'react';
import ScheduleModalPresenter from './ScheduleModalPresenter';
import {useDispatch} from 'react-redux';
import {changeInput} from '../../redux/reducers/Input';

const ScheduleModalContainer = ({close, data}) => {
  let title = data != undefined ? '수정하기' : '추가하기';
  const [inputs, setInputs] = useState({
    title: '',
    loaction: '',
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (data != undefined) {
      setInputs({
        ...inputs,
        title: data.title,
        location: data.location,
      });
    }
  }, []);

  const handleChange = e => {
    const {text, name} = e;

    setInputs({
      ...inputs,
      [name]: text,
    });

    dispatch(changeInput({form: 'input', name, text}));
  };

  const [scheduleType, setScheduleType] = useState(
    data != undefined ? data.scheduleType : 'inside',
  );

  const changeScheduleType = useCallback(type => {
    setScheduleType(type);
  }, []);

  const props = {
    changeScheduleType: changeScheduleType,
    handleChange: handleChange,
    close: close,
    scheduleType,
    title,
    data,
    inputs,
  };
  return <ScheduleModalPresenter {...props} />;
};

export default ScheduleModalContainer;
