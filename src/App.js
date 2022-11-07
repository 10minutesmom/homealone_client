import React from 'react';
import Navigator from './navigators/Navigator';
import {PortalProvider} from '@gorhom/portal';

const App = () => {
  return (
    <PortalProvider>
      <Navigator />
    </PortalProvider>
  );
};

export default App;
