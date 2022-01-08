import React, { useState } from 'react';

const ShareButton = () => {
  const onButtonClick = () => {
    console.log('Share button clicked');
  };

  return <button onClick={onButtonClick}>Partager</button>;
};

export default ShareButton;
