import React, { useState } from 'react';
import './modalSignUp.css';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import CustomNotification from '../../utils/Toasts/CustomNotification';
import { refreshAccessToken } from '../../utils/refreshAccessToken';
import { useNavigate } from 'react-router-dom';

const SignUpModal = ({ active, setActive, activeLogin, setActiveLogin }) => {
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [showErrorNotification, setShowErrorNotification] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
    name: '',
    second_name: '',
  });

  const onFinish = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = isTeacher ? '/users/teacher/registration/' : '/users/registration/';
      const response = await axios.post(`${API_URL}${apiUrl}`, formData);
      setFormData({
        email: '',
        password: '',
        password2: '',
        name: '',
        second_name: '',
      });
      setShowSuccessNotification(true);
      setActive(false);
    } catch (error) {
      console.error('Error:', error);
      setShowErrorNotification(true);
    }
  };

  const handleCloseModal = () => {
    setActive(false);
  };

  const openLoginModal = () => {
    setActive(false);
    setActiveLogin(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCloseSuccessNotification = () => {
    showSuccessNotification(false);
  };

  const handleCloseErrorNotification = () => {
    showErrorNotification(false);
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
      <div className={active ? 'modal2 active2' : 'modal2'} onClick={() => setActive(false)}>
        <div
          className={active ? 'modal__content2 active2' : 'modal__content2'}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={active ? 'qwerty2' : 'otmena2'} onClick={handleCloseModal}>
            x
          </div>
          <div className="modal__content2">
            <span className="span1">Регистрация </span>
            <form onSubmit={onFinish}>
              <div className="inputs2">
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
                <input
                  type="password"
                  placeholder="Подтвердите пароль"
                  name="password2"
                  value={formData.password2}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Имя"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Фамилия"
                  name="second_name"
                  value={formData.second_name}
                  onChange={handleChange}
                />
                <div className="checkbox_wrap">
                  <span>в качестве препода:</span>
                  <input
                    type="checkbox"
                    checked={isTeacher}
                    onChange={() => setIsTeacher(!isTeacher)}
                  />
                </div>
              </div>
              <button type="submit">Зарегистрироваться</button>
            </form>
            <div className="login">
              <span className="span1">
                есть аккаунт?{' '}
                <span onClick={openLoginModal} className="span2">
                  войти
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpModal;
