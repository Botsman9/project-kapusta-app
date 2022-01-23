import s from './ReportNavigation.module.css';
import ToGoBack from '../../toGoBack/toGoBack';
import Balance from '../../Balance/Balance';
import ReportPeriod from './ReportPeriod';
import useWResize from '../../../hooks/useWResize';
import mob from './ReportNavigationMob.module.css';

const ReportNavigation = () => {
  const viewPort = useWResize();

  return (
    <>
      {viewPort.width >= 768 ? (
        <section className={s.reportNav}>
          <ToGoBack />
          <Balance />
          <ReportPeriod />
        </section>
      ) : (
        <section className={s.reportNav}>
          <ToGoBack />
          <ReportPeriod />
          <div className={mob.wrapperMobileBalance}>
            <Balance />
          </div>
        </section>
      )}
    </>
  );
};

export default ReportNavigation;
