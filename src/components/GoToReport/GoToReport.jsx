import { NavLink } from 'react-router-dom';
import s from './GoToReport.module.css';

const GoToReport = () => {
  return (
    <div className={s.goToReport}>
      <NavLink to="/statistics" className={s.link}>
        <p style={{ marginRight: 20 }}>Перейти к отчетам</p>
        <svg
          className={s.iconReport}
          width="14"
          height="14"
          href="../../imges/svg/report.svg"
        >
          <path d="M0 4.2h3V14H0V4.2ZM5.6 0h2.8v14H5.6V0Zm5.6 8H14v6h-2.8V8Z" />
        </svg>
      </NavLink>
    </div>
  );
};
export default GoToReport;
