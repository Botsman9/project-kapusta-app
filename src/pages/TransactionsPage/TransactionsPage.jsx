import React from 'react';
import { Outlet } from 'react-router-dom';
import s from './TransactionsPage.module.css';

const TransactionsPage = () => {
  return (
    <div>
      Страница содержащая в себе доходы и расходы
      <Outlet />
    </div>
  );
};

export default TransactionsPage;
