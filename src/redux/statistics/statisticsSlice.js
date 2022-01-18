import { createSlice } from '@reduxjs/toolkit';
import { fetchAllStatistics } from './statisticsOperations';

const initialState = {
  incomes: {
    total: 0,
    data: {},
  },
  expense: {
    total: 0,
    data: {},
  },
  loading: false,
  error: null,
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  extraReducers: builder => {
    builder

      .addCase(fetchAllStatistics.pending, (state, _) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllStatistics.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.incomes.data = payload.incomes.incomesData;
        state.incomes.total = payload.incomes.incomesTotal;
        state.expense.data = payload.expenses.expensesData;
        state.expense.total = payload.expenses.expensesTotal;

        state.loading = false;
        console.log(payload);
      })
      .addCase(fetchAllStatistics.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload?.message || payload;
      });
  },
});

export default statisticsSlice.reducer;
