import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api/api';
import { token } from '../../api/Axios';

const fetchIncome = createAsyncThunk(
  'transaction/fetchIncome',
  async (_, { rejectWithValue }) => {
    try {
      const income = await API.fetchIncome();
      return income;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  },
);

const fetchExpense = createAsyncThunk(
  'transaction/fetchExpense',
  async (_, { rejectWithValue }) => {
    try {
      const expese = await API.fetchExpense();
      return expese;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  },
);

const fetchIncomeCategories = createAsyncThunk(
  'transaction/fetchIncomeCategories',
  async (_, { rejectWithValue }) => {
    try {
      const categories = API.fetchIncomeCategories();
      return categories;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  },
);

const fetchExpenseCategories = createAsyncThunk(
  'transaction/fetchExpenseCategories',
  async (_, { rejectWithValue }) => {
    try {
      const categories = await API.fetchExpenseCategories();
      return categories;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  },
);

const createIncome = createAsyncThunk(
  'transaction/createIncome',
  async (obj, { rejectWithValue }) => {
    try {
      const income = await API.createIncome(obj);
      const data = await API.fetchIncome();
      return { income, data };
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  },
);

const createExpense = createAsyncThunk(
  'transaction/createExpense',
  async (obj, { rejectWithValue }) => {
    try {
      const expense = await API.createExpense(obj);
      const data = await API.fetchExpense();
      return { expense, data };
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  },
);

const deleteIncomeTransaction = createAsyncThunk(
  'transaction/deleteIncomeTransaction',
  async (id, { rejectWithValue }) => {
    try {
      const newBalance = await API.deleteTransaction(id);
      const data = await API.fetchIncome();
      return { id, newBalance, data };
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  },
);

const deleteExpenseTransaction = createAsyncThunk(
  'transaction/deleteExpenseTransaction',
  async (id, { rejectWithValue }) => {
    try {
      const newBalance = await API.deleteTransaction(id);
      const data = await API.fetchExpense();
      return { id, newBalance, data };
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  },
);

const getAllUserInfo = createAsyncThunk(
  'transaction/getAllUserInfo',
  async (_, { rejectWithValue, getState }) => {
    try {
      const accessToken = getState().auth.token;
      if (!accessToken) return rejectWithValue(null);
      token.set(accessToken);
      const info = await API.getUserInfo();
      return info;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  },
);

const patchNewBalance = createAsyncThunk(
  'transaction/patchNewBalance',
  async (balance, { rejectWithValue }) => {
    try {
      const data = await API.chengeUserBalance(balance);
      return data.newBalance;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  },
);

export {
  fetchIncome,
  fetchExpense,
  fetchIncomeCategories,
  fetchExpenseCategories,
  createIncome,
  createExpense,
  deleteIncomeTransaction,
  deleteExpenseTransaction,
  getAllUserInfo,
  patchNewBalance,
};
