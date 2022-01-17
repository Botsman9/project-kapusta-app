import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

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
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Navigate replace to="home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="transactions" element={<TransactionsPage />}>
          <Route index element={<ExpensePage />} />
          <Route path="expense" element={<ExpensePage />} />
          <Route path="income" element={<IncomePage />} />
        </Route>
        <Route path="statistics" element={<StatisticsPage />} />
      </Routes>
    </Suspense>
  );
};

export default AllRoutes;
