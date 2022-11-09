import React, {useEffect} from 'react';
import LoginPresenter from './LoginPresenter';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const LoginContainer = ({navigation}) => {
  const navigate = () => {
    navigation.navigate('HomeTabs');
  };

  const loginWithGoogle = async () => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };

  const props = {
    navigate: navigate,
    loginWithGoogle: loginWithGoogle,
  };

  return <LoginPresenter {...props} />;
};

export default LoginContainer;
