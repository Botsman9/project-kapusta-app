import { useState } from 'react';
import s from './ReportNavigation.module.css';
import ToGoBack from '../../toGoBack/toGoBack';
import Balance from '../../Balance/Balance';
import ReportPeriod from './ReportPeriod';

const ReportNavigation = () => {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener(
    `resize`,
    event => {
      setWidth(event.target.innerWidth);
    },
    false,
  );

  return (
    <>
      {width >= 768 ? (
        <section className={s.reportNav}>
          <ToGoBack />
          <Balance />
          <ReportPeriod />
        </section>
      ) : (
        <section className={s.reportNav}>
          <ToGoBack />
          <ReportPeriod />
          <Balance />
        </section>
      )}
    </>
  );
};

export default ReportNavigation;
