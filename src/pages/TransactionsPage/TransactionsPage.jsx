import React from 'react';
import { Outlet } from 'react-router-dom';
import TransactionsNav from '../../components/transactions/TransactionsNav/TransactionsNav';
import GoToReport from '../../components/GoToReport/GoToReport';
import Balance from '../../components/Balance/Balance';
// import CurrentPeriod from '../../components/CurrentPeriod/CurrentPeriod';
// import ToGoBack from '../../components/toGoBack/toGoBack';

const TransactionsPage = () => {
  return (
    <div>
      <div>
        <Balance />
        <GoToReport />
      </div>
      {/* <ToGoBack /> */}
      {/* <CurrentPeriod /> */}
      <TransactionsNav />
      <Outlet />
    </div>
  );
};

export default TransactionsPage;
