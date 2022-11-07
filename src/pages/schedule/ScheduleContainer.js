import React, {useEffect, useCallback, useRef} from 'react';
import SchedulePresenter from './SchedulePresenter';

const ScheduleContainer = () => {
  const sheetRef = useRef(null);
  const openSheet = useCallback(() => {
    sheetRef.current.snapTo(0);
  }, []);

  const props = {
    openSheet: openSheet,
    sheetRef: sheetRef,
  };
  return <SchedulePresenter {...props} />;
};

export default ScheduleContainer;
