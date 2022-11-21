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
    let dayArr = [];
    for (let day of Object.keys(data)) {
      let timeArr = [];
      let count = 0;
      let startHour = '00';
      let startMin = '00';
      let endHour = '00';
      let endMin = '00';
      let prevData = data[day]['00']['00'];
      for (let i = 0; i < 24; i++) {
        let hour = i.toString().padStart(2, '0');
        for (let j = 0; j < 6; j++) {
          let min = (j * 10).toString().padStart(2, '0');
          if (prevData['id'] == data[day][hour][min]['id']) {
            endHour = hour;
            endMin = min;
            count += 1;
          } else {
            timeArr.push({
              data: prevData,
              count: count,
              time: {
                startHour: startHour,
                startMin: startMin,
                endHour: endHour,
                endMin: endMin,
              },
            });
            count = 1;
            prevData = data[day][hour][min];
            startHour = hour;
            startMin = min;
          }
        }
      }
      if (count > 0) {
        timeArr.push({
          data: prevData,
          count: count,
          time: {
            startHour: startHour,
            startMin: startMin,
            endHour: endHour,
            endMin: endMin,
          },
        });
      }
      dayArr.push(timeArr);
    }
    return dayArr;
  };

  const openSheet = useCallback(
    (data, day, time) => {
      const assignedData = Object.assign(data, {
        startHour: time.startHour,
        startMin: time.startMin,
        endHour: time.endHour,
        endMin: time.endMin,
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
