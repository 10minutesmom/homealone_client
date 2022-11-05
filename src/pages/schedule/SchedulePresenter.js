import React from 'react';
import {View} from 'react-native';
import Container from '../../components/atoms/Container';
import Header from '../../components/organisms/Header';
import add from '../../asset/images/add_icon.png';

const SchedulePresenter = () => {
  return (
    <Container color="white">
      <Header source={add}>SCHEDULE</Header>
    </Container>
  );
};

export default SchedulePresenter;
