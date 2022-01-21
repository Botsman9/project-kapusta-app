import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import TransactionsNav from '../../components/transactions/TransactionsNav/TransactionsNav';
import GoToReport from '../../components/GoToReport/GoToReport';
import Balance from '../../components/Balance/Balance';
import useWResize from '../../hooks/useWResize';
import DatePickerForm from '../../components/transactions/AddDataForm/DatePickerForm/DatePickerForm';
import { useSelector, useDispatch } from 'react-redux';
import userSelectors from '../../redux/user/userSelectors';
import mob from './TransactionsPageMob.module.css';
import * as userActions from '../../redux/user/userSlice';
import FormTransactionsNav from '../../components/transactions/TransactionsNav/FormTransactionsNav/FormTransactionsNav';
import s from './TransactionsPage.module.css';

const TransactionsPage = () => {
  const dispatch = useDispatch();
  const viewPort = useWResize();
  const datePicker = useSelector(userSelectors.getCurrentDay);
  let currentDay = datePicker;

  if (!datePicker) {
    currentDay = Date.now();
  }

  useEffect(() => {
    dispatch(userActions.changeCurrentDay(currentDay));
  }, [currentDay, dispatch]);

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
            {datePicker && <DatePickerForm piker={currentDay} />}
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
