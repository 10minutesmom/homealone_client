import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Container from '../../components/atoms/Container';
import Header from '../../components/organisms/Header';
import add from '../../asset/images/add_icon.png';
import Text from '../../components/atoms/Text';
import {Dimensions} from 'react-native';
import DailyScheduleMatrix from '../../components/molecules/DailyScheduleMatrix';
import {Portal} from '@gorhom/portal';
import Dialog from 'react-native-popup-dialog';
import ScheduleModal from '../../modal/schedule/ScheduleModalContainer';
import BasicModal from '../../modal/basic/BasicModalContainer';
import BottomSheet from '../../sheet/BottomSheet';

const SchedulePresenter = ({
  openSheet,
  openDialog,
  closeDialog,
  setModalVisible,
  sheetData,
  modalRef,
  modifyDataRef,
  isVisibleDialog,
  day,
  tableTime,
  scheduleData,
  sheetVisible,
}) => {
  return (
    <Container color="white">
      <Header source={add} marginBottom={42} onPress={openDialog}>
        SCHEDULE
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.schedule}>
          <View style={styles.time}>
            {tableTime.map((item, index) => {
              return (
                <Text key={index} size="small" color="grey" marginBottom={26}>
                  {item}
                </Text>
              );
            })}
          </View>
          {scheduleData.map((item, index) => {
            return (
              <DailyScheduleMatrix
                key={index}
                width={Dimensions.get('window').width - 64}
                day={day[index]}
                dailyData={item}
                onPress={openSheet}
              />
            );
          })}
        </View>
      </ScrollView>
      <Portal>
        <BottomSheet
          modalVisible={sheetVisible}
          setModalVisible={setModalVisible}
          data={sheetData}
          onPress={openDialog}
        />
      </Portal>
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
