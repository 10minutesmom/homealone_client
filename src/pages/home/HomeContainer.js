import React, {useState, useEffect} from 'react';
import HomePresenter from './HomePresenter';
import useTimer from '../../hooks/useTimer';
import axios from 'axios';

const HomeContainer = () => {
  const [currentScheduleData, setCurrentScheduleData] = useState({});
  const [kidStatus, setKidStatus] = useState({});
  const [hours, minutes, seconds, setTimer] = useTimer();
  axios.defaults.withCredentials = true;

  const getCurrentSchedule = () => {
    axios
      .get('http://api.whoswork.co.kr/apiserver/schedulerecent')
      .then(response => {
        console.log(response.data);
        setCurrentScheduleData(response.data);
        setTimer(response.data.startHour, response.data.startMin);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getKidStatus = () => {
    axios
      .get('http://api.whoswork.co.kr/apiserverkids/?format=json')
      .then(response => {
        setKidStatus(response.data[0]);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCurrentSchedule();
    getKidStatus();
  }, []);

  const props = {
    hours,
    minutes,
    seconds,
    kidStatus,
    currentScheduleData,
  };
  return <HomePresenter {...props} />;
};

export default HomeContainer;
