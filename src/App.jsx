import React from 'react';
import './App.css';
import StartScreen from './pages/startScreeen/StartScreen';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Layout/header/Header';
import VenetkaPage from './pages/venetkaPage/venetka';

const App = () => {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/startscreen" element={<StartScreen />} />
        <Route path='/venetka' element={<VenetkaPage/>}/>
        <Route path="*" element={<StartScreen />} />
      </Routes>
    </>       
  );
};

export default App;
