import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './components/utils/context';
import DonationPage from './pages/DonationPage/DonationPage';
import MainFooter from './components/Layout/footer/Footer';
import Header from './components/Layout/header/Header';
import MenuBar from './components/Layout/MenuBar/MenuBar';
import AboutUs from './pages/AboutUs';
import AdminEvents from './pages/Admin/AdminEvents';
import Events from './pages/Events/Events';
import EventDetail from './pages/Events/EventDetail';
const App = () => {
  const { authData } = useAuth();
  const { isAuth } = authData;

  return (
    <>
      <Header />
      <MenuBar />
      <main style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/admin-events" element={<AdminEvents />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event-detail/:id" element={<EventDetail />} />
          <Route path="*" element={<Navigate to="/events" />} />
        </Routes>
      </main>
      <MainFooter />
    </>
  );
};

export default App;
