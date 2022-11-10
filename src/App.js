import React, {useEffect, useState} from 'react';
import Navigator from './navigators/Navigator';
import {PortalProvider} from '@gorhom/portal';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import Login from './pages/login/LoginContainer';

const App = () => {
  const [isLogggedIn, setIsLogggedIn] = useState(false);
  const googleSigninConfigure = () => {
    GoogleSignin.configure({
      webClientId:
        '901450689454-i3lg8rikoo8d8fmgctahldqfq35t11l9.apps.googleusercontent.com',
    });
  };

  const checkLoggedIn = () => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setIsLogggedIn(true);
        console.log('loggedIn');
      } else {
        setIsLogggedIn(false);
        console.log('loggedOut');
      }
    });
  };

  useEffect(() => {
    googleSigninConfigure();
    checkLoggedIn();
  }, []);

  return (
    <PortalProvider>{isLogggedIn ? <Navigator /> : <Login />}</PortalProvider>
  );
};

export default App;
