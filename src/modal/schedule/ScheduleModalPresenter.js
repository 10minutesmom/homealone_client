import React from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Text from '../../components/atoms/Text';
import Icon from '../../components/atoms/Icon';
import close_icon from '../../asset/images/close_icon.png';
import Input from '../../components/atoms/Input';
import Button from '../../components/molecules/Button';
import Picker from '../../components/atoms/Picker';
import TimePicker from '../../components/atoms/TimePicker';

const ScheduleModalPresenter = ({
  changeScheduleType,
  onValueChange,
  createSchedule,
  scheduleType,
  close,
  title,
  values,
  show,
}) => {
  return (
    <View style={styles.modal}>
      <View style={styles.header}>
        <Text size="regular" weight="bold" color="blacm">
          {`일정 ${title}`}
        </Text>
        <TouchableOpacity onPress={() => close()}>
          <Icon size="small" source={close_icon} />
        </TouchableOpacity>
      </View>
      <Input
        hint="일정이름"
        marginBottom={20}
        value={values.title}
        name="title"
        handle={onValueChange}
      />
      <Picker
        hint="요일"
        marginBottom={20}
        name="day"
        item={[
          {label: '월요일', value: 'mon', key: '1'},
          {label: '화요일', value: 'tue', key: '2'},
          {label: '수요일', value: 'wed', key: '3'},
          {label: '목요일', value: 'thu', key: '4'},
          {label: '금요일', value: 'fri', key: '5'},
        ]}
        value={values.day}
        handle={onValueChange}
      />
      <TimePicker
        marginBottom={20}
        value={values}
        handle={onValueChange}
        show={show}
      />
      <Input
        hint="장소"
        marginBottom={20}
        value={values.location}
        name="location"
        handle={onValueChange}
      />
      <Picker
        hint="준비 시간"
        marginBottom={20}
        name="readyTime"
        item={[
          {label: '10분', value: '10', key: '1'},
          {label: '20분', value: '20', key: '2'},
          {label: '30분', value: '30', key: '3'},
          {label: '40분', value: '40', key: '4'},
          {label: '50분', value: '50', key: '5'},
        ]}
        value={values.readyTime}
        handle={onValueChange}
      />
      <Picker
        hint="이동 시간"
        marginBottom={32}
        name="movingTime"
        item={[
          {label: '10분', value: '10', key: '1'},
          {label: '20분', value: '20', key: '2'},
          {label: '30분', value: '30', key: '3'},
          {label: '40분', value: '40', key: '4'},
          {label: '50분', value: '50', key: '5'},
          {label: '60분', value: '60', key: '6'},
        ]}
        value={values.movingTime}
        handle={onValueChange}
      />

      <Text size="small" color="black" fixHeight={30} marginBottom={10}>
        집안에서의 일정인지 집 밖에서의 일정인지{'\n'}선택해수세요!{' '}
      </Text>
      <View style={{flexDirection: 'row', marginBottom: 34}}>
        <View style={{marginRight: 12}}>
          <Button
            width={48}
            border={scheduleType != 'inside'}
            onPress={() => changeScheduleType('inside')}>
            내부
          </Button>
        </View>
        <Button
          width={48}
          border={scheduleType != 'outside'}
          onPress={() => changeScheduleType('outside')}>
          외부
        </Button>
      </View>
      <Button border={false} width="100%" onPress={createSchedule}>
        {title}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: 300,
    height: 612,
    paddingHorizontal: 22,
    justifyContent: 'center',
    backgroundColor: '#F4F4F4',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [
      {
        translateX: -Dimensions.get('window').width * 0.38,
      },
    ],
    borderRadius: 12,
    top: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 26,
  },
});

export default ScheduleModalPresenter;
