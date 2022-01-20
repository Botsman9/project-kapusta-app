import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SectionTransactions from '../../components/transactions/SectionTransactions/SectionTransactions';
import AddDataForm from '../../components/transactions/AddDataForm/AddDataForm.jsx';
import TableData from '../../components/transactions/TableData/TableData';
import Summary from '../../components/transactions/Summary/Summary';
import userSelectors from '../../redux/user/userSelectors';
import { normalizeDateApi } from '../../services/normalize';
import * as userOperations from '../../redux/user/userOperations';
import * as userActions from '../../redux/user/userSlice';

import s from './IncomePage.module.css';
import useWResize from '../../hooks/useWResize';

const IncomePage = () => {
  const incomesTransactions = useSelector(
    userSelectors.getIncomesAllTransactions,
  );

  const incomesMonthsStats = useSelector(userSelectors.getIncomesMonthsStats);
  const currentDay = useSelector(userSelectors.getCurrentDay);
  const viewPort = useWResize();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.changeCurrentTransaction('income'));
    dispatch(userOperations.fetchIncome());
  }, [dispatch]);

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
        {viewPort.width >= 768 && <AddDataForm />}
        <div className={s.wrapperTables}>
          <TableData
            dataTransactions={filterForDate() || []}
            onChangeDel={onDelIncomeDataApi}
          />
          <Summary monthsStats={incomesMonthsStats} />
        </div>
      </SectionTransactions>
    </div>
  );
};

export default IncomePage;
