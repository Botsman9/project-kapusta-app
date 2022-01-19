const getIncomeMonthTotal = state => state.statistics.incomes.total;
const getIncomesMonthTransactions = state => state.statistics.incomes.data;

const getExpenseMonthTotal = state => state.statistics.expense.total;
const getExpenseMonthTransactions = state => state.statistics.expense.data;

const getStatisticsLoading = state => state.statistics.loading;
const getStatisticsError = state => state.statistics.error;

const getCurrentMonth = state => state.statistics.currentMonth;

const statisticsSelectors = { getCurrentMonth };

export default statisticsSelectors;
