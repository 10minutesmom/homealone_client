import React from 'react';
import LoginPresenter from './LoginPresenter';

const LoginContainer = ({navigation}) => {
  const navigate = () => {
    navigation.navigate('HomeTabs');
  };
  const props = {
    navigate: navigate,
  };
  return <LoginPresenter {...props} />;
};

export default LoginContainer;
