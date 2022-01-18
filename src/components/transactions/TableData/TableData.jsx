import React from 'react';
import { normalizeDateRender } from '../../../services/normalize';
import s from './TableData.module.css';

const TableData = ({ dataTransactions, onChangeDel, isExpense = false }) => {
  return (
    <div className={s.bodyTable}>
      {' '}
      <table className={s.main}>
        <thead className={s.theadTable}>
          <tr>
            <th className={s.titleLeft}>Дата</th>
            <th className={`${s.th} ${s.thData}`}>Описание</th>
            <th className={`${s.th} ${s.thData}`}>Категория</th>
            <th className={`${s.th} ${s.thData}`}>Сумма</th>
            <th className={`${s.th} ${s.thData}`}></th>
          </tr>
        </thead>
      </table>
      <div className={s.bodyTableScroll}>
        <tbody>
          {dataTransactions.map(
            ({ _id, date, description, category, amount }) => (
              <tr key={_id} className={s.td}>
                <td className={s.thData}>{normalizeDateRender(date)}</td>
                <td className={s.tdDesc}>{description}</td>
                <td className={s.thCateg}>{category}</td>
                <td className={isExpense ? s.tdSum : s.tdSumExpense}>
                  {isExpense ? '- ' : ''}
                  {amount}.00 грн.
                </td>
                <td className={s.thIcon}>
                  <button
                    lassName={s.deleteBtn}
                    onClick={() => onChangeDel(_id)}
                  >
                    del
                  </button>
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
      </div>
    </div>
  );
};

export default TableData;
