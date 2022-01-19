import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Balance from '../../components/Balance/Balance';
import s from './StatisticsPage.module.css';

import { fetchAllStatistics } from '../../redux/statistics/statisticsOperations.js';
import statisticsSelectors from '../../redux/statistics/statisticsSelectors.js';
import ReportAmount from '../../components/Report/ReportAmount/ReportAmount';
const StatisticsPage = () => {
  const dispatch = useDispatch();

  const currentMonth = useSelector(statisticsSelectors.getCurrentMonth);
  console.log('currentMonth', currentMonth);

  useEffect(() => {
    if (!currentMonth) return;
    dispatch(fetchAllStatistics(currentMonth));
  }, [dispatch]);

  return (
    <div>
      <Balance />
      <ReportAmount />
    </div>
  );
};

const obj = { текила: 600, ром: 1000, ликер: 500 };

export default StatisticsPage;
