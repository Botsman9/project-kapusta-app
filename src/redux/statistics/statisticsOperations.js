import { createAsyncThunk } from '@reduxjs/toolkit';
import instanceAxios from 'axios';
import * as API from '../../api/api';

const fetchAllStatistics = createAsyncThunk(
  'statistics/fetchAllStatistics',
  async (period, { rejectWithValue }) => {
    try {
      const data = await API.getPeriod(period);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export { fetchAllStatistics };

export async function deleteTransaction(id) {
  const { data } = await instanceAxios.delete(`/transaction/${id}`);
  return data;
}
