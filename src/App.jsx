import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './components/utils/context';
import DonationPage from './pages/DonationPage/DonationPage';
import StartScreen from './pages/startScreeen/StartScreen';
import EventPage from './pages/events/Events';
import MainFooter from './components/Layout/footer/Footer';
import Header from './components/Layout/header/Header';
const App = () => {
  const { authData } = useAuth();
  const { isAuth } = authData;

  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/givingalumni" element={<DonationPage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/startscreen" element={<StartScreen />} />
          <Route path="*" element={<Navigate to="/startscreen" />} />
        </Routes>
      </main>
      <MainFooter />
    </>
  );
};

export default App;
