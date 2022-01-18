import React, { useState } from 'react';
import { normalizeDateRender } from '../../../services/normalize';
import MyModal from '../../UI/modal/MyModal';
import s from './TableData.module.css';

const TableData = ({ dataTransactions, onChangeDel, isExpense = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [idTransaction, setIdTransaction] = useState('');

  const onTakeIdForDel = id => {
    setIdTransaction(id);
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <MyModal
          onClick={() => onChangeDel(idTransaction)}
          toggleModal={() => setIsOpen(!isOpen)}
        >
          Вы уверены?
        </MyModal>
      )}

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
                  <td className={isExpense ? s.tdSumExpense : s.tdSum}>
                    {isExpense ? '- ' : ''}
                    {amount}.00 грн.
                  </td>
                  <td className={s.thIcon}>
                    <button
                      className={s.deleteBtn}
                      onClick={() => onTakeIdForDel(_id)}
                    >
                      del
                    </button>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </div>
      </div>
    </>
  );
};

export default TableData;
