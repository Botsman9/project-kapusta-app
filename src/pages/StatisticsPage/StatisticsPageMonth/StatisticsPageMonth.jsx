import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllStatistics } from '../../../redux/statistics/statisticsOperations.js';
import statisticsSelectors from '../../../redux/statistics/statisticsSelectors.js';
import {
  getIsLoggedIn,
  getIsRefresh,
} from '../../../redux/auth/auth-selectors';
import Report from '../../../components/Report/Report';
import ReportAmount from '../../../components/Report/ReportAmount/ReportAmount';
import ReportNavigation from './../../../components/Report/ReportNavigation/ReportNavigation';
import useWResize from '../../../hooks/useWResize';
import { ChartComp } from './../../../components/ChartReport/ChartReport';

const StatisticsPage = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(getIsRefresh);
  const isLoggedIn = useSelector(getIsLoggedIn);

  const currentMonth = useSelector(statisticsSelectors.getCurrentMonth);

  useEffect(() => {
    if (isRefresh || !isLoggedIn || !currentMonth) return;
    dispatch(fetchAllStatistics(currentMonth));
  }, [dispatch, isRefresh, isLoggedIn, currentMonth]);
  const viewPort = useWResize();
  return (
    <>
      {viewPort.width >= 768 && (
        <>
          <ReportNavigation />
          <ReportAmount />
          <Report />
          <ChartComp />
        </>
      )}

      {viewPort.width < 768 && (
        <>
          <ReportNavigation />
          <ReportAmount />
          <Report />
          <ChartComp />
        </>
      )}
    </>
  );
};

export default StatisticsPage;
