import instanceAxios from '../../api/Axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from '../../api/Axios';
import * as API from '../../api/api';
import { getToken } from './auth-slise';

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instanceAxios.post('/auth/register', credentials);
      token.set(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await instanceAxios.post('/auth/login', credentials);
    token.set(data.accessToken);
    return data;
  } catch (error) {
    return alert('Wrong email or password.');
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await instanceAxios.post('/auth/logout');
    token.unset();
  } catch (error) {
    return alert('Something went wrong.');
  }
});

const refresh = createAsyncThunk(
  'auth/refresh',
  async (credentials, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    const sid = thunkAPI.getState().auth.sid;

    if (!persistedToken || !sid) return thunkAPI.rejectWithValue();

    try {
      const request = await instanceAxios.post('/auth/refresh', { sid });
      thunkAPI.dispatch(getToken(request.data.newAccessToken));
      token.set(request.data.newAccessToken);
      return request;
    } catch (error) {
      alert('Something went wrong!!!');
      return thunkAPI.rejectWithValue(error);
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
