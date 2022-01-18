import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MyLoader from '../components/UI/loader/MyLoader';

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
    '../pages/StatisticsPage/StatisticsPage' /* webpackChunkName: "Statistics___page" */
  ),
);

const AllRoutes = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
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
          path="statistics"
          element={!isLoggedIn ? <Navigate to="/home" /> : <StatisticsPage />}
          // element={<StatisticsPage />}
        />
      </Routes>
    </Suspense>
  );
};

export default AllRoutes;
