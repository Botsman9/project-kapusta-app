import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import s from './Balance.module.css';
import userSelectors from '../../redux/user/userSelectors';
import * as userOperations from '../../redux/user/userOperations';

const BalanceTesting = ({ hide, width }) => {
  const balance = useSelector(userSelectors.getUserBalance);
  const dispatch = useDispatch();
  const [sum, setSum] = useState(() => balance);

  const onHandleChange = e => {
    const { name, value } = e.target;
    if (name === 'balance') setSum(value);
  };

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
        <input
          type="text"
          name="balance"
          maxLength="10"
          value={sum}
          placeholder="00.00"
          onChange={onHandleChange}
          autoComplete="off"
        />
      </label>
      <button type="submit" disabled={balance === 0}>
        ПОДТВЕРДИТЬ
      </button>
    </form>
  );
};
export default BalanceTesting;
