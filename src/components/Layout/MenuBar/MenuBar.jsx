import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
            <li className={isActive('/') ? 'active' : ''}>
              <Link className="menu" to="/">
                About us
              </Link>
            </li>
            <li className={isActive('/events') ? 'active' : ''}>
              <Link className="menu" to="/events">
                news{'&'}Events
              </Link>
            </li>
            <li className={isActive('/council') ? 'active' : ''}>
              <Link className="menu" to="/council">
                Council
              </Link>
            </li>
            <li className={isActive('/fund') ? 'active' : ''}>
              <Link className="menu" to="/fund">
                Fund
              </Link>
            </li>
            <li className={isActive('/donations') ? 'active' : ''}>
              <Link className="menu" to="/donations">
                Donations
              </Link>
            </li>
            <li className={isActive('/contacts') ? 'active' : ''}>
              <Link className="menu" to="/contacts">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
