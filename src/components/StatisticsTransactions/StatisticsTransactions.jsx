// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchAllStatistics } from '../../redux/statistics/statisticsOperations';
// import { ChartComp } from '../ChartReport/ChartReport';
// import Report from '../Report/Report';
// import ReportAmount from './../Report/ReportAmount/ReportAmount';
// import ReportNavigation from '../Report/ReportNavigation/ReportNavigation';

// function StatisticsTransactions() {
//   const dispatch = useDispatch();
//   const data = new Date().toISOString();
//   console.log('data', data);
//   useEffect(() => {
//     dispatch(fetchAllStatistics('2022-01'));
//   }, []);

//   return (
//     <>
//       {viewPort.width >= 768 && (
//         <>
//           <ReportNavigation />
//           <ReportAmount />
//           <Report />
//           <ChartComp />
//         </>
//       )}

//       {viewPort.width < 768 && (
//         <>
//           <ReportNavigation />
//           <ReportAmount />
//           <Report />
//           <ChartComp />
//         </>
//       )}
//     </>
//   );
// }
// StatisticsTransactions.PropTypes = {};

// export default StatisticsTransactions;
