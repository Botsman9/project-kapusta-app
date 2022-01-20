import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operartions';

const initialState = {
  token: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  isRefresh: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getToken: (state, { payload }) => {
      state.token = payload;
    },
    setAuth: (state, { payload }) => {
      state.token = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.sid = payload.sid;
      state.isLoggedIn = true;
    },
  },
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      state.token = payload.accessToken;
      state.sid = payload.sid;
      state.isLoggedIn = true;
    },
    [authOperations.register.pending](state) {
      state.error = null;
    },
    [authOperations.register.rejected](state, { payload }) {
      state.error = payload;
    },

    [authOperations.logIn.fulfilled](state, { payload }) {
      state.token = payload.accessToken;
      state.sid = payload.sid;
      state.isLoggedIn = true;
    },

    [authOperations.logOut.fulfilled](state, action) {
      state.token = null;
      state.refreshToken = null;
      state.sid = null;
      state.isLoggedIn = false;
    },

    [authOperations.refresh.pending](state, action) {
      state.isRefresh = true;
    },
    [authOperations.refresh.fulfilled](state, { payload }) {
      state.token = payload.data.newAccessToken;
      state.refreshToken = payload.data.newRefreshToken;
      state.sid = payload.data.newSid;
      state.isLoggedIn = true;
      state.isRefresh = false;
    },
    [authOperations.refresh.rejected](state) {
      state.isRefresh = false;
    },
  },
});

const authReducer = authSlice.reducer;

export const { getToken, setAuth } = authSlice.actions;
export default authReducer;
