import axios from 'axios';
import storage from 'redux-persist/lib/storage';

storage.getItem('persist:auth').then(data => {
  try {
    const dataLS = JSON.parse(data);
    const token = JSON.parse(dataLS?.token);
    if (!token) return;
    instanceAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } catch (error) {}
});

const instanceAxios = axios.create({
  baseURL: `https://kapusta-backend.goit.global`,
});

export const token = {
  set(token) {
    instanceAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    instanceAxios.defaults.headers.common.Authorization = '';
  },
};

export default instanceAxios;
