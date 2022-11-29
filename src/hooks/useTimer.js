import React, {useState, useEffect, useCallback} from 'react';

const useTimer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const setTimer = useCallback((startHour, startMin) => {
    const now = new Date();
    const min =
      (parseInt(startHour) - now.getHours()) * 60 +
      (parseInt(startMin) - now.getMinutes() - 1);
    setHours(parseInt(min / 60));
    setMinutes(min % 60);
    setSeconds(60 - now.getSeconds());
  }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          if (parseInt(hours) === 0) {
            clearInterval(countdown);
          } else {
            setHours(parseInt(hours) - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [hours, minutes, seconds]);

  return [hours, minutes, seconds, setTimer];
};

export default useTimer;
