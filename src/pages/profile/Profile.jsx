import React, { useEffect, useState } from 'react';
import Header from '../../components/Layout/header/Header';
import axios from 'axios';
import { API_URL } from '../../components/utils/config';
import { refreshAccessToken } from '../../components/utils/refreshAccessToken';
import './profile.scss';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [socialNetwork, setSocialNetwork] = useState('');
  const id = localStorage.getItem('id');

  // const isTeacher = localStorage.getItem('is_teacher') === 'true'; // Преобразование строки в булево значение
  const isTeacher = Boolean(localStorage.getItem('is_teacher')); // Лучше использовать прямое преобразование если он уже возвращает boolean
  console.log(isTeacher);
  const getProfile = async () => {
    try {
      await refreshAccessToken();
      const endpoint = isTeacher
        ? `${API_URL}/users/teacher/profile/${id}/`
        : `${API_URL}/users/student/profile/${id}/`;
      const response = await axios.get(endpoint);
      console.log(response.data);
      setProfileData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const updateProfile = async () => {
    try {
      const endpoint = isTeacher
        ? `${API_URL}/users/teacher/profile/${id}/`
        : `${API_URL}/users/student/profile/${id}/`;

      const formData = new FormData();
      formData.append('quote', quote);
      formData.append('social_network', socialNetwork);
      if (avatar) {
        formData.append('teacher_avatar', avatar);
      }

      const response = await axios.patch(endpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`, // Assuming you use Bearer token authentication
        },
      });

      // Handle response if needed
      console.log('Profile updated successfully:', response.data);

      await getProfile();
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  return (
    <>
      <Header />
      <main>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="profile-container">
            {isTeacher && profileData.teacher_avatar ? (
              <div className="avatar-container">
                <img
                  src={
                    'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg'
                  }
                  alt="Avatar"
                />
              </div>
            ) : (
              <div className="avatar_input">
                <h1>HELLO</h1>
                <input type="file" onChange={handleAvatarChange} accept="image/*" />
              </div>
            )}
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter Quote"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Social Network"
                value={socialNetwork}
                onChange={(e) => setSocialNetwork(e.target.value)}
              />
            </div>
            <div className="profile-info">
              <span className="quote">{profileData.quote}</span>
              <a href={profileData.social_network} className="social-link">
                {profileData.social_network}
              </a>
              {isTeacher && (
                <>
                  <span className="teacher-status">Teacher Status</span>
                </>
              )}
              {!isTeacher && (
                <>
                  <span className="work-status">Work Status</span>
                  <span className="achievements">Achievements</span>
                </>
              )}
            </div>
            <div className="button-container">
              <button onClick={updateProfile}>Update Profile</button>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Profile;
