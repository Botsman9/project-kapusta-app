import { useEffect, useState } from 'react';
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
  const [categoryRender, setCategoryRender] = useState(null);
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
      <ReportNavigation disabled="disabled" />
      <ReportAmount />
      <Report
        setCategoryRender={setCategoryRender}
        categoryRender={categoryRender}
      />
      <ChartComp categoryRender={categoryRender} />
    </>
  );
};

export default StatisticsPage;
