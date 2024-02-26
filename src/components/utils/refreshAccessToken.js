import axios from 'axios';
import { API_URL } from './config';

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refresh_token');

  try {
    const response = await axios.post(`${API_URL}/users/login`, {
      refresh: refreshToken,
    });
    const newAccessToken = response.data.access;
    localStorage.getItem('access_token', newAccessToken );
  } catch (errot) {
    console.error('Error refreshing Access token');
  }
};
