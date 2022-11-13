import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../components/atoms/Text';
import TextWithIcon from '../../components/molecules/TextWithIcon';
import location_icon from '../../asset/images/location_icon.png';
import clock_icon from '../../asset/images/clock_icon.png';
import Button from '../../components/molecules/Button';

const ScheduleSheetPresenter = props => {
  const {day, time, title, type, location, readyTime, movingTime, onPress} =
    props;
  return (
    <View style={styles.sheet}>
      <View style={styles.bar} />
      <View>
        <Text size="big" color="black" marginBottom={8}>
          {day}
        </Text>
        <Text size="big" color="black" weight="bold" marginBottom={34}>
          {time}
        </Text>
        <View style={styles.textBox}>
          <Text size="regular" color="black" weight="bold" marginRight={8}>
            {title}
          </Text>
          <Text size="small" color="grey">
            {type}
          </Text>
        </View>
        <TextWithIcon source={location_icon} marginBottom={6}>
          {location}
        </TextWithIcon>
        <TextWithIcon source={clock_icon} marginBottom={22}>
          {`준비시간: ${readyTime}, 이동시간: ${movingTime}`}
        </TextWithIcon>
        <View style={styles.buttons}>
          <View style={{marginRight: 8}}>
            <Button border={true} width={132} onPress={() => onPress(0, props)}>
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
