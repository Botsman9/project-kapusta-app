import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Balance from '../../../components/Balance/Balance';
import { fetchAllStatistics } from '../../../redux/statistics/statisticsOperations.js';
import statisticsSelectors from '../../../redux/statistics/statisticsSelectors.js';
import Report from '../../../components/Report/Report';
import ReportAmount from '../../../components/Report/ReportAmount/ReportAmount';
import ReportNavigation from './../../../components/Report/ReportNavigation/ReportNavigation';
import { ChartComp } from './../../../components/ChartReport/ChartReport';
import s from './';

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
      <ReportNavigation />
      <ReportAmount />
      <Report />
      <ChartComp />
    </div>
  );
};

export default StatisticsPage;
