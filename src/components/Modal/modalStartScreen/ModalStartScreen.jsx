import React from 'react';
import './modalStartScreen.css';
import { Link } from 'react-router-dom';

const ModalStartScreen = ({ active, setActive }) => {
  const handleCloseModal = () => {
    setActive(false);
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
          <div className="modal__content wrap">
            <span className="span1">Вход в аккаунт для</span>
            <div className="modal__content wrap buttons">
              <Link to="/loginstudent">
                <button className="button1">Студента</button>
              </Link>
              <Link to="/loginteacher">
                <button className="button2">Препода</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalStartScreen;