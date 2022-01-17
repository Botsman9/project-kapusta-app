import instanceAxios from './Axios';

export async function fetchIncome() {
  const { data } = await instanceAxios.get(`/transaction/income`);
  return data;
}

export async function fetchExpense() {
  const { data } = await instanceAxios.get(`/transaction/expense`);
  return data;
}

export async function fetchIncomeCategories() {
  const { data } = await instanceAxios.get(`/transaction/income-categories`);
  return data;
}

export async function fetchExpenseCategories() {
  const { data } = await instanceAxios.get(`transaction/expense-categories`);
  return data;
}

export async function createIncome(obj) {
  const { data } = await instanceAxios.post(`/transaction/income`, obj);
  return data;
}

export async function createExpense(obj) {
  const { data } = await instanceAxios.post(`/transaction/expense`, obj);
  return data;
}

export async function getPeriod(period) {
  const { data } = await instanceAxios.get(`/transaction/period-data`, period);
  return data;
}

export async function deleteTransaction(id) {
  const { data } = await instanceAxios.delete(`/transaction/${id}`);
  return data;
}

export async function chengeUserBalance(balance) {
  const { data } = await instanceAxios.patch(`/user/balance`, balance);
  return data;
}

export async function getUserInfo() {
  const { data } = await instanceAxios.get(`/user`);
  return data;
}
