import React from 'react';
import Header from '../../components/Layout/header/Header';
import VenetkaPage from '../venetkaPage/venetka';

const MainPage = () => {
  return (
    <>
      <Header />

      <main>
        <VenetkaPage />
      </main>
    </>
  );
};

export default MainPage;
