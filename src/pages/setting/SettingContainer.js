import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import SettingPresenter from './SettingPresenter';
import auth from '@react-native-firebase/auth';

const SettingContainer = () => {
  const {user} = useSelector(state => state.userData);
  const userName = user.displayName;
  const userEmail = user.email;

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

  const props = {
    userName,
    userEmail,
    listItem,
  };

  return <SettingPresenter {...props} />;
};

export default SettingContainer;
