import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchIncome,
  fetchExpense,
  fetchExpenseCategories,
  fetchIncomeCategories,
  createExpense,
  createIncome,
  deleteTransaction,
} from './transactions-operations';

const transactions = createReducer([], {
  [fetchIncome.fulfilled]: (state, { payload }) => payload,
  [fetchExpense.fulfilled]: (state, { payload }) => payload,
  [fetchExpenseCategories.fulfilled]: (state, { payload }) => payload,
  [fetchIncomeCategories.fulfilled]: (state, { payload }) => payload,
  [createIncome.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
  [createExpense.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteTransaction.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const isLoading = createReducer(false, {
  [fetchIncome.pending]: () => true,
  [fetchIncome.fulfilled]: () => false,
  [fetchIncome.rejected]: () => false,
  [fetchExpense.pending]: () => true,
  [fetchExpense.fulfilled]: () => false,
  [fetchExpense.rejected]: () => false,
  [fetchExpenseCategories.pending]: () => true,
  [fetchExpenseCategories.fulfilled]: () => false,
  [fetchExpenseCategories.rejected]: () => false,
  [fetchIncomeCategories.pending]: () => true,
  [fetchIncomeCategories.fulfilled]: () => false,
  [fetchIncomeCategories.rejected]: () => false,
  [createIncome.pending]: () => true,
  [createIncome.fulfilled]: () => false,
  [createIncome.rejected]: () => false,
  [createExpense.pending]: () => true,
  [createExpense.fulfilled]: () => false,
  [createExpense.rejected]: () => false,
  [deleteTransaction.pending]: () => true,
  [deleteTransaction.fulfilled]: () => false,
  [deleteTransaction.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchIncome.rejected]: (_, action) => action.payload,
  [fetchIncome.pending]: () => null,
  [fetchExpense.rejected]: (_, action) => action.payload,
  [fetchExpense.pending]: () => null,
  [fetchExpenseCategories.rejected]: (_, action) => action.payload,
  [fetchExpenseCategories.pending]: () => null,
  [fetchIncomeCategories.rejected]: (_, action) => action.payload,
  [fetchIncomeCategories.pending]: () => null,
  [createIncome.rejected]: (_, action) => action.payload,
  [createIncome.pending]: () => null,
  [createExpense.rejected]: (_, action) => action.payload,
  [createExpense.pending]: () => null,
  [deleteTransaction.rejected]: (_, action) => action.payload,
  [deleteTransaction.pending]: () => null,
});

export default combineReducers({
  transactions,
  isLoading,
  error,
});
