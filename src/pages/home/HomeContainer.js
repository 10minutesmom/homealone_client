import React, {useState, useEffect} from 'react';
import HomePresenter from './HomePresenter';
import useTimer from '../../hooks/useTimer';
import axios from 'axios';

const HomeContainer = () => {
  const [currentScheduleData, setCurrentScheduleData] = useState({});
  const [kidStatus, setKidStatus] = useState({});
  const [minutes, seconds] = [0, 0];

  const getCurrentSchedule = () => {
    axios
      .get('http://127.0.0.1:8000/apiserver/schedulerecent')
      .then(response => {
        setCurrentScheduleData(response.data);
        // minutes, seconds = useTimer(0, response.data)
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getKidStatus = () => {
    axios
      .get('http://127.0.0.1:8000/apiserverkids/?format=json')
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
    minutes,
    seconds,
    kidStatus,
    currentScheduleData,
  };
  return <HomePresenter {...props} />;
};

export default HomeContainer;
