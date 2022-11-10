import React from 'react';
import SettingPresenter from './SettingPresenter';
import auth from '@react-native-firebase/auth';

const SettingContainer = () => {
  const signOut = () => {
    auth().signOut();
  };

  const goToHelpPage = () => {
    console.log('check');
  };

  const listItem = [
    {title: '로그아웃', method: signOut},
    {title: '도움말', method: goToHelpPage},
  ];

  return <SettingPresenter listItem={listItem} />;
};

export default SettingContainer;
