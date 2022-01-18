import React from 'react';
import s from './Summary.module.css';

const Summary = ({ monthsStats }) => {
  return (
    <div className={s.summaryContainer}>
      <table className={s.summaryContainer}>
        <thead>
          <tr>
            <th className={s.summaryTitle}>Сводка</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(monthsStats).map(([month, amount]) => {
            if (amount === 'N/A') return false;
            return (
              <tr key={month} className={s.summaryList}>
                <td className={s.summaryItem}>{month}</td>
                <td className={s.summaryItem}>{amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Summary;

/* <tr>
 <td>Октябрь</td>
 <td>30 000.00</td>
 </tr> */
