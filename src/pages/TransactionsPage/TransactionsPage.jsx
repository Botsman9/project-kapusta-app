import React from 'react';
import { Outlet } from 'react-router-dom';
import TransactionsNav from '../../components/transactions/TransactionsNav/TransactionsNav';
import s from './TransactionsPage.module.css';

const TransactionsPage = () => {
  return (
    <div>
      Страница содержащая в себе доходы и расходы
      <TransactionsNav />
      <Outlet />
    </div>
  );
};

export default TransactionsPage;
