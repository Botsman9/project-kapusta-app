import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SectionTransactions from '../../components/transactions/SectionTransactions/SectionTransactions';
import AddDataForm from '../../components/transactions/AddDataForm/AddDataForm.jsx';
import TableData from '../../components/transactions/TableData/TableData';
import Summary from '../../components/transactions/Summary/Summary';
import userSelectors from '../../redux/user/userSelectors';
import { normalizeDateApi } from '../../services/normalize';
import * as userOperations from '../../redux/user/userOperations';
import s from './IncomePage.module.css';

const IncomePage = () => {
  const incomeCategory = useSelector(userSelectors.getIncomeCategory);
  const incomesTransactions = useSelector(
    userSelectors.getIncomesAllTransactions,
  );

  const incomesMonthsStats = useSelector(userSelectors.getIncomesMonthsStats);
  const currentDay = useSelector(userSelectors.getCurrentDay);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userOperations.fetchIncome());
    dispatch(userOperations.fetchIncomeCategories());
  }, [dispatch]);

  const onAddIncomeDataApi = data =>
    dispatch(userOperations.createIncome(data));

  const onDelIncomeDataApi = id =>
    dispatch(userOperations.deleteIncomeTransaction(id));

  const filterForDate = useCallback(() => {
    if (!currentDay) return;
    const date = normalizeDateApi(currentDay);
    const dateForCurrentDay = incomesTransactions.filter(
      item => item.date === date,
    );
    return dateForCurrentDay;
  }, [currentDay, incomesTransactions]);

  return (
    <div>
      <SectionTransactions>
        <AddDataForm
          allCategory={incomeCategory}
          onAddDataApi={onAddIncomeDataApi}
        />
        <div className={s.wrapperTables}>
          <TableData
            dataTransactions={filterForDate() || []}
            // dataTransactions={incomesTransactions}
            onChangeDel={onDelIncomeDataApi}
          />
          <Summary monthsStats={incomesMonthsStats} />
        </div>
      </SectionTransactions>
    </div>
  );
};

export default IncomePage;
