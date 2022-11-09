import React from 'react';
import {View, StyleSheet} from 'react-native';
import Container from '../../components/atoms/Container';
import Header from '../../components/organisms/Header';
import ProfileBox from '../../components/molecules/ProfileBox';
import profile from '../../asset/images/profile.jpeg';
import Menu from '../../components/molecules/Menu';

const SettingPresenter = () => {
  return (
    <Container>
      <Header marginBottom={48}>SETTING</Header>
      <ProfileBox
        source={profile}
        name={'김동현'}
        email={'lmkn5342@gmail.com'}
      />
      <View style={styles.menu}>
        <Menu item={['로그아웃', '도움말']} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  menu: {
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default SettingPresenter;
