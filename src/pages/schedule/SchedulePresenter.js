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

const SchedulePresenter = ({openSheet, sheetRef}) => {
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
    <Container color="white" center={false}>
      <Header source={add}>SCHEDULE</Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.schedule}>
          <View style={styles.time}>
            {time.map(item => {
              return (
                <Text size="small" color="grey" marginBottom={26}>
                  {item}
                </Text>
              );
            })}
          </View>
          {day.map(item => {
            return (
              <DailyScheduleMatrix
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
          snapPoints={[450, 0]}
          borderRadius={10}
          renderContent={ScheduleSheetContainer}
          initialSnap={1}
        />
      </Portal>
    </Container>
  );
};

const styles = StyleSheet.create({
  schedule: {
    flexDirection: 'row',
    marginTop: 116,
    marginBottom: 100,
  },
  time: {
    alignItems: 'flex-end',
    marginRight: 4,
    marginTop: 22,
  },
});

export default SchedulePresenter;
