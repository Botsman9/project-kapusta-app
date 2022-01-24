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
    [authOperations.register.pending](state) {
      state.isRefresh = true;
      state.error = null;
    },
    [authOperations.register.fulfilled](state, { payload }) {
      state.token = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.sid = payload.sid;
      state.isLoggedIn = true;
      state.isRefresh = false;
    },
    [authOperations.register.rejected](state, { payload }) {
      state.error = payload;
      state.isRefresh = false;
      state.isLoggedIn = false;
    },

    [authOperations.logIn.pending](state) {
      state.isRefresh = true;
      state.error = null;
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      state.token = payload.accessToken;
      state.sid = payload.sid;
      state.refreshToken = payload.refreshToken;
      state.isLoggedIn = true;
      state.isRefresh = false;
    },
    [authOperations.logIn.rejected](state, { payload }) {
      state.error = payload;
      state.isRefresh = false;
    },

    [authOperations.logOut.pending](state, action) {
      state.isRefresh = true;
      state.error = null;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.token = null;
      state.refreshToken = null;
      state.sid = null;
      state.isLoggedIn = false;
      state.isRefresh = false;
    },
    [authOperations.logOut.rejected](state, { payload }) {
      state.error = payload;
      state.isRefresh = false;
    },

    [authOperations.refresh.pending](state, action) {
      state.isRefresh = true;
      state.error = null;
    },
    [authOperations.refresh.fulfilled](state, { payload }) {
      state.token = payload.data.newAccessToken;
      state.refreshToken = payload.data.newRefreshToken;
      state.sid = payload.data.newSid;
      state.isLoggedIn = true;
      state.isRefresh = false;
    },
    [authOperations.refresh.rejected](state, payload) {
      state.isLoggedIn = false;
      state.error = payload;
      state.isRefresh = false;
    },
  },
});

const authReducer = authSlice.reducer;

export const { getToken, setAuth } = authSlice.actions;
export default authReducer;
