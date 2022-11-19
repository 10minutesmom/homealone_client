import React, {useCallback, useRef, useState, useEffect} from 'react';
import SchedulePresenter from './SchedulePresenter';
import {Animated} from 'react-native';
import data from '../../dummy_data/scheduleData.json';

const ScheduleContainer = () => {
  const [sheetData, setSheetData] = useState({});
  const modalRef = useRef(null);
  const modifyDataRef = useRef({});
  const [sheetVisible, setSheetVisible] = useState(false);
  const day = ['mon', 'tue', 'wed', 'thu', 'fri'];
  const [isVisibleDialog, setIsVisibleDialog] = useState(false);
  const [scheduleData, setScheduleData] = useState([]);
  const [tableTime, setTableTime] = useState([]);
  const fadeAnim = useRef(new Animated.Value(0)).current;

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

  const openSheet = useCallback(
    (data, day, time, hour) => {
      const assignedData = Object.assign(data, {
        startTime: tableTime[time - hour],
        endTime: tableTime[time],
        day: day,
      });
      setSheetData(Object.assign(sheetData, assignedData));
      setSheetVisible(true);
    },
    [tableTime],
  );

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const openDialog = useCallback((id, data) => {
    setSheetVisible(false);
    modalRef.current = id;
    modifyDataRef.current = data;
    setIsVisibleDialog(true);
    fadeIn();
  }, []);

  const createTimeTable = (num, units) => {
    let arr = [];
    units.map(unit => {
      temp = [...new Array(num - 1).keys()].map(e => String(e + 1) + unit);
      temp.splice(0, 0, String(num) + unit);
      arr = [...arr, ...temp];
    });
    return arr;
  };

  const closeDialog = useCallback(() => {
    setIsVisibleDialog(false);
    fadeOut();
  }, []);

  useEffect(() => {
    setTableTime([...createTimeTable(12, ['am', 'pm'])]);
    setScheduleData([...createSchedule()]);
  }, []);

  const props = {
    openSheet: openSheet,
    openDialog: openDialog,
    closeDialog: closeDialog,
    setModalVisible: setSheetVisible,
    fadeAnim,
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
