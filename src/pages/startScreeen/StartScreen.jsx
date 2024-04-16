import React, { useState } from 'react';
import Header from '../../components/Layout/header/Header';
import styles from './startScreen.module.scss';
import ModalStartScreen from '../../components/Modal/modalStartScreen/ModalStartScreen';
import SignUpModal from '../../components/Modal/SignUpModal/SignUpModal';

const StartScreen = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalSignUpActive, setModalSignUpActive] = useState(false);
  return (
    <>
      <Header />
      <main>
        <div className={styles.main_wrap}>
          <div className={styles.left_side}>
            <div className={styles.choiceButtonsWrapper}>
              <p>
                Приветствуем в ConnectUP — твоем ключе к продолжению университетского пути!
                Оставайся связанным с университетскими воспоминаниями и коллегами!
              </p>
              <div className={styles.choice}>
                <p>
                  Присоединяйся к ConnectUP, чтобы быть на связи с университетским сообществом.
                  Студент или преподаватель – твое место здесь!
                </p>
              </div>
              <div className={styles.buttons}>
                <button onClick={() => setModalActive(true)} className={styles.button1}>
                  Войти
                </button>
                <button onClick={() => setModalSignUpActive(true)} className={styles.button2}>
                  Регистрация
                </button>
              </div>
            </div>
          </div>
          <div className={styles.imgInDiv}>
            <img src="/assets/jellyfish.png" alt="jellyfish" />
          </div>
        </div>
        <ModalStartScreen active={modalActive} setActive={setModalActive} />
        <SignUpModal active={modalSignUpActive} setActive={setModalSignUpActive} />
        <ModalStartScreen
          activeRegistr={modalSignUpActive}
          setActiveRegistr={setModalSignUpActive}
        />
        <SignUpModal activeLogin={modalActive} setActiveLogin={setModalActive} />
      </main>
    </>
  );
};

export default StartScreen;
