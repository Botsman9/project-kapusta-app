import React from 'react';
import { Outlet } from 'react-router-dom';
import TransactionsNav from '../../components/transactions/TransactionsNav/TransactionsNav';
import GoToReport from '../../components/GoToReport/GoToReport';
import Balance from '../../components/Balance/Balance';
import s from './TransactionsPage.module.css';
import useWResize from '../../hooks/useWResize';
import DatePickerForm from '../../components/transactions/AddDataForm/DatePickerForm/DatePickerForm';
import { useSelector } from 'react-redux';
import userSelectors from '../../redux/user/userSelectors';
import mob from './TransactionsPageMob.module.css';
import FormTransactionsNav from '../../components/transactions/TransactionsNav/FormTransactionsNav/FormTransactionsNav';

const TransactionsPage = () => {
  const viewPort = useWResize();
  const datePicker = useSelector(userSelectors.getCurrentDay);

  return (
    <>
      {viewPort.width >= 768 && (
        <>
          <div className={s.wrapperBalnce}>
            <Balance />
            <GoToReport />
          </div>
          <TransactionsNav />
          <Outlet />
        </>
      )}

      {viewPort.width < 768 && (
        <>
          <div className={mob.wrapperMobileBalance}>
            <GoToReport />
            <Balance />
          </div>
          <div className={mob.wrapperDatePickerForm}>
            {datePicker && <DatePickerForm piker={datePicker} />}
            <FormTransactionsNav />
          </div>
          <Outlet />
          <TransactionsNav />
        </>
      )}
    </>
  );
};

export default TransactionsPage;

//<div>{datePicker && <DatePickerForm piker={datePicker} />}</div>  центрировать див
