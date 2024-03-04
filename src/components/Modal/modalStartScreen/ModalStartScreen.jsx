import React, { useState } from 'react';
import './modalStartScreen.css';
import { refreshAccessToken } from '../../utils/refreshAccessToken';
import { API_URL } from '../../utils/config';
import axios from 'axios';
import CustomNotification from '../../utils/Toasts/CustomNotification';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/context';

const ModalStartScreen = ({ active, setActive, activeRegistr, setActiveRegistr }) => {
  const { setAuthData } = useAuth();


  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [showErrorNotification, setShowErrorNotification] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  
  const onFinish = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/users/login/`, formData);
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      setAuthData({isAuth:true})
      setFormData({
        email: '',
        password: '',
      });
      setShowSuccessNotification(true);
      setActive(false);
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      setShowErrorNotification(true);
    }
  };

  const handleCloseModal = () => {
    setActive(false);
  };

  const handleCloseSuccessNotification = () => {
    showSuccessNotification(false);
  };

  const handleCloseErrorNotification = () => {
    showErrorNotification(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      {showSuccessNotification && (
        <CustomNotification
          message="Регистрация прошла успешно!"
          type="success"
          onClose={handleCloseSuccessNotification}
        />
      )}

      {showErrorNotification && (
        <CustomNotification
          message="Ошибка регистрации. Попробуйте еще раз."
          type="error"
          onClose={handleCloseErrorNotification}
        />
      )}
      <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div
          className={active ? 'modal__content active' : 'modal__content'}
          onClick={(e) => e.stopPropagation()}>
          <div className={active ? 'qwerty' : 'otmena'} onClick={handleCloseModal}>
            x
          </div>
          <div className="modal__content">
            <span className="span1">Регистрация </span>
            <form onSubmit={onFinish}>
              <div className="inputs">
                <input
                  type="text"
                  placeholder="Введите электронную почту"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="Пароль"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button>войти</button>
              </div>
            </form>
            <div className="registr">
              <span className="span1">
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
