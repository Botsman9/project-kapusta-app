import React from 'react';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos.js';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos.js';

import s from './CurrentPeriod.module.css';

import months from '../../utils/dataMonth';
// const months = [
//   { id: '1', name: 'Январь' },
//   { id: '2', name: 'Февраль' },
//   { id: '3', name: 'Март ' },
//   { id: '4', name: 'Апрель' },
//   { id: '5', name: 'Май' },
//   { id: '6', name: 'Июнь' },
//   { id: '7', name: 'Июль' },
//   { id: '8', name: 'Август' },
//   { id: '9', name: 'Сентябрь' },
//   { id: '10', name: 'Октябрь' },
//   { id: '11', name: 'Ноябрь' },
//   { id: '12', name: 'Декабрь' },
// ];

const CurrentPeriod = ({
  currentMonth,
  currentYear,
  onHandleClickRight,
  onHandleClickLeft,
}) => {
  const monthToString = String(currentMonth);
  const selectMonth = months.filter(el => el.id === monthToString);
  return (
    <div className={s.reportMonth}>
      <p className={s.title}>Текущий период:</p>
      <div className={s.transactionWrapper}>
        <ArrowBackIosIcon
          style={{ color: '#FF751D', width: '12', cursor: 'pointer' }}
          onClick={onHandleClickLeft}
        />

        {/* {
          <span
            className={s.reportMonthTitle}
          >{`${selectMonth[0].name} ${currentYear}`}</span>
        } */}
        <ArrowForwardIosIcon
          style={{ color: '#FF751D', width: '12', cursor: 'pointer' }}
          onClick={onHandleClickRight}
        />
      </div>
    </div>
  );
};
export default CurrentPeriod;
