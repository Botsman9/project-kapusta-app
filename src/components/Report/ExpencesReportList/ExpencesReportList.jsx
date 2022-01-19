import React from 'react';
import sprite from '../icon.svg';
import category from './expence.json';
import s from './ExpencesReportList.module.css';

const ExpencesReportList = () => {
  return (
    <ul className={s.expenceReport}>
      {category.map(el => (
        <li key={el.id} className={s.expenceReportItem}>
          <p className={s.expenceValue}>500.00</p>
          <svg className={s.expenceIcon}>
            <use xlinkHref={`${sprite}#${el.label}`} />
          </svg>
          <p className={s.expenceCategory}>{el.label}</p>
        </li>
      ))}
    </ul>
  );
};

export default ExpencesReportList;
