import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Container from '../../components/atoms/Container';
import Header from '../../components/organisms/Header';
import Text from '../../components/atoms/Text';
import Card from '../../components/atoms/Card';
import TextWithIcon from '../../components/molecules/TextWithIcon';
import location_icon from '../../asset/images/location_icon.png';
import clock_icon from '../../asset/images/clock_icon.png';

const HomePresenter = ({minutes, seconds, kidStatus, currentScheduleData}) => {
  console.log(currentScheduleData);
  return (
    <Container>
      <Header marginBottom={62}>HOME</Header>
      <View style={styles.card}>
        <Text color="black" size="semi" weight="bold" marginBottom={8}>
          아이 위치
        </Text>
        <Text color="grey" size="small" marginBottom={14}>
          아이 위치와 상태를 볼 수 있습니다.
        </Text>
        <Card height={152}>
          <View style={contentStyle('row').content}>
            <View>
              <Text size="regular" weight="bold" color="black" marginBottom={8}>
                {kidStatus[0].is_kid_home == 0
                  ? '외출중'
                  : `집 내부 - ${kidStatus[0].where_is_kid}`}
              </Text>
              <Text size="medium" color="black" fixHeight={34}>
                {kidStatus[0].is_kid_home == 0
                  ? '집 안에서 아이의 위치를 찾지\n못했습니당'
                  : `아이를 ${kidStatus[0].where_is_kid}에서 찾았습니당${'\n'}${
                      kidStatus[0].where_is_kid
                    }에 ${kidStatus[0].is_kid_ready}하고 있네요~`}
              </Text>
            </View>
            <Image
              style={styles.img}
              source={require('../../asset/images/state.png')}
            />
          </View>
        </Card>
      </View>
      <View style={styles.card}>
        <Text color="black" size="semi" weight="bold" marginBottom={8}>
          스케쥴
        </Text>

        <Text color="grey" size="small" marginBottom={14}>
          가장 최근의 스케쥴을 확인할 수 있습니다.
        </Text>

        <Card height={212}>
          <View style={contentStyle('column').content}>
            <View style={marginStyle(26, 'row').margin}>
              <Text size="regular" weight="bold" color="black" marginRight={8}>
                {currentScheduleData.title}
              </Text>
              <Text size="small" color="grey">
                {currentScheduleData.scheduleType}
              </Text>
            </View>
            <Text size="small" color="grey" marginBottom={2}>
              남은시간
            </Text>
            <Text size="extra" color="black" weight="bold" marginBottom={10}>
              {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
            </Text>
            <TextWithIcon source={location_icon} marginBottom={6}>
              {currentScheduleData.location}
            </TextWithIcon>
            <TextWithIcon source={clock_icon}>15 : 00</TextWithIcon>
          </View>
        </Card>
      </View>
    </Container>
  );
};

const marginStyle = (margin, type) =>
  StyleSheet.create({
    margin: {
      marginBottom: margin,
      flexDirection: type == 'row' ? 'row' : 'column',
      alignItems: type == 'row' ? 'flex-end' : '',
    },
  });

const contentStyle = type =>
  StyleSheet.create({
    content: {
      width: '100%',
      paddingHorizontal: 20,
      flexDirection: type == 'row' ? 'row' : 'column',
      justifyContent: type == 'row' ? 'space-between' : 'center',
    },
  });

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingHorizontal: 20,
  },
  textBox: {
    alignItems: 'flex-start',
  },
  text: {
    width: 180,
  },
  img: {
    width: 65,
    height: 65,
  },
});

export default HomePresenter;
