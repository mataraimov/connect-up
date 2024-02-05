import React from 'react';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={styles.header_wrap}>
        <div className={styles.header_wrap__logo}>
          <img
            className={styles.img1}
            src="https://s3-alpha-sig.figma.com/img/142b/6dac/c0ebc4d537c0c9ae10fdae59223c67fc?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sos13AWarvbKtat14fvcbzyz8hSKVIgeU4xkseQY9BcQW1pBVO8iqCmIzbrphKZ~liq0CHBRJT2hpyuQ1-ERUKcTMu5voqGD~kfEz9cztQaQdB2THuGDof1hmCTEzlUgUdoxkAJijY5ej-VWuibIvFbCy-uOwLl5327bhym6QgvrZDmh84l6J-Q0HNYDodJSye~Pee0BCzU~81WMkNGTtkBoPmyXETyeSAnWsBWdou7fXJjBCbG7KVCl5hu839ImY6dVqwERevPZbd8bcObq-vtTMQ9yyNi6zcAHo-GoF~wLhdjE5DqxvUP77tQbQhTiqR1kDaEF8me-kqNYGGmbzA__"
            alt="logo"
          />
          <div className={styles.header_wrap__logo__spans}>
            <span className={styles.span1}>Connect</span>
            <span className={styles.span2}>UP</span>
          </div>
        </div>

        <img className={styles.img2} src="./assets/menu.png" alt="menu" />
      </div>
    </header>
  );
};

export default Header;
