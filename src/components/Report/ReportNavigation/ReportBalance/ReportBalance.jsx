import s from './ReportBalance.module.css';
import { useState } from 'react';

const ReportBalance = () => {
  const startBalance = () => {};
  return (
    <div className={s.balSection}>
      <h3 className={s.balTitle}>Баланс:</h3>
      <p className={s.balMain}>55 000.00 UAH</p>
    </div>
  );
};

export default ReportBalance;
