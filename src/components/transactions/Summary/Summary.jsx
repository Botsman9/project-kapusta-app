import React from 'react';
import s from './Summary.module.css';

const Summary = ({ monthsStats }) => {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th>Сводка</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(monthsStats).map(([month, amount]) => {
          if (amount === 'N/A') return false;
          return (
            <tr key={month}>
              <td>{month}</td>
              <td>{amount}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Summary;

/* <tr>
 <td>Октябрь</td>
 <td>30 000.00</td>
 </tr> */
