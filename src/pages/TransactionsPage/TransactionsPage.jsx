import React from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import TransactionsNav from '../../components/transactions/TransactionsNav/TransactionsNav';
import { fetchAllStatistics } from '../../redux/statistics/statisticsOperations';
import s from './TransactionsPage.module.css';

const TransactionsPage = () => {
  const dispatch = useDispatch();
  dispatch(fetchAllStatistics('2022-01'));
  return (
    <div>
      Страница содержащая в себе доходы и расходы
      <TransactionsNav />
      <Outlet />
    </div>
  );
};

export default TransactionsPage;
