import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import s from './ReportPeriod.module.css';

const ReportPeriod = () => {
  return (
    <div className={s.periodSection}>
      <p className={s.periodTitle}>Текущий период:</p>
      <span className={s.navReport}>
        <ArrowBackIos
          style={{ height: '12px', fill: '#FF751D', cursor: 'pointer' }}
        />
        <span className={s.reportDate}>Ноябрь 2019</span>
        <ArrowForwardIos
          style={{ height: '12px', fill: '#FF751D', cursor: 'pointer' }}
        />
      </span>
    </div>
  );
};

export default ReportPeriod;
