import React, { Suspense, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddDataForm from '../../components/transactions/AddDataForm/AddDataForm';
import SectionTransactions from '../../components/transactions/SectionTransactions/SectionTransactions';
import Summary from '../../components/transactions/Summary/Summary';
import TableData from '../../components/transactions/TableData/TableData';
import userSelectors from '../../redux/user/userSelectors';
import * as userOperations from '../../redux/user/userOperations';
import s from './ExpensePage.module.css';
import * as userActions from '../../redux/user/userSlice';
import { normalizeDateApi } from '../../services/normalize';
import useWResize from '../../hooks/useWResize';
import { getIsLoggedIn, getIsRefresh } from '../../redux/auth/auth-selectors';

const ExpensePage = () => {
  const expenseTransactions = useSelector(
    userSelectors.getExpenseAllTransactions,
  );
  const expenseMonthsStats = useSelector(userSelectors.getExpenseMonthsStats);

  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefresh = useSelector(getIsRefresh);

  const currentDay = useSelector(userSelectors.getCurrentDay);
  const viewPort = useWResize();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.changeCurrentTransaction('expense'));

    if (isRefresh || !isLoggedIn) return;

    dispatch(userOperations.fetchExpense());
  }, [dispatch, isLoggedIn, isRefresh]);

  const onDelExpenseDataApi = id =>
    dispatch(userOperations.deleteExpenseTransaction(id));

  const filterForDate = useCallback(() => {
    if (!currentDay) return;
    const date = normalizeDateApi(currentDay);
    const dateForCurrentDay = expenseTransactions.filter(
      item => item.date === date,
    );
    return dateForCurrentDay;
  }, [currentDay, expenseTransactions]);

  return (
    <div>
      <SectionTransactions>
        {viewPort.width >= 768 && <AddDataForm />}
        <div className={s.wrapperTables}>
          <TableData
            isExpense={true}
            dataTransactions={filterForDate() || []}
            onChangeDel={onDelExpenseDataApi}
          />
          <Summary monthsStats={expenseMonthsStats} />
        </div>
      </SectionTransactions>
    </div>
  );
};

export default ExpensePage;
