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

    <div className={s.bodyTable} id={s.style2}>
      {' '}
      <table className={s.main}>
        <thead className={s.theadTable}>
          <tr>
            <th className={`${s.th} ${s.thData}`}>ДАТА</th>
            <th className={`${s.th} ${s.thData}`}>ОПИСАНИЕ</th>
            <th className={`${s.th} ${s.thData}`}>КАТЕГОРИЯ</th>
            <th className={`${s.th} ${s.thData}`}>СУММА</th>
            <th className={`${s.th} ${s.thData}`}></th>
          </tr>
        </thead>
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
                    onClick={() => onChangeDel(_id)}
                  ></button>
                </td>
              </tr>
            ),
          )}
          <tr className={s.td}>
            <td className={s.thData}></td>
            <td className={s.tdDesc}></td>
            <td className={s.thCateg}></td>
            <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
            <td className={s.thIcon}></td>
          </tr>
          <tr className={s.td}>
            <td className={s.thData}></td>
            <td className={s.tdDesc}></td>
            <td className={s.thCateg}></td>
            <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
            <td className={s.thIcon}></td>
          </tr>
          <tr className={s.td}>
            <td className={s.thData}></td>
            <td className={s.tdDesc}></td>
            <td className={s.thCateg}></td>
            <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
            <td className={s.thIcon}></td>
          </tr>
          <tr className={s.td}>
            <td className={s.thData}></td>
            <td className={s.tdDesc}></td>
            <td className={s.thCateg}></td>
            <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
            <td className={s.thIcon}></td>
          </tr>
          <tr className={s.td}>
            <td className={s.thData}></td>
            <td className={s.tdDesc}></td>
            <td className={s.thCateg}></td>
            <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
            <td className={s.thIcon}></td>
          </tr>
          <tr className={s.td}>
            <td className={s.thData}></td>
            <td className={s.tdDesc}></td>
            <td className={s.thCateg}></td>
            <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
            <td className={s.thIcon}></td>
          </tr>
          <tr className={s.td}>
            <td className={s.thData}></td>
            <td className={s.tdDesc}></td>
            <td className={s.thCateg}></td>
            <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
            <td className={s.thIcon}></td>
          </tr>
          <tr className={s.td}>
            <td className={s.thData}></td>
            <td className={s.tdDesc}></td>
            <td className={s.thCateg}></td>
            <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
            <td className={s.thIcon}></td>
          </tr>
          <tr className={s.td}>
            <td className={s.thData}></td>
            <td className={s.tdDesc}></td>
            <td className={s.thCateg}></td>
            <td className={isExpense ? s.tdSumExpense : s.tdSum}></td>
            <td className={s.thIcon}></td>
          </tr>
        </tbody>
      </table>
      {/* <div className={s.bodyTableScroll}>
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

        </tbody>
      </div> */}
    </div>
 

  );
};

export default TableData;

//   <>
// //       {isOpen && (
// //         <MyModal
// //           onClick={() => onChangeDel(idTransaction)}
// //           toggleModal={() => setIsOpen(!isOpen)}
// //         >
// //           Вы уверены?
// //         </MyModal>
// //       )}

// //       <div className={s.bodyTable}>
// //         {' '}
// //         <table className={s.main}>
// //           <thead className={s.theadTable}>
// //             <tr>
// //               <th className={s.titleLeft}>Дата</th>
// //               <th className={`${s.th} ${s.thData}`}>Описание</th>
// //               <th className={`${s.th} ${s.thData}`}>Категория</th>
// //               <th className={`${s.th} ${s.thData}`}>Сумма</th>
// //               <th className={`${s.th} ${s.thData}`}></th>
// //             </tr>
// //           </thead>
// //         </table>
// //         <div className={s.bodyTableScroll}>
// //           <tbody>
// //             {dataTransactions.map(
// //               ({ _id, date, description, category, amount }) => (
// //                 <tr key={_id} className={s.td}>
// //                   <td className={s.thData}>{normalizeDateRender(date)}</td>
// //                   <td className={s.tdDesc}>{description}</td>
// //                   <td className={s.thCateg}>{category}</td>
// //                   <td className={isExpense ? s.tdSumExpense : s.tdSum}>
// //                     {isExpense ? '- ' : ''}
// //                     {amount}.00 грн.
// //                   </td>
// //                   <td className={s.thIcon}>
// //                     <button
// //                       className={s.deleteBtn}
// //                       onClick={() => onTakeIdForDel(_id)}
// //                     >
// //                       del
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ),
// //             )}
// //           </tbody>
// //         </div>
// //       </div>
// //     </>
