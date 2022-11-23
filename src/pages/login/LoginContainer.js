import React, {useState} from 'react';
import LoginPresenter from './LoginPresenter';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const LoginContainer = () => {
  const [isLoading, setIsLoading] = useState(false);

  const loginWithGoogle = async () => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    setIsLoading(true);
    return auth().signInWithCredential(googleCredential);
  };

  const props = {
    loginWithGoogle: loginWithGoogle,
    isLoading,
  };

  return <LoginPresenter {...props} />;
};

export default LoginContainer;
