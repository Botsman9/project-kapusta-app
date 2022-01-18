import React from 'react';
import { normalizeDateRender } from '../../../services/normalize';
import s from './TableData.module.css';

const TableData = ({ dataTransactions, onChangeDel, isExpense = false }) => {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th className={s.titleLeft}>Дата</th>
          <th>Описание</th>
          <th>Категория</th>
          <th>Сумма</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {dataTransactions.map(
          ({ _id, date, description, category, amount }) => (
            <tr key={_id}>
              <td>{normalizeDateRender(date)}</td>
              <td>{description}</td>
              <td className={s.center}>{category}</td>
              <td className={isExpense ? s.expenseText : s.incomeText}>
                {isExpense ? '- ' : ''}
                {amount}.00 грн.
              </td>
              <td>
                <button onClick={() => onChangeDel(_id)}>del</button>
              </td>
            </tr>
          ),
        )}
        {/* <tr key="tests_325626ss">
          <td>05.09.2019</td>
          <td>Метро</td>
          <td>Транспорт</td>
          <td>- 30.00 грн.</td>

        </tr> */}
      </tbody>
    </table>
  );
};

export default TableData;
