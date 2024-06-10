import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './components/utils/context';
import DonationPage from './pages/DonationPage/DonationPage';
import MainFooter from './components/Layout/footer/Footer';
import Header from './components/Layout/header/Header';
import MenuBar from './components/Layout/MenuBar/MenuBar';
import AboutUs from './pages/AboutUs';
import AdminPanel from './pages/Admin/AdminEvents';
import EventDetail from './pages/events/EventDetail';
import Council from './pages/Council';
import Contacts from './pages/Contacts';
import AlumniFund from './pages/Fund';
import Donations from './pages/Donations';
import Events from './pages/events';
import DonorDetails from './pages/Donations/DonorDetails';
import Login from './components/Modal/LoginModal/Login';

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

          <Route path="/events" element={<Events />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/council" element={<Council />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/fund" element={<AlumniFund />} />
          <Route path="/donor/:id" element={<DonorDetails />} />
          <Route path="/event-detail/:id" element={<EventDetail />} />
          <Route path="*" element={<Navigate to="/about" />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/admin-events" element={isAuth ? <AdminPanel /> : <Navigate to="/auth" />} />
        </Routes>
      </main>
      <MainFooter />
    </>
  );
};

export default App;
