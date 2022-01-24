import React from 'react';
import { useSelector } from 'react-redux';
import statisticsSelectors from '../../../redux/statistics/statisticsSelectors';
import sprite from '../iconCategories/icon.svg';
import category from './expense.json';
import s from './ExperencesReportList.module.css';

const ExpencesReportList = ({ setCategoryRender, categoryRender }) => {
  const expenseData = useSelector(
    statisticsSelectors.getExpenseStatisticsCategories,
  );
  const expenseArray = Object.entries(expenseData);

  return (
    <ul className={s.expenceReport}>
      {expenseArray.map((el, idx) => (
        <li
          key={idx}
          className={`${s.expenceReportItem} ${
            el[0] === categoryRender ? s.activeItem : ''
          }`}
          onClick={() => setCategoryRender(el[0])}
        >
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

export default ExpencesReportList;
