import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MenuBar.css'; // Убедитесь, что стили импортированы

const MenuBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Получаем текущий путь

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => location.pathname === path;
  useEffect(() => {
    console.log(isActive('/events'));
  }, []);

  return (
    <div id="fixedactionsbox" className="navbar navbar-inverse menunav dark" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button
            style={{ color: 'black', backgroundColor: '#908eef' }}
            type="button"
            className="navbar-toggle menumobile"
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle navigation</span>
            menu
          </button>
        </div>
        <div className={`navbar-collapse collapse ${menuOpen ? 'in' : ''}`} id="checkmenuwidth">
          <ul className="nav navbar-nav navbar-center">
            <li className={isActive('/events') ? 'active' : ''}>
              <a className="menu" href="/events">
                news{'&'}Events
              </a>
            </li>
            <li className={isActive('/about') ? 'active' : ''}>
              <a className="menu" href="/about">
                About us
              </a>
            </li>
            <li className={isActive('/council') ? 'active' : ''}>
              <a className="menu" href="/council">
                Council
              </a>
            </li>
            <li className={isActive('/fund') ? 'active' : ''}>
              <a className="menu" href="/fund">
                Fund
              </a>
            </li>
            <li className={isActive('/revenues') ? 'active' : ''}>
              <a className="menu" href="/revenues">
                Donations
              </a>
            </li>
            <li className={isActive('/contacts') ? 'active' : ''}>
              <a className="menu" href="/contacts">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
