import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import userSelectors from '../redux/user/userSelectors';
import MyLoader from '../components/UI/loader/MyLoader';
import useWResize from '../hooks/useWResize';

const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage' /* webpackChunkName: "Home___page" */),
);
const TransactionsPage = lazy(() =>
  import(
    '../pages/TransactionsPage/TransactionsPage' /* webpackChunkName: "Transactios___page" */
  ),
);
const ExpensePage = lazy(() =>
  import(
    '../pages/ExpensePage/ExpensePage' /* webpackChunkName: "Сosts___page" */
  ),
);
const IncomePage = lazy(() =>
  import(
    '../pages/IncomePage/IncomePage' /* webpackChunkName: "Income___page" */
  ),
);
const StatisticsPage = lazy(() =>
  import(
    '../pages/StatisticsPage/StatisticsPageMonth' /* webpackChunkName: "Statistics___page" */
  ),
);
const MobileFormPage = lazy(() =>
  import(
    '../pages/TransactionsPage/MobileFormPage/MobileFormPage' /* webpackChunkName: "MobileForm___page" */
  ),
);

const AllRoutes = () => {
  const viewPort = useWResize();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const currentTransaction = useSelector(userSelectors.getCurrentTransaction);

  const isMobile = viewPort.width < 768;

  return (
    <Suspense fallback={<MyLoader />}>
      <Routes>
        <Route path="/" element={<Navigate replace to="home" />} />
        <Route
          path="home"
          element={isLoggedIn ? <Navigate to="/transactions" /> : <HomePage />}
        />
        <Route
          path="transactions"
          element={!isLoggedIn ? <Navigate to="/home" /> : <TransactionsPage />}
        >
          <Route index element={<ExpensePage />} />
          <Route path="expense" element={<ExpensePage />} />
          <Route path="income" element={<IncomePage />} />
        </Route>
        <Route
          path="mobile-add-trandaction"
          element={
            !isLoggedIn ? (
              <Navigate to="/home" />
            ) : isMobile ? (
              <MobileFormPage />
            ) : (
              <Navigate to={`/transactions/${currentTransaction}`} />
            )
          }
        />
        <Route
          path="statistics"
          element={!isLoggedIn ? <Navigate to="/home" /> : <StatisticsPage />}
        />
      </Routes>
    </Suspense>
  );
};

export default AllRoutes;
