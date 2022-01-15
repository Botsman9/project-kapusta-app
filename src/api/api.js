import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

export async function fetchIncome() {
  const { data } = await axios.get(`/transaction/income`);
  return data;
}

export async function fetchExpense() {
  const { data } = await axios.get(`/transaction/expense`);
  return data;
}

export async function fetchIncomeCategories() {
  const { data } = await axios.get(`/transaction/income-categories`);
  return data;
}

export async function fetchExpenseCategories() {
  const { data } = await axios.get(`transaction/income-categories`);
  return data;
}

export async function createIncome(obj) {
  const { data } = await axios.post(`/transaction/income`, obj);
  return data;
}

export async function createExpense(obj) {
  const { data } = await axios.post(`/transaction/expense`, obj);
  return data;
}

export async function getPeriod(period) {
  const { data } = await axios.get(`/transaction/period-data`, period);
  return data;
}

export async function deleteTransaction(id) {
  const { data } = await axios.delete(`/transaction/${id}`);
  return data;
}

export async function chengeUserBalance(balance) {
  const { data } = await axios.patch(`/user/balance`, balance);
  return data;
}

export async function getUserInfo() {
  const { data } = await axios.get(`/user`);
  return data;
}
