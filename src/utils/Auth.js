import React, {useEffect, useState, useRef} from 'react';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import Login from '../pages/login/LoginContainer';
import Navigator from '../navigators/Navigator';
import {setUser} from '../redux/reducers/UserData';

const Auth = () => {
  const [isLogggedIn, setIsLogggedIn] = useState(false);
  const dispatch = useDispatch();
  const checkLoggedIn = () => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setIsLogggedIn(true);
        dispatch(setUser(user));
        console.log('loggedIn');
      } else {
        setIsLogggedIn(false);
        console.log('loggedOut');
      }
    });
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return isLogggedIn ? <Navigator /> : <Login />;
};

export default Auth;
