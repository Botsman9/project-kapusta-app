import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api/api';
axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/auth/register', credentials);
    token.set(data.accessToken);
    return data;
  } catch (error) {
    return alert('Wrong email or password.');
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/auth/login', credentials);
    token.set(data.accessToken);
    return data;
  } catch (error) {
    return alert('Wrong email or password.');
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/auth/logout');
    token.unset();
  } catch (error) {
    return alert('Something went wrong.');
  }
});

const refresh = createAsyncThunk(
  'auth/refresh',
  async (credentials, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;

    const sid = credentials.sid;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    const info = await API.getUserInfo();
    token.set(persistedToken);
    try {
      const request = await axios.post('/auth/refresh', { sid });
      console.log(`sid`, sid);
      console.log(`request`, request);
      return { request, info };
    } catch (error) {
      return alert('Something went wrong!!!');
    }
  },
);

const operations = {
  register,
  logOut,
  logIn,
  refresh,
};
export default operations;
