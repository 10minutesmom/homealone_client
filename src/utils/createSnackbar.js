import React from 'react';
import Snackbar from 'react-native-snackbar';

const createSnackbar = text => {
  Snackbar.show({
    text: text,
    duration: 1000,
  });
};

export default createSnackbar;
