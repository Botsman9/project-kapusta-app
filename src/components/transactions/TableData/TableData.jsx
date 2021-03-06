import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React, { useState } from 'react';
import useWResize from '../../../hooks/useWResize';
import { normalizeDateRender } from '../../../services/normalize';
import MyModal from '../../UI/modal/MyModal';
import s from './TableData.module.css';
import sMobile from './MobileTableData.module.css';
import './style.css';

const TableData = ({
  dataTransactions = [],
  onChangeDel,
  isExpense = false,
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [idTransaction, setIdTransaction] = useState('');

  const toggleModal = e => setIsOpenModal(!isOpenModal);

  const onTakeIdForDel = id => {
    setIdTransaction(id);
    setIsOpenModal(!isOpenModal);
  };

  const viewPort = useWResize();

  return (
    <>
      {/* {isOpen && (
        <MyModal
          onClick={() => onChangeDel(idTransaction)}
          toggleModal={() => setIsOpen(!isOpen)}
        >
          Вы уверены?
        </MyModal>
      )} */}

      <CSSTransition
        in={isOpenModal}
        classNames="modal"
        timeout={500}
        mountOnEnter
        unmountOnExit
      >
        <MyModal
          toggleModal={toggleModal}
          onClick={() => onChangeDel(idTransaction)}
        >
          Вы уверенны?
        </MyModal>
      </CSSTransition>

      {viewPort.width >= 768 && (
        <div className={s.bodyTable} id={s.style2}>
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
                  <tr className={s.td} key={_id}>
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
        </div>
      )}

      {viewPort.width < 768 && (
        <div>
          <TransitionGroup component="ul" className={sMobile.listTransactions}>
            {/* <ul className={sMobile.listTransactions}> */}
            {dataTransactions.map(
              ({ _id, date, description, category, amount }) => (
                <CSSTransition
                  key={_id}
                  timeout={500}
                  classNames="item"
                  mountOnEnter
                  unmountOnExit
                >
                  <li className={sMobile.itemTransactions} key={_id}>
                    <div className={sMobile.leftColum}>
                      <p className={sMobile.elem}>
                        <span>{description}</span>
                      </p>
                      <p className={sMobile.data}>
                        <span>{normalizeDateRender(date)}</span>
                        <span>{category}</span>
                      </p>
                    </div>
                    <div className={sMobile.rigthColum}>
                      <p
                        role="total"
                        className={
                          sMobile[
                            isExpense ? 'totalDecrement' : 'totalIncrement'
                          ]
                        }
                      >
                        {isExpense ? '- ' : ''}
                        {amount}.00 грн.
                      </p>
                      <button
                        onClick={() => onTakeIdForDel(_id)}
                        className={sMobile.deleteBtn}
                      ></button>
                    </div>
                  </li>
                </CSSTransition>
              ),
            )}
            {/* </ul> */}
          </TransitionGroup>
        </div>
      )}
    </>
  );
};

export default TableData;
