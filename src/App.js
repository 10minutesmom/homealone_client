import React, {useEffect} from 'react';
import Navigator from './navigators/Navigator';
import {PortalProvider} from '@gorhom/portal';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

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
    <PortalProvider>
      <Navigator />
    </PortalProvider>
  );
};

export default App;
