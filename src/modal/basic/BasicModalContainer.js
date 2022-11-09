import React from 'react';
import BasicModalPresenter from './BasicModalPresenter';

const BasicModalContainer = ({close}) => {
  const props = {
    close: close,
  };

  return <BasicModalPresenter {...props} />;
};

export default BasicModalContainer;
