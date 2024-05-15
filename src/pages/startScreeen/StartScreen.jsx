import React, { useState } from 'react';
import MenuBar from '../../components/Layout/MenuBar/MenuBar';
import HomePage from '../HomePage';

const StartScreen = () => {
  return (
    <>
      <MenuBar />
      <HomePage />
    </>
  );
};

export default StartScreen;
