import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from '../../components/atoms/Text';
import Icon from '../../components/atoms/Icon';
import close_icon from '../../asset/images/close_icon.png';
import Input from '../../components/atoms/Input';
import Button from '../../components/molecules/Button';

const ScheduleModalPresenter = ({
  changeScheduleType,
  scheduleType,
  close,
  title,
  data,
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
        value={data != undefined ? data.title : ''}
      />
      <Input
        hint="요일 및 시간"
        marginBottom={20}
        value={data != undefined ? data.day + ' ' + data.time : ''}
      />
      <Input
        hint="장소"
        marginBottom={20}
        value={data != undefined ? data.location : ''}
      />
      <Input
        hint="준비 시간"
        marginBottom={20}
        value={data != undefined ? data.readyTime.toString() + '분' : ''}
      />
      <Input
        hint="이동 시간"
        marginBottom={32}
        value={data != undefined ? data.movingTime.toString() + '분' : ''}
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
      <Button border={false} width="100%">
        {title}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: 300,
    height: 552,
    paddingHorizontal: 22,
    justifyContent: 'center',
    backgroundColor: '#F4F4F4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 26,
  },
});

export default ScheduleModalPresenter;
