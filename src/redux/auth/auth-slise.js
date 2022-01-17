import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operartions';

const initialState = {
  email: null,
  token: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  isRefresh: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      if (payload) {
        state.email = payload.userData.email;
        state.token = payload.accessToken;
        state.sid = payload.sid;
        state.isLoggedIn = true;
      }
    },

    [authOperations.logIn.fulfilled](state, { payload }) {
      if (payload) {
        state.email = payload.userData.email;
        state.token = payload.accessToken;
        state.sid = payload.sid;
        state.isLoggedIn = true;
      }
    },

    [authOperations.logOut.fulfilled](state, action) {
      state.email = null;
      state.token = null;
      state.sid = null;
      state.isLoggedIn = false;
    },

    [authOperations.refresh.pending](state, action) {
      state.isRefresh = true;
    },
    [authOperations.refresh.fulfilled](state, { payload }) {
      if (payload) {
        console.log(`payload`, payload);
        state.email = payload.info.email;
        state.token = payload.request.data.newAccessToken;
        state.refreshToken = payload.request.data.newRefreshToken;
        state.sid = payload.request.data.newSid;
        state.isLoggedIn = true;
      }
      // state.email = action.payload.email;
      // state.token = action.payload.accessToken;
      // state.sid = action.payload.sid;
      state.isRefresh = false;
    },
    [authOperations.refresh.rejected](state) {
      state.isRefresh = false;
    },
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
