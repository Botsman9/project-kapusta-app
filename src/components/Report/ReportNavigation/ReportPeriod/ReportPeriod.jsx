import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import s from './ReportPeriod.module.css';
import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import * as statisticsOperations from '../../../../redux/statistics/statisticsOperations';

const months = {
  1: 'январь',
  2: 'февраль',
  3: 'март',
  4: 'апрель',
  5: 'май',
  6: 'июнь',
  7: 'июль',
  8: 'август',
  9: 'сентябрь',
  10: 'октябрь',
  11: 'ноябрь',
  12: 'декабрь',
};

export default function ReportPeriod() {
  const dispatch = useDispatch();

  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const [selectedMonth, setSelectedMonth] = useState(month);
  const [selectedYear, setSelectedYear] = useState(year);

  useEffect(() => {
    console.log('useEffect');
    const selectedDate = `${selectedYear}-${selectedMonth
      .toString()
      .padStart(2, 0)}`;
    dispatch(statisticsOperations.fetchAllStatistics(selectedDate));
  }, [dispatch, selectedMonth, selectedYear]);

  const onClickRight = () => {
    if (selectedMonth < 12) {
      setSelectedMonth(prev => prev + 1);
    } else {
      setSelectedMonth(1);
      setSelectedYear(prev => prev + 1);
    }
  };

  const onClickLeft = () => {
    if (selectedMonth <= 1) {
      setSelectedMonth(12);
      setSelectedYear(prev => prev - 1);
    } else {
      setSelectedMonth(prev => prev - 1);
    }
  };

  return (
    <div className={s.container}>
      <span className={s.label}>Текущий период:</span>
      <div className={s.wrapper}>
        <ArrowBackIos className={s.icon} onClick={onClickLeft} />

        <div className={s.data}>
          {months[selectedMonth]} {selectedYear}
        </div>
        <ArrowForwardIos className={s.icon} onClick={onClickRight} />
      </div>
    </div>
  );
}
