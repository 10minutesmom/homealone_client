import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../components/atoms/Text';
import TextWithIcon from '../../components/molecules/TextWithIcon';
import location_icon from '../../asset/images/location_icon.png';
import Button from '../../components/molecules/Button';

const ScheduleSheetPresenter = ({day, time, title, type, location}) => {
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
          <Text
            size="regular"
            color="black"
            weight="bold"
            marginBottom={16}
            marginRight={8}>
            {title}
          </Text>
          <Text size="small" color="grey">
            {type}
          </Text>
        </View>
        <TextWithIcon source={location_icon} marginBottom={22}>
          {location}
        </TextWithIcon>
        <View style={styles.buttons}>
          <View style={{marginRight: 8}}>
            <Button border={true} width={132}>
              수정하기
            </Button>
          </View>

          <Button border={false} width={132}>
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
