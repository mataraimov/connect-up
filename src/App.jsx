import React from 'react';
import './App.css';
import StartScreen from './pages/startScreeen/StartScreen';
import { Route, Routes } from 'react-router-dom';
import LoginStudent from './pages/Student/entrance/login/LoginStudent';
import LoginTeacher from './pages/Teacher/entrance/login/LoginTeacher';
import SignUpStudent from './pages/Student/entrance/signup/SignUpStudent';
import SignUpTeacher from './pages/Teacher/entrance/signup/SignUpTeacher';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartScreen />} />

        <Route path="/loginstudent" element={<LoginStudent />} />
        <Route path="/loginteacher" element={<LoginTeacher />} />

        <Route path="/signupstudent" element={<SignUpStudent />} />
        <Route path="/signupteacher" element={<SignUpTeacher />} />

        <Route path="*" element={<StartScreen />} />
      </Routes>
    </>
  );
};

export default App;
