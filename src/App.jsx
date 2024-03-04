import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from './components/utils/context';
import Profile from './pages/profile/Profile';
import MainPage from './pages/mainPage/MainPage';
import StartScreen from './pages/startScreeen/StartScreen';

const App = () => {
  const { authData } = useAuth();
  const { isAuth } = authData;

  return (
    <Routes>
      {isAuth ? (
        <>
          <Route path="/" element={<Profile />} />
          <Route path="/mainpage" element={<MainPage />} />
        </>
      ) : (
        <>
          <Route path="/startscreen" element={<StartScreen />} />
          <Route path="*" element={<Navigate to="/startscreen" />} />
        </>
      )}
    </Routes>
  );
};

export default App;
