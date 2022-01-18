const getIncomeMonthTotal = state => state.statistics.incomes.total;
const getIncomesMonthTransactions = state => state.statistics.incomes.data;

const getExpenseMonthTotal = state => state.statistics.expense.total;
const getExpenseMonthTransactions = state => state.statistics.expense.data;

const getStatisticsLoading = state => state.statistics.loading;
const getStatisticsError = state => state.statistics.error;

const getcurrentMonth = state => state.statistics.changeCurrentMonth;

const userSelectors = { getcurrentMonth };

export default userSelectors;
