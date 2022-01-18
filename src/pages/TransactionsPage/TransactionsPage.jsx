import React from 'react';
import { Outlet } from 'react-router-dom';
import TransactionsNav from '../../components/transactions/TransactionsNav/TransactionsNav';
import GoToReport from '../../components/GoToReport/GoToReport';
import Balance from '../../components/Balance/Balance';

const TransactionsPage = () => {
  return (
    <div>
      <div>
        <Balance />
        <GoToReport />
      </div>
      <TransactionsNav />
      <Outlet />
    </div>
  );
};

export default TransactionsPage;
