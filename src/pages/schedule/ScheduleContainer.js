import React, {useCallback, useRef, useState, useEffect} from 'react';
import SchedulePresenter from './SchedulePresenter';
import Animated from 'react-native-reanimated';
import data from '../../dummy_data/scheduleData.json';

const ScheduleContainer = () => {
  const sheetRef = useRef(null);
  const modalRef = useRef(0);
  const modifyDataRef = useRef({});
  const day = ['mon', 'tue', 'wed', 'thu', 'fri'];
  const tableTime = [
    '12am',
    '1am',
    '2am',
    '3am',
    '4am',
    '5am',
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm',
    '9pm',
    '10pm',
    '11pm',
    '12am',
  ];
  const fall = useRef(new Animated.Value(1)).current;
  const [isVisibleDialog, setIsVisibleDialog] = useState(false);
  const [scheduleData, setScheduleData] = useState([]);

  const createSchedule = () => {
    let dayArray = [];
    for (let day of Object.keys(data)) {
      let temp = [];
      let timeArray = [];
      let prevId = data[day]['00']['00']['id'];
      temp.push(data[day]['00']['00']);
      for (let i = 1; i < 24; i++) {
        let time = i.toString().padStart(2, '0');
        if (prevId == data[day][time]['00']['id']) {
          if (prevId != '0') temp.push(data[day][time]['00']);
          else temp.push({id: '0'});
        } else {
          timeArray.push(temp);
          temp = [];
          prevId = data[day][time]['00']['id'];
          if (prevId != '0') temp.push(data[day][time]['00']);
          else temp.push({id: '0'});
        }
      }
      if (temp.length !== 0) timeArray.push(temp);
      dayArray.push(timeArray);
    }
    return dayArray;
  };

  const animatedShadowOpacity = fall.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 0],
  });

  const openSheet = useCallback(() => {
    sheetRef.current.snapTo(0);
  }, []);

  const openDialog = useCallback((id, ...props) => {
    sheetRef.current.snapTo(1);
    modalRef.current = id;
    modifyDataRef.current = props;
    setIsVisibleDialog(true);
  });

  const closeDialog = useCallback(() => {
    setIsVisibleDialog(false);
  });

  useEffect(() => {
    setScheduleData([...createSchedule()]);
  }, []);

  const props = {
    openSheet: openSheet,
    animatedShadowOpacity: animatedShadowOpacity,
    openDialog: openDialog,
    closeDialog: closeDialog,
    fall,
    sheetRef,
    modalRef,
    modifyDataRef,
    isVisibleDialog,
    day,
    tableTime,
    scheduleData,
  };
  return <SchedulePresenter {...props} />;
};

export default ScheduleContainer;
