import React, {useCallback, useRef, useState, useEffect} from 'react';
import SchedulePresenter from './SchedulePresenter';
import Animated from 'react-native-reanimated';
import data from '../../dummy_data/scheduleData.json';

const ScheduleContainer = () => {
  const [sheetData, setSheetData] = useState({});
  const modalRef = useRef(null);
  const [sheetVisible, setSheetVisible] = useState(false);
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

  const openSheet = useCallback((data, day, time, hour) => {
    const assingedTime = `${tableTime[time - hour]} ~ ${tableTime[time]}`;
    const assignedData = Object.assign(data, {time: assingedTime, day: day});
    setSheetData(Object.assign(sheetData, assignedData));
    setSheetVisible(true);
  }, []);

  const openDialog = useCallback((id, ...props) => {
    setSheetVisible(false);
    modalRef.current = id;
    modifyDataRef.current = props;
    setIsVisibleDialog(true);
  }, []);

  const closeDialog = useCallback(() => {
    setIsVisibleDialog(false);
  }, []);

  useEffect(() => {
    setScheduleData([...createSchedule()]);
  }, []);

  const props = {
    openSheet: openSheet,
    openDialog: openDialog,
    closeDialog: closeDialog,
    setModalVisible: setSheetVisible,
    sheetData,
    modalRef,
    modifyDataRef,
    isVisibleDialog,
    day,
    tableTime,
    scheduleData,
    sheetVisible,
  };
  return <SchedulePresenter {...props} />;
};

export default ScheduleContainer;
