import React, {useEffect, useCallback, useRef} from 'react';
import SchedulePresenter from './SchedulePresenter';
import Animated from 'react-native-reanimated';

const ScheduleContainer = () => {
  const sheetRef = useRef(null);
  const fall = useRef(new Animated.Value(1)).current;

  const animatedShadowOpacity = fall.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 0],
  });

  const openSheet = useCallback(() => {
    sheetRef.current.snapTo(0);
  }, []);

  const props = {
    openSheet: openSheet,
    sheetRef: sheetRef,
    animatedShadowOpacity: animatedShadowOpacity,
    fall,
  };
  return <SchedulePresenter {...props} />;
};

export default ScheduleContainer;
