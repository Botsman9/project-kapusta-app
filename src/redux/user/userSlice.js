import { createSlice } from '@reduxjs/toolkit';
import * as userOperations from './userOperations';

const initialState = {
  email: null,
  balance: 0,
  currentDay: '',
  currentTrandaction: 'expense',
  transaction: {
    incomes: {
      categories: [],
      data: [],
      monthsStats: {},
    },
    expense: {
      categories: [],
      data: [],
      monthsStats: {},
    },
  },
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeCurrentDay: (state, { payload }) => {
      state.currentDay = payload;
    },
    changeCurrentTransaction: (state, { payload }) => {
      state.currentTrandaction = payload;
    },
    resetUserInfo: (state, _) => {
      state.email = null;
      state.balance = 0;
      state.currentDay = '';
      state.currentTrandaction = '';
      state.transaction.incomes.categories = [];
      state.transaction.incomes.data = [];
      state.transaction.incomes.monthsStats = {};
      state.transaction.expense.categories = [];
      state.transaction.expense.data = [];
      state.transaction.expense.monthsStats = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(userOperations.fetchIncome.pending, (state, _) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        userOperations.fetchIncome.fulfilled,
        (state, { payload: { incomes, monthsStats } }) => {
          state.transaction.incomes.data = incomes;
          state.transaction.incomes.monthsStats = monthsStats;
          state.loading = false;
        },
      )
      .addCase(userOperations.fetchIncome.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload?.message || payload;
      })

      .addCase(userOperations.fetchExpense.pending, (state, _) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        userOperations.fetchExpense.fulfilled,
        (state, { payload: { expenses, monthsStats } }) => {
          state.transaction.expense.data = expenses;
          state.transaction.expense.monthsStats = monthsStats;
          state.loading = false;
        },
      )
      .addCase(userOperations.fetchExpense.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload?.message || payload;
      })

      .addCase(userOperations.fetchIncomeCategories.pending, (state, _) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        userOperations.fetchIncomeCategories.fulfilled,
        (state, { payload }) => {
          state.transaction.incomes.categories = payload;
          state.loading = false;
        },
      )
      .addCase(
        userOperations.fetchIncomeCategories.rejected,
        (state, { payload }) => {
          state.loading = false;
          state.error = payload?.message || payload;
        },
      )

      .addCase(userOperations.fetchExpenseCategories.pending, (state, _) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        userOperations.fetchExpenseCategories.fulfilled,
        (state, { payload }) => {
          state.transaction.expense.categories = payload;
          state.loading = false;
        },
      )
      .addCase(
        userOperations.fetchExpenseCategories.rejected,
        (state, { payload }) => {
          state.loading = false;
          state.error = payload?.message || payload;
        },
      )

      .addCase(userOperations.createIncome.pending, (state, _) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        userOperations.createIncome.fulfilled,
        (state, { payload: { data, income } }) => {
          state.transaction.incomes.data.push(income.transaction);
          state.balance = income.newBalance;
          state.transaction.incomes.monthsStats = data.monthsStats;
          state.loading = false;
        },
      )
      .addCase(userOperations.createIncome.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload?.message || payload;
      })

      .addCase(userOperations.createExpense.pending, (state, _) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        userOperations.createExpense.fulfilled,
        (state, { payload: { data, expense } }) => {
          state.transaction.expense.data.push(expense.transaction);
          state.balance = expense.newBalance;
          state.transaction.expense.monthsStats = data.monthsStats;
          state.loading = false;
        },
      )
      .addCase(userOperations.createExpense.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload?.message || payload;
      })

      .addCase(userOperations.deleteIncomeTransaction.pending, (state, _) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        userOperations.deleteIncomeTransaction.fulfilled,
        (
          state,
          {
            payload: {
              id,
              newBalance: { newBalance },
              data,
            },
          },
        ) => {
          const idx = state.transaction.incomes.data.findIndex(
            item => item._id === id,
          );
          state.transaction.incomes.data.splice(idx, 1);
          state.balance = newBalance;
          state.transaction.incomes.monthsStats = data.monthsStats;
          state.loading = false;
        },
      )
      .addCase(
        userOperations.deleteIncomeTransaction.rejected,
        (state, { payload }) => {
          state.loading = false;
          state.error = payload?.message || payload;
        },
      )

      .addCase(userOperations.deleteExpenseTransaction.pending, (state, _) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        userOperations.deleteExpenseTransaction.fulfilled,
        (
          state,
          {
            payload: {
              id,
              newBalance: { newBalance },
              data,
            },
          },
        ) => {
          const idx = state.transaction.expense.data.findIndex(
            item => item._id === id,
          );
          state.transaction.expense.data.splice(idx, 1);
          state.balance = newBalance;
          state.transaction.expense.monthsStats = data.monthsStats;
          state.loading = false;
        },
      )
      .addCase(
        userOperations.deleteExpenseTransaction.rejected,
        (state, { payload }) => {
          state.loading = false;
          state.error = payload?.message || payload;
        },
      )

      .addCase(userOperations.getAllUserInfo.pending, (state, _) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        userOperations.getAllUserInfo.fulfilled,
        (state, { payload: { balance, email } }) => {
          state.email = email;
          state.balance = balance;
          state.loading = false;
        },
      )
      .addCase(userOperations.getAllUserInfo.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload?.message || payload;
      })

      .addCase(userOperations.patchNewBalance.pending, (state, _) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        userOperations.patchNewBalance.fulfilled,
        (state, { payload }) => {
          state.balance = payload;
          state.loading = false;
        },
      )
      .addCase(
        userOperations.patchNewBalance.rejected,
        (state, { payload }) => {
          state.loading = false;
          state.error = payload?.message || payload;
        },
      );
  },
});

export const { changeCurrentDay, changeCurrentTransaction, resetUserInfo } =
  userSlice.actions;

export default userSlice.reducer;
