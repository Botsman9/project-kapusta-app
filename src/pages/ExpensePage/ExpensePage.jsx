import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddDataForm from '../../components/transactions/AddDataForm/AddDataForm';
import SectionTransactions from '../../components/transactions/SectionTransactions/SectionTransactions';
import Summary from '../../components/transactions/Summary/Summary';
import TableData from '../../components/transactions/TableData/TableData';
import userSelectors from '../../redux/user/userSelectors';
import * as userOperations from '../../redux/user/userOperations';
import s from './ExpensePage.module.css';
import { normalizeDateApi } from '../../services/normalize';

const ExpensePage = () => {
  const expenseCategory = useSelector(userSelectors.getExpenseCategory);
  const expenseTransactions = useSelector(
    userSelectors.getExpenseAllTransactions,
  );
  const expenseMonthsStats = useSelector(userSelectors.getExpenseMonthsStats);

  const currentDay = useSelector(userSelectors.getCurrentDay);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userOperations.fetchExpense());
    dispatch(userOperations.fetchExpenseCategories());
  }, [dispatch]);

  const onAddExpenseDataApi = data =>
    dispatch(userOperations.createExpense(data));

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
        <AddDataForm
          isExpense={true}
          allCategory={expenseCategory}
          onAddDataApi={onAddExpenseDataApi}
        />
        <div className={s.wrapperTables}>
          <TableData
            isExpense={true}
            dataTransactions={filterForDate() || []}
            // dataTransactions={expenseTransactions}
            onChangeDel={onDelExpenseDataApi}
          />
          <Summary monthsStats={expenseMonthsStats} />
        </div>
      </SectionTransactions>
    </div>
  );
};

export default ExpensePage;
