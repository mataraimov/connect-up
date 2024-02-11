import React from 'react';
import { Link } from 'react-router-dom';

const SignUpModal = ({ active, setActive }) => {
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
            <span className="span1">Регистрация для</span>
            <div className="modal__content wrap buttons">
              <Link to="/signupstudent">
                <button className="button1">Студента</button>
              </Link>
              <Link to="/signupteacher">
                <button className="button2">Препода</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpModal;
