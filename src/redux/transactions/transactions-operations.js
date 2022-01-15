import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api/api';

export const fetchIncome = createAsyncThunk(
  'transaction/fetchIncome',
  async (_, { rejectWithValue }) => {
    try {
      const income = await API.fetchIncome();
      return income;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchExpense = createAsyncThunk(
  'transaction/fetchExpense',
  async (_, { rejectWithValue }) => {
    try {
      const expese = await API.fetchExpense();
      return expese;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchIncomeCategories = createAsyncThunk(
  'transaction/fetchIncomeCategories',
  async (_, { rejectWithValue }) => {
    try {
      const categories = await API.fetchIncomeCategories();
      return categories;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchExpenseCategories = createAsyncThunk(
  'transaction/fetchExpenseCategories',
  async (_, { rejectWithValue }) => {
    try {
      const categories = await API.fetchExpenseCategories();
      return categories;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const createIncome = createAsyncThunk(
  'transaction/createIncome',
  async (obj, { rejectWithValue }) => {
    try {
      const income = await API.createIncome(obj);
      return income;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const createExpense = createAsyncThunk(
  'transaction/createExpense',
  async (obj, { rejectWithValue }) => {
    try {
      const expense = await API.createExpense(obj);
      return expense;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteTransaction = createAsyncThunk(
  'transaction/deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      const transaction = await API.deleteTransaction(id);
      return transaction;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
