import sprite from '../icon.svg';
import category from './income.json';
import s from './ReportIncomesList.module.css';

const ReportIncomesList = () => {
  return (
    <ul className={s.expenceReport}>
      {category.map(el => (
        <li key={el.id} className={s.expenceReportItem}>
          <p className={s.expenceValue}>Value grn</p>
          <svg className={s.expenceIcon}>
            <use xlinkHref={`${sprite}#${el.label}`} />
          </svg>
          <p className={s.expenceCategory}>{el.label}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReportIncomesList;
