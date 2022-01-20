import React from 'react';
import s from './Summary.module.css';

const Summary = ({ monthsStats }) => {
  return (
    // <div className={s.summaryContainer}>
    <table className={s.summaryContainer}>
      <thead>
        <tr>
          <th className={s.summaryTitle}>СВОДКА</th>
        </tr>
      </thead>
      <tbody>
        <tr className={s.summaryList}>
          {Object.entries(monthsStats).map(([month, amount]) => {
            if (amount === 'N/A') return false;
            return (
              //
              <td key={month} className={s.summaryItem}>
                {month.toUpperCase()} <span>{amount}.00</span>
              </td>
              //
            );
          })}
          {/* .slice(monthsStats.amount !== 'N/A', 6) */}
        </tr>
      </tbody>
    </table>
    // </div>
  );
};

export default Summary;

/* <tr>
 <td>Октябрь</td>
 <td>30 000.00</td>
 </tr> */
