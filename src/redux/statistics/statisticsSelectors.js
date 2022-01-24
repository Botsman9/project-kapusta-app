const getIncomeMonthTotal = state => state.statistics.incomes.total;
const getExpenseMonthTotal = state => state.statistics.expense.total;

const getExpenseMonthTransactions = state => state.statistics.expense.data;

const getIncomeStatisticsCategories = state => state.statistics.incomes.data;
const getExpenseStatisticsCategories = state => state.statistics.expense.data;

const getStatisticsLoading = state => state.statistics.loading;
const getStatisticsError = state => state.statistics.error;
const getValueIsExpense = state => state.statistics.isExpense;

const getCurrentMonth = state => state.statistics.currentMonth;

const statisticsSelectors = {
  getCurrentMonth,
  getExpenseStatisticsCategories,
  getIncomeStatisticsCategories,
  getIncomeMonthTotal,
  getExpenseMonthTotal,
  getValueIsExpense,
};

export default statisticsSelectors;

// getExpenseStatisticsCategories;
