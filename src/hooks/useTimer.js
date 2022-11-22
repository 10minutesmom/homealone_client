import React, {useState, useEffect} from 'react';

const useTimer = (min, sec) => {
  const [minutes, setMinutes] = useState(parseInt(min));
  const [seconds, setSeconds] = useState(parseInt(sec));

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

  return [minutes, seconds];
};

export default useTimer;
