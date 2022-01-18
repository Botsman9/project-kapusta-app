import axios from 'axios';
import storage from 'redux-persist/lib/storage';

storage.getItem('persist:auth').then(data => {
  const dataLS = JSON.parse(data);
  const token = JSON.parse(dataLS?.token);
  console.log(`token`, token);
  if (!token) return;
  instanceAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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
