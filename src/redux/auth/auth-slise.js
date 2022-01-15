import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operartions';

const initialState = {
  email: null,
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      if (action.payload) {
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      }
    },

    [authOperations.logIn.fulfilled](state, action) {
      if (action.payload) {
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      }
    },

    [authOperations.logOut.fulfilled](state, action) {
      state.email = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
