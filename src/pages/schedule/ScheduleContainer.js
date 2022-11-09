import React, {useCallback, useRef, useState} from 'react';
import SchedulePresenter from './SchedulePresenter';
import Animated from 'react-native-reanimated';

const ScheduleContainer = () => {
  const sheetRef = useRef(null);
  const modalRef = useRef(0);
  const modifyDataRef = useRef({});
  const fall = useRef(new Animated.Value(1)).current;
  const [isVisibleDialog, setIsVisibleDialog] = useState(false);

  const animatedShadowOpacity = fall.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 0],
  });

  const openSheet = useCallback(() => {
    sheetRef.current.snapTo(0);
  }, []);

  const openDialog = useCallback((id, ...props) => {
    sheetRef.current.snapTo(1);
    modalRef.current = id;
    modifyDataRef.current = props;
    setIsVisibleDialog(true);
  });

  const closeDialog = useCallback(() => {
    setIsVisibleDialog(false);
  });

  const props = {
    openSheet: openSheet,
    animatedShadowOpacity: animatedShadowOpacity,
    openDialog: openDialog,
    closeDialog: closeDialog,
    fall,
    sheetRef,
    modalRef,
    modifyDataRef,
    isVisibleDialog,
  };
  return <SchedulePresenter {...props} />;
};

export default ScheduleContainer;
