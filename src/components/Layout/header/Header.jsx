import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import './header.scss';

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader className="header">
      <div className="logo-container">
        <Link to="/" className="logo">
          <img src="https://my.alatoo.edu.kg/images/logo_aiu.png" alt="IAU - Alumni" />
        </Link>
        <div className="header-title">AIU ALUMNI</div>
        <Link to="/" className="logo secondary-logo">
          <img src="https://i.ibb.co/RYXzbF2/image-removebg-preview.png" alt="IAU - Alumni" />
        </Link>
      </div>
    </AntHeader>
  );
};

export default Header;
