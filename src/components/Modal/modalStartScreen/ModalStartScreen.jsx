import React from 'react';
import './modalStartScreen.css';

const ModalStartScreen = ({ active, setActive, activeRegistr, setActiveRegistr }) => {
  const handleCloseModal = () => {
    setActive(false);
  };

  const openLoginModal = () => {
    setActive(false);
    setActiveRegistr(true);
  };

  return (
    <>
      <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div
          className={active ? 'modal__content active' : 'modal__content'}
          onClick={(e) => e.stopPropagation()}>
          <div className={active ? 'qwerty' : 'otmena'} onClick={handleCloseModal}>
            x
          </div>
          <div className="modal__content">
            <span className="span1">Регистрация </span>
            <form action="">
              <div className="inputs">
                <input type="text" placeholder="email" />
                <input type="text" placeholder="password" />
                <button>войти</button>
              </div>
            </form>
            <div className="registr">
              <span className="span1" onClick={openLoginModal}>
                Ты еще не с нами?<span className="span2"> Регистрируйся!</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalStartScreen;
