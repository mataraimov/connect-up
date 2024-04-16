import React, { useState } from 'react';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../../utils/context';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { setAuthData } = useAuth();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const logout = async () => {
    try {
      localStorage.clear();
      setAuthData({
        isAuth: false,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <header>
      <div className={styles.header_wrap}>
        <Link to="/">
          <div className={styles.header_wrap__logo}>
            <img
              className={styles.img1}
              alt="logo"
              src="https://my.alatoo.edu.kg/images/logo_aiu.png"
            />
            <div className={styles.header_wrap__logo__spans}>
              <span className={styles.span1}>Connect</span>
              <span className={styles.span2}>UP</span>
            </div>
          </div>
        </Link>

        <div className={styles.menu_container}>
          <div className={styles.menu_icon} onClick={toggleMenu}>
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30px"
                height="30px"
              >
                <path
                  fill="#fff"
                  d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                />
              </svg>
            ) : (
              <img className={styles.menu_icon_img} src="./assets/menu.png" alt="menu" />
            )}
          </div>

          {menuOpen && (
            <div className={styles.menu}>
              <ul>
                <li>
                  <Link to="/">Профиль</Link>
                </li>
                <li>
                  <Link to="/group">Группа</Link>
                </li>
                <li>
                  <Link to="/events">События</Link>
                </li>
                <li>
                  <Link onClick={logout}>Логаут</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
