import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Container from '../../components/atoms/Container';
import Header from '../../components/organisms/Header';
import add from '../../asset/images/add_icon.png';
import Text from '../../components/atoms/Text';
import {Dimensions} from 'react-native';
import DailyScheduleMatrix from '../../components/molecules/DailyScheduleMatrix';
import BottomSheet from 'reanimated-bottom-sheet';
import ScheduleSheetContainer from '../../sheet/ScheduleSheet/ScheduleSheetContainer';
import {Portal} from '@gorhom/portal';
import Animated from 'react-native-reanimated';
import Dialog from 'react-native-popup-dialog';
import ScheduleModal from '../../modal/schedule/ScheduleModalContainer';
import BasicModal from '../../modal/basic/BasicModalContainer';

const SchedulePresenter = ({
  openSheet,
  animatedShadowOpacity,
  openDialog,
  closeDialog,
  fall,
  sheetRef,
  modalRef,
  modifyDataRef,
  isVisibleDialog,
}) => {
  const day = ['mon', 'tue', 'wed', 'thu', 'fri'];
  const time = [
    '12am',
    '1am',
    '2am',
    '12am',
    '1am',
    '2am',
    '12am',
    '1am',
    '2am',
    '12am',
    '1am',
    '2am',
    '12am',
    '1am',
    '2am',
    '12am',
    '1am',
    '2am',
  ];
  const data = [
    [1, 1, 1, 1],
    [0, 0],
    [1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  return (
    <Container color="white">
      <Header source={add} marginBottom={42} onPress={openDialog}>
        SCHEDULE
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.schedule}>
          <View style={styles.time}>
            {time.map((item, index) => {
              return (
                <Text key={index} size="small" color="grey" marginBottom={26}>
                  {item}
                </Text>
              );
            })}
          </View>
          {day.map((item, index) => {
            return (
              <DailyScheduleMatrix
                key={index}
                width={Dimensions.get('window').width - 64}
                day={item}
                dailyData={data}
                onPress={openSheet}
              />
            );
          })}
        </View>
      </ScrollView>
      <Portal>
        <BottomSheet
          ref={sheetRef}
          snapPoints={[312, 0]}
          borderRadius={30}
          callbackNode={fall}
          renderContent={() => {
            return (
              <ScheduleSheetContainer
                day="월요일"
                time="10:00~10:00"
                title="학교가기"
                type="내부일정"
                location="한양대학교"
                readyTime="30분"
                movingTime="1시간"
                onPress={openDialog}
              />
            );
          }}
          initialSnap={1}
        />
      </Portal>
      <Animated.View
        pointerEvents="none"
        style={[
          {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: '#000',
            opacity: animatedShadowOpacity,
          },
        ]}
      />
      <Dialog visible={isVisibleDialog} onTouchOutside={() => closeDialog()}>
        {modalRef.current == 0 ? (
          <ScheduleModal close={closeDialog} data={modifyDataRef} />
        ) : (
          <BasicModal close={closeDialog} />
        )}
      </Dialog>
    </Container>
  );
};

const styles = StyleSheet.create({
  schedule: {
    flexDirection: 'row',
    marginBottom: 100,
  },
  time: {
    alignItems: 'flex-end',
    marginRight: 4,
    marginTop: 22,
  },
});

export default SchedulePresenter;
