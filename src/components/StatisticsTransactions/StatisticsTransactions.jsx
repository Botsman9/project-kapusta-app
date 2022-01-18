import { fetchAllStatistics } from '../../redux/statistics/statisticsOperations';
import React from 'react';
import { useDispatch } from 'react-redux';

function StatisticsTransactions() {
  const dispatch = useDispatch();
  dispatch(fetchAllStatistics('2022-01'));
  return <div></div>;
}

export default StatisticsTransactions;
