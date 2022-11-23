import React, {useState, useCallback, useEffect, useRef} from 'react';
import ScheduleModalPresenter from './ScheduleModalPresenter';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import createSnackbar from '../../utils/createSnackbar';

const ScheduleModalContainer = ({close, getScheduleData, data}) => {
  let title = data.current != undefined ? '수정하기' : '추가하기';
  const prevTimeRef = useRef({});

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
    startTime: new Date(2022, 2, 2, 0, 0),
    endTime: new Date(2022, 2, 2, 0, 0),
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
        startTime: new Date(
          2022,
          2,
          2,
          Number(data.current.startHour),
          Number(data.current.startMin),
        ),
        endTime: new Date(
          2022,
          2,
          2,
          data.current.endMin === '50'
            ? Number(data.current.endHour) + 1
            : Number(data.current.endHour),
          data.current.endMin === '50'
            ? '00'
            : Number(data.current.endMin) + 10,
        ),
      });

      setShow({
        ...show,
        startTime: true,
        endTime: true,
      });

      prevTimeRef.current = {
        startHour: data.current.startHour,
        startMin: data.current.startMin,
        endHour: data.current.endHour,
        endMin: data.current.endMin,
        day: data.current.day,
      };
    }
  }, []);

  const isValuesEmpty = () => {
    if (values.title === '') return '일정이름';
    if (values.day === '') return '요일';
    if (
      values.startTime.getHours() === values.endTime.getHours() &&
      values.startTime.getMinutes() === values.endTime.getMinutes()
    )
      return '시간';
    if (values.location === '') return '장소';
    if (values.readyTime === '') return '준비시간';
    if (values.movingTime === '') return '이동시간';

    return false;
  };

  const createSchedule = async () => {
    if ((result = isValuesEmpty())) {
      createSnackbar(`${result}을 입력해주세요!`);
      return;
    }

    const prevId = await getScheduleId();
    const newId = (Number(prevId) + 1).toString();
    storeScheduleId(newId);

    axios
      .post('http://127.0.0.1:8000/apiserver/scheduleadd', {
        uid: '',
        id: newId,
        title: values.title,
        time: {
          day: values.day,
          startHour: values.startTime.getHours().toString().padStart(2, '0'),
          startMin: values.startTime.getMinutes().toString().padStart(2, '0'),
          endHour: values.endTime.getHours().toString().padStart(2, '0'),
          endMin: values.endTime.getMinutes().toString().padStart(2, '0'),
        },
        scheduleType: scheduleType,
        location: values.location,
        readyTime: values.readyTime,
        movingTime: values.movingTime,
      })
      .then(response => {
        createSnackbar('스케쥴이 생성되었습니다!');
      })
      .catch(error => {
        createSnackbar('스케쥴 생성을 실패했습니다!');
      })
      .finally(() => {
        getScheduleData();
      });

    close();
  };

  const editSchedule = () => {
    if ((result = isValuesEmpty())) {
      createSnackbar(`${result}을 입력해주세요!`);
      return;
    }

    axios
      .post('http://127.0.0.1:8000/apiserver/schedulemodify', {
        uid: '',
        title: values.title,
        time: {
          day: values.day,
          startHour: values.startTime.getHours().toString().padStart(2, '0'),
          startMin: values.startTime.getMinutes().toString().padStart(2, '0'),
          endHour: values.endTime.getHours().toString().padStart(2, '0'),
          endMin: values.endTime.getMinutes().toString().padStart(2, '0'),
        },
        prevTime: prevTimeRef.current,
        scheduleType: scheduleType,
        location: values.location,
        readyTime: values.readyTime,
        movingTime: values.movingTime,
      })
      .then(response => {
        createSnackbar('스케쥴이 수정되었습니다!');
      })
      .catch(error => {
        createSnackbar('스케쥴 수정을 실패했습니다!');
      })
      .finally(() => {
        getScheduleData();
      });

    close();
  };

  const getScheduleId = async () => {
    try {
      const value = await AsyncStorage.getItem('id');
      if (value !== null) {
        return value;
      } else {
        return '0';
      }
    } catch (e) {
      console.log('get data error');
    }
  };

  const storeScheduleId = async value => {
    try {
      await AsyncStorage.setItem('id', value);
    } catch (e) {
      console.log('store data error');
    }
  };

  const onValueChange = e => {
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
    onValueChange: onValueChange,
    createSchedule: createSchedule,
    editSchedule: editSchedule,
    close: close,
    scheduleType,
    title,
    values,
    show,
  };
  return <ScheduleModalPresenter {...props} />;
};

export default ScheduleModalContainer;
