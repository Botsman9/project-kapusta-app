import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import s from './Balance.module.css';
import userSelectors from '../../redux/user/userSelectors';
import * as userOperations from '../../redux/user/userOperations';

import ModalBalance from './balanceWarning';

const Balance = ({ hide, width }) => {
  const balance = useSelector(userSelectors.getUserBalance);
  const dispatch = useDispatch();
  const [sum, setSum] = useState(() => balance);
  const [setPromptClose, setClosePrompt] = useState(true);
  const toggleWindow = () => {
    setClosePrompt(setClosePrompt => !setClosePrompt);
  };

  const onHandleChange = e => setSum(e.currentTarget.value);

  useEffect(() => {
    setSum(balance);
  }, [balance]);

  const onhandleSubmit = e => {
    e.preventDefault();
    //обязательно balance в стейте должен быть 0, иначе будут конфликты с формой транзакций
    dispatch(userOperations.patchNewBalance({ newBalance: +sum }));
  };

  return (
    <form onSubmit={onhandleSubmit} className={s.reportBalance}>
      <label htmlFor="balans" className={s.balanceLabel}>
        Баланс:
        <div className={s.buttonsGroup}>
          {balance === 0 ? (
            <>
              {setPromptClose && <ModalBalance onClose={toggleWindow} />}
              <input
                type="text"
                name="name"
                maxLength="10"
                placeholder="00.00"
                onChange={onHandleChange}
                className={
                  width
                    ? `${s.balanceInputReport} ${s.balanceInput}`
                    : `${s.balanceInput}`
                }
                // className={s.balanceInput}
                autoComplete="off"
              />
              <button
                className={
                  width
                    ? `${s.balanceInputReport} ${s.balanceButton}`
                    : `${s.balanceButton} `
                }
                type="submit"
              >
                ПОДТВЕРДИТЬ
              </button>
            </>
          ) : (
            <>
              <p
                className={
                  width
                    ? `${s.balanceInput} ${s.balanceInputReport}`
                    : `${s.balanceInput}`
                }
              >
                {`${balance.toLocaleString('ru')}`} UAH
              </p>
              <button className={`${s.balanceButton} ${hide}`} disabled>
                ПОДТВЕРДИТЬ
              </button>
            </>
          )}
        </div>
      </label>
    </form>
  );
};
export default Balance;
