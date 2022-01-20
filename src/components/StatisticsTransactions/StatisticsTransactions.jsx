import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllStatistics } from '../../redux/statistics/statisticsOperations';
import { ChartComp } from '../ChartReport/ChartReport';
import Report from '../Report/Report';
import ReportAmount from './../Report/ReportAmount/ReportAmount';
import ReportNavigation from '../Report/ReportNavigation/ReportNavigation';
import { PropTypes } from 'prop-types';

function StatisticsTransactions() {
  const dispatch = useDispatch();
  const data = new Date().toISOString();
  console.log('data', data);
  useEffect(() => {
    dispatch(fetchAllStatistics('2022-01'));
  }, []);

  return (
    <div>
      <ReportNavigation />
      <ReportAmount />
      <Report />
      <ChartComp />
    </div>
  );
}
StatisticsTransactions.PropTypes = {};

export default StatisticsTransactions;
