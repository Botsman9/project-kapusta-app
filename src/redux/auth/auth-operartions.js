import instanceAxios from '../../api/Axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from '../../api/Axios';
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

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instanceAxios.post('/auth/login', credentials);
      token.set(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await instanceAxios.post('/auth/logout');
      token.unset();
    } catch (error) {
      console.log(`error`, error());
      return rejectWithValue(error.response.data.message);
    }
  },
);

const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue, dispatch }) => {
    const persistedToken = getState().auth.token;
    const sid = getState().auth.sid;

    if (!persistedToken || !sid) return rejectWithValue();

    try {
      const request = await instanceAxios.post('/auth/refresh', { sid });
      dispatch(getToken(request.data.newAccessToken));
      token.set(request.data.newAccessToken);
      return request;
    } catch (error) {
      console.log(`error`, error());
      return rejectWithValue(error.response.data.message);
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
