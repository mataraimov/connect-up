import React from 'react';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
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

        <img className={styles.img2} src="./assets/menu.png" alt="menu" />
      </div>
    </header>
  );
};

export default Header;
