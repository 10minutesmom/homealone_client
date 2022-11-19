import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../components/atoms/Text';
import TextWithIcon from '../../components/molecules/TextWithIcon';
import location_icon from '../../asset/images/location_icon.png';
import clock_icon from '../../asset/images/clock_icon.png';
import Button from '../../components/molecules/Button';

const ScheduleSheetPresenter = ({data, onPress}) => {
  return (
    <View style={styles.sheet}>
      <View style={styles.bar} />
      <View>
        <Text size="big" color="black" marginBottom={8}>
          {data['day']}
        </Text>
        <Text size="big" color="black" weight="bold" marginBottom={34}>
          {`${data['startTime']} ~ ${data['endTime']}`}
        </Text>
        <View style={styles.textBox}>
          <Text size="regular" color="black" weight="bold" marginRight={8}>
            {data['title']}
          </Text>
          <Text size="small" color="grey">
            {data['scheduleType']}
          </Text>
        </View>
        <TextWithIcon source={location_icon} marginBottom={6}>
          {data['location']}
        </TextWithIcon>
        <TextWithIcon source={clock_icon} marginBottom={22}>
          {`준비시간: ${data['readyTime']}분, 이동시간: ${data['movingTime']}분`}
        </TextWithIcon>
        <View style={styles.buttons}>
          <View style={{marginRight: 8}}>
            <Button border={true} width={132} onPress={() => onPress(0, data)}>
              수정하기
            </Button>
          </View>

          <Button border={false} width={132} onPress={() => onPress(1)}>
            삭제하기
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sheet: {
    width: '100%',
    height: 312,
    backgroundColor: 'white',
    paddingHorizontal: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  textBox: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  buttons: {
    flexDirection: 'row',
  },
  bar: {
    width: 50,
    height: 5,
    borderRadius: 30,
    backgroundColor: '#d9d9d9',
    position: 'absolute',
    top: 8,
  },
});

export default ScheduleSheetPresenter;
