import axios from "axios";
import { refreshAccessToken } from "../../../components/utils/refreshAccessToken";

export const handleCreateAddNewUser = async () => {
  try {
    await refreshAccessToken()
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token not found');
    }
    console.log(accessToken);

    const config = {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    };

    const res = await axios.patch('https://lizaloxyshka.pythonanywhere.com/groups/request/2/', {id: 12, name: 'Igor'}, config);
    const data = res.data;
    console.log(data);
    
  } catch (e) {
    console.error(e);
  }
};

export const getUserProfile = async (id) => {
  try {
    await refreshAccessToken()
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token not found');
    }

    const res = await axios(`https://lizaloxyshka.pythonanywhere.com/users/student/profile/${id}`);
    const data = res.data;
    return data    
  } catch (e) {
    console.error(e);
  }
}