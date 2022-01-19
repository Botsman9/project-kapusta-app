import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Balance from '../../components/Balance/Balance';
import s from './StatisticsPage.module.css';

import { fetchAllStatistics } from '../../redux/statistics/statisticsOperations.js';
import statisticsSelectors from '../../redux/statistics/statisticsSelectors.js';

const StatisticsPage = () => {
  const dispatch = useDispatch();

  const currentMonth = useSelector(state => state.statistics.currentMonth);
  console.log('currentMonth', currentMonth);

  useEffect(() => {
    dispatch(fetchAllStatistics(currentMonth));
  }, [dispatch]);

  return (
    <div>
      3 страница со статистикой
      <Balance />
    </div>
  );
};

const obj = { текила: 600, ром: 1000, ликер: 500 };

export default StatisticsPage;
