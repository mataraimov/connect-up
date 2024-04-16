import React, { useEffect } from 'react';
import Header from '../../components/Layout/header/Header';
import style from './profile.module.scss';
import { refreshAccessToken } from '../../components/utils/refreshAccessToken';
import axios, { Axios } from 'axios';
import { API_URL } from '../../components/utils/config';
import { useAuth } from '../../components/utils/context';
const Profile = () => {
  const { setAuthData } = useAuth();

  const getProfile = async () => {
    try {
      await refreshAccessToken();
      const response = await axios.get(`${API_URL}/users/student/profile/${id}/`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      setAuthData({
        isAuth: false,
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProfile();
    console.log(2);
  }, []);

  return (
    <>
      <Header />

      <main>
        <div>
          <div>
            <button onClick={logout}>выйти</button>

            <img src="" alt="" />
            <span>здесь будет цитата</span>
            <div>
              <span>здесь будет ссылка на соц сеть</span>
            </div>
            <span>здесь будет статус работы</span>
            <span>здесь будут достижения</span>
            <span></span>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
