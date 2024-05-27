import axios from 'axios';

const UNSPLASH_API_URL = 'https://api.unsplash.com';
// const ACCESS_KEY = '8YGcVvOp9QNMxvTm8uP7LNvdEGytTjElO7W-13gZUvY'; // Replace with your actual access key

export const fetchRandomImage = async (query) => {
  try {
    const response = await axios.get(`${UNSPLASH_API_URL}/photos/random`, {
      params: {
        query,
        client_id: ACCESS_KEY,
        count: 1,
      },
    });
    return response.data[0].urls.small;
  } catch (error) {
    console.error('Error fetching image from Unsplash:', error);
    return null;
  }
};
