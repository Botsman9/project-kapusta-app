const getUserBalance = state => state.user.balance;

const getIncomeCategory = state => state.user.transaction.incomes.categories;
const getIncomesAllTransactions = state => state.user.transaction.incomes.data;
const getIncomesMonthsStats = state =>
  state.user.transaction.incomes.monthsStats;

const getExpenseCategory = state => state.user.transaction.expense.categories;
const getExpenseAllTransactions = state => state.user.transaction.expense.data;
const getExpenseMonthsStats = state =>
  state.user.transaction.expense.monthsStats;

const getUserLoading = state => state.user.loading;
const getUserError = state => state.user.error;

const userSelectors = {
  getUserBalance,

  getIncomeCategory,
  getIncomesAllTransactions,
  getIncomesMonthsStats,

  getExpenseCategory,
  getExpenseAllTransactions,
  getExpenseMonthsStats,

  getUserLoading,
  getUserError,
};

export default userSelectors;