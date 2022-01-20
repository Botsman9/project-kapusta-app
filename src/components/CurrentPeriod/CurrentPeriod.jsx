import React from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos.js';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import s from './CurrentPeriod.module.css';

import arrMonths from '../../utils/dataMonth';

export default function CurrentPeriod({
  month,
  year,
  handleChangeMonthLeft,
  handleChangeMonthRight,
}) {
  const currentMonth = arrMonths.filter(item => item.id === String(month));
  return (
    <div className={s.navigationMonthTab}>
      <p className={s.navigationMonthPeriod}>Текущий период:</p>
      <div className={s.navigationMonth}>
        <ArrowBackIosIcon
          style={{ color: '#FF751D', cursor: 'pointer' }}
          fontSize="small"
          onClick={handleChangeMonthLeft}
        />
        <p>январь 2022</p>
        {/* <p
          className={s.navigationMonthName}
        >{`${currentMonth[0].name} ${year}`}</p> */}
        <ArrowForwardIosIcon
          style={{ color: '#FF751D', cursor: 'pointer' }}
          fontSize="small"
          onClick={handleChangeMonthRight}
        />
      </div>
    </div>
  );
}
