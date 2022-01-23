import { createAsyncThunk } from '@reduxjs/toolkit';

import * as API from '../../api/api';

const fetchAllStatistics = createAsyncThunk(
  'statistics/fetchAllStatistics',
  async (period, { rejectWithValue }) => {
    try {
      const data = await API.getPeriod(period);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export { fetchAllStatistics };

const deleteTransaction = createAsyncThunk(
  'transaction/removeOne',
  async (payload, thunkAPI) => {
    try {
      await API.deleteTransaction(payload);
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
export { deleteTransaction };
