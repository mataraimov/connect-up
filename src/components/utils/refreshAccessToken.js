import axios from 'axios';
import { API_URL } from './config';

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refresh_token');

  try {
    const response = await axios.post(`${API_URL}/users/refresh/token/`, {
      refresh_token: refreshToken,
    });
    console.log(response.data);
    const newAccessToken = response.data.access;
    localStorage.getItem('access_token', newAccessToken);
  } catch (error) {
    console.error('Error refreshing Access token', error);
  }
};
