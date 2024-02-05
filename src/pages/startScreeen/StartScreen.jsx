import React from 'react';
import Header from '../../components/Layout/header/Header';
import styles from './startScreen.module.scss';
const StartScreen = () => {
  return (
    <>
      <Header />

      <main>
        <div className={styles.main_wrap}>
          <p>
            Приветствуем в ConnectUP — твоем ключе к продолжению университетского пути! Оставайся
            связанным с университетскими воспоминаниями и коллегами!
          </p>
          <img src="/assets/jellyfish.png" alt="jellyfish" />
        </div>
        <div className={styles.choice}>
          <p>
            Присоединяйся к ConnectUP, чтобы быть на связи с университетским сообществом. Студент
            или преподаватель – твое место здесь!
          </p>
        </div>
          <div className={styles.buttons}>
            <button className={styles.button1}>Войти</button>
            <button className={styles.button2}>Регистрация</button>
          </div>
      </main>
    </>
  );
};

export default StartScreen;
