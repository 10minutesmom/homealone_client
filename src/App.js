import React, {useEffect} from 'react';
import {PortalProvider} from '@gorhom/portal';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Provider} from 'react-redux';
import store from './redux/store';
import Auth from './utils/Auth';

const App = () => {
  const googleSigninConfigure = () => {
    GoogleSignin.configure({
      webClientId:
        '901450689454-i3lg8rikoo8d8fmgctahldqfq35t11l9.apps.googleusercontent.com',
    });
  };

  useEffect(() => {
    googleSigninConfigure();
  }, []);

  return (
    <Provider store={store}>
      <PortalProvider>
        <Auth />
      </PortalProvider>
    </Provider>
  );
};

export default App;
