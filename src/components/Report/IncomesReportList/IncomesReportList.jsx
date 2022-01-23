import sprite from '../iconCategories/icon.svg';
import { useSelector } from 'react-redux';
import statisticsSelectors from '../../../redux/statistics/statisticsSelectors';
import category from './income.json';
import s from './IncomesReportList.module.css';

const IncomesReportList = () => {
  const incomeData = useSelector(
    statisticsSelectors.getIncomeStatisticsCategories,
  );
  const incomeArray = Object.entries(incomeData);
  return (
    <ul className={s.expenceReport}>
      {incomeArray.map((el, idx) => (
        <li key={idx} className={s.expenceReportItem}>
          <p className={s.expenceValue}>{el[1].total}.00</p>
          <svg className={s.expenceIcon}>
            <use xlinkHref={`${sprite}#${el[0]}`} />
          </svg>
          <p className={s.expenceCategory}>{el[0]}</p>
        </li>
      ))}
    </ul>
  );
};

export default IncomesReportList;
