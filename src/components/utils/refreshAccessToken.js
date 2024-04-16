import axios from 'axios';
import { API_URL } from './config';

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refresh_token');

  try {
    const response = await axios.post(`${API_URL}/users/refresh/token/`, {
      refresh_token: refreshToken,
    });
    console.log(response.data);
    const newAccessToken = await response.data.access_token;
    const userID = await response.data.user_status.user_id;
    const isTeacher = await response.data.user_status.is_Teacher;
    localStorage.setItem('access_token', newAccessToken);
    localStorage.setItem('is_teacher', isTeacher);
    localStorage.setItem('id', userID);
  } catch (error) {
    console.error('Error refreshing Access token', error);
  }
};
