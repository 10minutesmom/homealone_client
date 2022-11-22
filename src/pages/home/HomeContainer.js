import React, {useState, useEffect} from 'react';
import HomePresenter from './HomePresenter';
import useTimer from '../../hooks/useTimer';

const HomeContainer = () => {
  const [minutes, seconds] = useTimer(0, 5);

  const props = {
    minutes,
    seconds,
  };
  return <HomePresenter {...props} />;
};

export default HomeContainer;
