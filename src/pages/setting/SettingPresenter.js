import React from 'react';
import {View, StyleSheet} from 'react-native';
import Container from '../../components/atoms/Container';
import Header from '../../components/organisms/Header';
import ProfileBox from '../../components/molecules/ProfileBox';
import profile from '../../asset/images/profile.jpeg';
import Menu from '../../components/molecules/Menu';

const SettingPresenter = ({userName, userEmail, listItem}) => {
  return (
    <Container>
      <Header marginBottom={48}>SETTING</Header>
      <ProfileBox source={profile} name={userName} email={userEmail} />
      <View style={styles.menu}>
        <Menu listItem={listItem} />
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
