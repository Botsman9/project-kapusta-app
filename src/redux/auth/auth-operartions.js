import instanceAxios from '../../api/Axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from '../../api/Axios';
import { getToken } from './auth-slise';
import { resetStatisticsUSer } from '../statistics/statisticsSlice';
import { resetUserInfo } from '../user/userSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instanceAxios.post('/auth/register', credentials);
      toast.success(`Регистрация по почте ${data.email} выполнена успешно!`, {
        theme: 'colored',
        autoClose: 2000,
      });
      const dataLogin = await instanceAxios.post('/auth/login', credentials);
      token.set(dataLogin.data.accessToken);
      return dataLogin.data;
    } catch (error) {
      toast.error('Пользователь с таким Email уже существует', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
      toast.error('Неправильный Email или пароль', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return rejectWithValue(error.response.data.message);
    }
  },
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      await instanceAxios.post('/auth/logout');
      dispatch(resetUserInfo());
      dispatch(resetStatisticsUSer());
      token.unset();
    } catch (error) {
      toast.warn('Что-то пошло не так... Обратитесь к администратору.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
      toast.warn('Что-то пошло не так... ', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
