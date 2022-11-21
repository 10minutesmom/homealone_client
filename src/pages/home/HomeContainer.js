import React, {useState, useEffect} from 'react';
import HomePresenter from './HomePresenter';

const HomeContainer = () => {
  const [minutes, setMinutes] = useState(parseInt(0));
  const [seconds, setSeconds] = useState(parseInt(10));

  // useEffect(() => {
  //   console.log('다시 설정');
  // });

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  const props = {
    minutes,
    seconds,
  };
  return <HomePresenter {...props} />;
};

export default HomeContainer;
