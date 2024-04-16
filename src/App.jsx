import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './components/utils/context';
import Profile from './pages/profile/Profile';
import MainPage from './pages/mainPage/MainPage';
import StartScreen from './pages/startScreeen/StartScreen';
import VenetkaPage from './pages/venetkaPage/venetka';
import EventPage from './pages/events/Events';

const App = () => {
  const { authData } = useAuth();
  const { isAuth } = authData;

  return (
    <Routes>
      {isAuth ? (
        <>
          <Route path="/" element={<Profile />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/venetka" element={<VenetkaPage />} />
          <Route path="*" element={<Navigate to="/mainpage" />} />
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
