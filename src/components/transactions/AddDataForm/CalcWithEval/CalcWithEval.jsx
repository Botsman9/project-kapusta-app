import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { PropTypes } from 'prop-types';
import s from './CalcWithEval.module.css';

const CalcWithEval = ({ onCloseModal, addAmount, amount }) => {
  const [calculateInfo, setcalculateInfo] = useState(() =>
    amount ? amount : '',
  );

  const numbVal = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const firstSymbol = ['0', '+', '/', '*', ')'];
  const symb = ['+', '-', '*', '/'];

  const onClearResult = () => setcalculateInfo('');
  const onDelLastOne = () => setcalculateInfo(calculateInfo.slice(0, -1));

  const onMakeResult = () => {
    if (!calculateInfo) {
      toast.error('Сделай вычисления', {
        theme: 'colored',
      });
      return;
    }

    try {
      const res = eval(calculateInfo).toString();
      setcalculateInfo(res);
      return res;
    } catch (error) {
      if (error.message === "Unexpected token ')'") {
        toast.error('Проверьте наличие открывающей скобки', {
          theme: 'colored',
          autoClose: 2000,
        });
        return;
      } else if (error.message === 'Unexpected end of input') {
        toast.error('Проверьте правильность введенного выражения', {
          theme: 'colored',
          autoClose: 2000,
        });
        return;
      }
      toast.error('Проверьте правильность написанного', {
        theme: 'colored',
        autoClose: 2000,
      });
      return;
    }
  };

  const onClickBtn = e => {
    const value = e.target.value;

    let lastOne = calculateInfo.toString()[calculateInfo.toString().length - 1];

    const isFirstSymb = firstSymbol.some(elem => elem === value);
    const symbValue = symb.some(elem => elem === value);
    const symbValueLastOne = symb.some(elem => elem === lastOne);
    const isLastNumb = numbVal.some(elem => elem === lastOne);
    const isNumb = numbVal.some(elem => elem === value);

    const isParenthesesOpen = '(' === value;
    const isParOpenLastOne = '(' === lastOne;
    const isParenthesesClose = ')' === value;
    const isParCloseLastOne = ')' === lastOne;
    const isValueZer0 = '0' === value;

    const calculatorCondition =
      (!calculateInfo && isFirstSymb) ||
      (isParenthesesOpen && isLastNumb) ||
      (isParenthesesOpen && isParOpenLastOne) ||
      (isParCloseLastOne && isParenthesesOpen) ||
      (isParCloseLastOne && isNumb) ||
      (isFirstSymb && isParOpenLastOne) ||
      (isParenthesesClose && isParCloseLastOne) ||
      (isParOpenLastOne && isParenthesesClose) ||
      (isParOpenLastOne && symbValue) ||
      (symbValueLastOne && symbValue) ||
      (symbValueLastOne && isValueZer0) ||
      (symbValueLastOne && isParenthesesClose);

    if (calculatorCondition) return false;

    setcalculateInfo(prev => prev + value);
  };

  const onSendInfoInInput = e => {
    const result = onMakeResult();
    if (+result < 1 || !result) {
      toast.error('Вводимое число должно быть больше 1', {
        theme: 'colored',
        delay: 700,
      });
      return;
    }
    addAmount(result);
    onCloseModal();
  };

  return (
    <div>
      <div className={s.wrapperAll}>
        <p className={s.wrapperResult}>{calculateInfo ? calculateInfo : '0'}</p>
        <button className={s.btn} type="button" value="(" onClick={onClickBtn}>
          &#40;
        </button>
        <button className={s.btn} type="button" value=")" onClick={onClickBtn}>
          &#41;
        </button>
        <button className={s.btn} onClick={onClickBtn} value="/" type="button">
          &#247;
        </button>
        <button className={s.btn} onClick={onClickBtn} value="*" type="button">
          &#8727;
        </button>
        <button className={s.btn} onClick={onClickBtn} value="1" type="button">
          1
        </button>
        <button className={s.btn} onClick={onClickBtn} value="2" type="button">
          2
        </button>
        <button className={s.btn} onClick={onClickBtn} value="3" type="button">
          3
        </button>
        <button className={s.btn} onClick={onClickBtn} value="+" type="button">
          +
        </button>
        <button className={s.btn} onClick={onClickBtn} value="4" type="button">
          4
        </button>
        <button className={s.btn} onClick={onClickBtn} value="5" type="button">
          5
        </button>
        <button className={s.btn} onClick={onClickBtn} value="6" type="button">
          6
        </button>
        <button className={s.btn} onClick={onClickBtn} value="-" type="button">
          -
        </button>
        <button className={s.btn} onClick={onClickBtn} value="7" type="button">
          7
        </button>
        <button className={s.btn} onClick={onClickBtn} value="8" type="button">
          8
        </button>
        <button className={s.btn} onClick={onClickBtn} value="9" type="button">
          9
        </button>
        <button className={s.btn} onClick={onMakeResult} type="button">
          =
        </button>
        <button className={s.btn} onClick={onDelLastOne} type="button">
          &#8666;
        </button>
        <button className={s.btn} onClick={onClickBtn} value="0" type="button">
          0
        </button>
        <button className={s.btn} onClick={onClearResult} type="button">
          C
        </button>
        <button className={s.btn} onClick={onSendInfoInInput} type="button">
          OK
        </button>
      </div>
    </div>
  );
};

CalcWithEval.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  addAmount: PropTypes.func.isRequired,
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CalcWithEval;
