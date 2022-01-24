import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api/api';
import { token } from '../../api/Axios';
import { toast } from 'react-toastify';

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
      toast.success('Транзакция дохода выполнена успешно!', {
        theme: 'colored',
        autoClose: 2000,
      });
      return { income, data };
    } catch (error) {
      toast.error('Не удалось добавить транзакцию, попробуйте ещё раз!', {
        theme: 'colored',
        autoClose: 2000,
      });
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
      toast.success('Транзакция расхода выполнена успешно!', {
        theme: 'colored',
        autoClose: 2000,
      });
      return { expense, data };
    } catch (error) {
      toast.error('Не удалось добавить транзакцию, попробуйте ещё раз!', {
        theme: 'colored',
        autoClose: 2000,
      });
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
      toast.success('Транзакция дохода была успешно удалена!', {
        theme: 'colored',
        autoClose: 2000,
      });
      return { id, newBalance, data };
    } catch (error) {
      toast.error('Не удалось удалить транзакцию, попробуйте ещё раз!', {
        theme: 'colored',
        autoClose: 2000,
      });
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
      toast.success('Транзакция расхода была успешно удалена!', {
        theme: 'colored',
        autoClose: 2000,
      });
      return { id, newBalance, data };
    } catch (error) {
      toast.error('Не удалось удалить транзакцию, попробуйте ещё раз!', {
        theme: 'colored',
        autoClose: 2000,
      });
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
      toast.success('Баланс успешно добавлен!', {
        theme: 'colored',
        autoClose: 2000,
      });
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
