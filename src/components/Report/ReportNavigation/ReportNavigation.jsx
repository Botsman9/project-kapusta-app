import { useState } from 'react';
import s from './ReportNavigation.module.css';
import ReportGoBack from './ReportGoBack/ReportGoBack';
import ReportBalance from './ReportBalance/ReportBalance';
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
          <ReportGoBack />
          <ReportBalance />
          <ReportPeriod />
        </section>
      ) : (
        <section className={s.reportNav}>
          <ReportGoBack />
          <ReportPeriod />
          <ReportBalance />
        </section>
      )}
    </>
  );
};

export default ReportNavigation;
