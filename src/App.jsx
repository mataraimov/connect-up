import React from 'react';
import './App.css';
import StartScreen from './pages/startScreeen/StartScreen';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/startscreen" element={<StartScreen />} />
        
        <Route path="*" element={<StartScreen />} />
      </Routes>
    </>
  );
};

export default App;
