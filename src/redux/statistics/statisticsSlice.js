import { createSlice } from '@reduxjs/toolkit';
import { fetchAllStatistics } from './statisticsOperations';

const initialState = {
  currentMonth: '2022-01',
  isExpense: true,
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
  reducers: {
    changeIsExpense: (state, { payload }) => {
      state.isExpense = payload;
    },
    changeCurrentMonth: (state, { payload }) => {
      state.currentMonth = payload;
    },
    resetStatisticsUSer: (state, _) => {
      // state.currentMonth = "";
      state.incomes.data = {};
      state.incomes.total = 0;
      state.expense.data = {};
      state.expense.total = 0;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllStatistics.pending, (state, _) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllStatistics.fulfilled, (state, { payload }) => {
        state.incomes.data = payload.incomes.incomesData;
        state.incomes.total = payload.incomes.incomeTotal;
        state.expense.data = payload.expenses.expensesData;
        state.expense.total = payload.expenses.expenseTotal;

        state.loading = false;
      })
      .addCase(fetchAllStatistics.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload?.message || payload;
      });
  },
});

export const { changeCurrentMonth, resetStatisticsUSer, changeIsExpense } =
  statisticsSlice.actions;
export default statisticsSlice.reducer;
