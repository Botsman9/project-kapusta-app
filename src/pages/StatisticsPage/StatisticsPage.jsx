import React from 'react';

import BalanceTesting from '../../components/Balance/Balance';
import ToGoBack from '../../components/toGoBack/toGoBack';

const StatisticsPage = () => {
  return (
    <div>
      3 страница со статистикой
      {/* <Balance /> */}
      <BalanceTesting />
      <ToGoBack />
    </div>
  );
};

export default StatisticsPage;
