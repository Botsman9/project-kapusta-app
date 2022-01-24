import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userSelectors from '../../../redux/user/userSelectors';
import { toast } from 'react-toastify';
import { normalizeDateApi } from '../../../services/normalize';
import MyButton from '../../UI/button/MyButton';
import SelectCategory from './SelectCategory/SelectCategory';
import useWResize from '../../../hooks/useWResize';
import DatePickerForm from './DatePickerForm/DatePickerForm';
import * as userOperations from '../../../redux/user/userOperations';
import * as userActions from '../../../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import {
  getIsLoggedIn,
  getIsRefresh,
} from '../../../redux/auth/auth-selectors';
import CalcWithEval from './CalcWithEval/CalcWithEval';
import { ReactComponent as CalcIcon } from '../../../imges/svg/calculator.svg';
import 'react-datepicker/dist/react-datepicker.css';
import s from './AddDataForm.module.css';

const AddDataForm = () => {
  const dispatch = useDispatch();
  const datePicker = useSelector(userSelectors.getCurrentDay);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefresh = useSelector(getIsRefresh);
  const expenseCategory = useSelector(userSelectors.getExpenseCategory);
  const incomeCategory = useSelector(userSelectors.getIncomeCategory);
  const currentTransaction = useSelector(userSelectors.getCurrentTransaction);

  const isExpense = currentTransaction === 'expense';

  const allCategory = isExpense ? expenseCategory : incomeCategory;

  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const [isOpenCalc, onOpenCalc] = useState(false);
  const viewPort = useWResize();

  let navigate = useNavigate();

  let currentDay = datePicker;

  if (!datePicker) {
    currentDay = Date.now();
  }

  const ontoggleCalc = () => onOpenCalc(prev => !prev);

  useEffect(() => {
    if (isRefresh || !isLoggedIn) return;
    isExpense
      ? dispatch(userOperations.fetchExpenseCategories())
      : dispatch(userOperations.fetchIncomeCategories());
  }, [dispatch, isExpense, isLoggedIn, isRefresh]);

  useEffect(() => {
    dispatch(userActions.changeCurrentDay(currentDay));
  }, [currentDay, dispatch]);

  const goBack = () => {
    reset();
    currentTransaction
      ? navigate(`/transactions/${currentTransaction}`)
      : navigate('/transactions');
  };

  const addTransactionApi = (value, data) => {
    switch (value) {
      case 'expense':
        dispatch(userOperations.createExpense(data)).then(() => goBack());
        return;

      case 'income':
        dispatch(userOperations.createIncome(data)).then(() => goBack());
        return;

      default:
        return;
    }
  };

  const addData = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'description':
        setDescription(value);
        return;
      case 'amount':
        if (isNaN(Number(value))) {
          return setAmount(Number(amount));
        }
        setAmount(Number(value));
        return;
      default:
        return;
    }
  };

  const reset = () => {
    setDescription('');
    setAmount('');
    setCategory('');
  };

  const onSubmiteForm = e => {
    e.preventDefault();
    if (!datePicker) return;
    if (!category)
      return toast.error('Добвьте, пожалуйста, категорию.', {
        theme: 'colored',
      });
    if (amount < 1)
      return toast.error('Сумма транзакции должна быть минимум 1.', {
        theme: 'colored',
      });
    const date = normalizeDateApi(datePicker);
    const newProduct = { date, description, amount, category };
    addTransactionApi(currentTransaction, newProduct);
  };

  return (
    <>
      {viewPort.width >= 1280 && (
        <>
          <form onSubmit={onSubmiteForm} className={s.containerFormD}>
            <div>
              <DatePickerForm piker={currentDay} />
            </div>

            <div className={s.wrapperInput}>
              <label className={s.lDescriptions}>
                <input
                  type="text"
                  onChange={addData}
                  className={s.iDescriptions}
                  name="description"
                  title="Разрешено использовать только пробелы и русские/латинские буквы, не менее 3 и не более 20"
                  pattern="^[A-Za-zА-Яа-яЁё\s]{3,20}"
                  minLength="3"
                  maxLength="20"
                  value={description}
                  placeholder={
                    isExpense ? 'Описание товара' : 'Описание дохода'
                  }
                  required
                />
              </label>
              <label className={s.lSelect}>
                <div>
                  <SelectCategory
                    category={category}
                    allCategories={allCategory}
                    setCategory={setCategory}
                    isExpense={isExpense}
                  />
                </div>
              </label>
              <label className={s.lAmount}>
                <div className={s.wrapperIcon}>
                  <input
                    placeholder="0.00"
                    type="text"
                    title="Используйте числовой формат"
                    pattern="^[0-9]+$"
                    minLength="1"
                    maxLength="10"
                    onChange={addData}
                    className={s.iAmount}
                    name="amount"
                    value={amount}
                    required
                  />
                  <button type="button" onClick={ontoggleCalc}>
                    <CalcIcon />
                  </button>
                  {isOpenCalc && (
                    <div className={s.modalCalc}>
                      <CalcWithEval
                        onCloseModal={ontoggleCalc}
                        addAmount={setAmount}
                        amount={amount}
                      />
                    </div>
                  )}
                </div>
              </label>
            </div>
            <div className={s.wrapperBtn}>
              <MyButton classCss="myAccentBtn" type="submite">
                Ввод
              </MyButton>
              <MyButton classCss="myMinorBtn" type="button" onClick={reset}>
                Очистить
              </MyButton>
            </div>
          </form>
        </>
      )}

      {viewPort.width >= 768 && viewPort.width < 1280 && (
        <>
          <form onSubmit={onSubmiteForm} className={s.containerFormT}>
            <div className={s.wrapperFT}>
              <div>
                <DatePickerForm piker={currentDay} />{' '}
              </div>
              <div className={s.wrapperInput}>
                <label className={s.lDescriptions}>
                  <input
                    type="text"
                    title="Разрешено использовать только пробелы и русские/латинские буквы, не менее 3 и не более 20"
                    pattern="^[A-Za-zА-Яа-яЁё\s]{3,20}"
                    minLength="3"
                    maxLength="20"
                    onChange={addData}
                    className={s.iDescriptions}
                    name="description"
                    value={description}
                    placeholder={
                      isExpense ? 'Описание товара' : 'Описание дохода'
                    }
                    required
                  />
                </label>
                <label className={s.lSelect}>
                  <SelectCategory
                    category={category}
                    allCategories={allCategory}
                    setCategory={setCategory}
                    isExpense={isExpense}
                  />
                </label>
                <label className={s.lAmount}>
                  <div className={s.wrapperIcon}>
                    <input
                      placeholder="0.00"
                      type="text"
                      title="Используйте числовой формат"
                      pattern="^[0-9]+$"
                      minLength="1"
                      maxLength="10"
                      onChange={addData}
                      className={s.iAmount}
                      name="amount"
                      value={amount}
                      required
                    />
                    <button type="button" onClick={ontoggleCalc}>
                      <CalcIcon />
                    </button>
                    {isOpenCalc && (
                      <div className={s.modalCalc}>
                        <CalcWithEval
                          onCloseModal={ontoggleCalc}
                          addAmount={setAmount}
                          amount={amount}
                        />
                      </div>
                    )}
                  </div>
                </label>
              </div>
            </div>
            <div className={s.wrapperBtn}>
              <MyButton classCss="myAccentBtn" type="submite">
                Ввод
              </MyButton>
              <MyButton classCss="myMinorBtn" type="button" onClick={reset}>
                Очистить
              </MyButton>
            </div>
          </form>
        </>
      )}
      {viewPort.width < 768 && (
        <>
          <form onSubmit={onSubmiteForm} className={s.containerFormM}>
            <div className={s.wrapperFM}>
              <div className={s.wrapperInput}>
                <label className={s.lDescriptions}>
                  <input
                    type="text"
                    title="Разрешено использовать только пробелы и русские/латинские буквы, не менее 3 и не более 20"
                    pattern="^[A-Za-zА-Яа-яЁё\s]{3,20}"
                    onChange={addData}
                    className={s.iDescriptions}
                    name="description"
                    minLength="3"
                    maxLength="20"
                    value={description}
                    placeholder={
                      isExpense ? 'Описание товара' : 'Описание дохода'
                    }
                    required
                  />
                </label>
                <label className={s.lSelect}>
                  <div>
                    <SelectCategory
                      category={category}
                      allCategories={allCategory}
                      setCategory={setCategory}
                      isExpense={isExpense}
                    />
                  </div>
                </label>
                <label className={s.lAmount}>
                  <div className={s.wrapperInputA}>
                    <div className={s.wrapperIconMob}>
                      <input
                        placeholder="0.00"
                        type="text"
                        title="Используйте числовой формат"
                        pattern="^[0-9]+$"
                        minLength="1"
                        maxLength="10"
                        onChange={addData}
                        className={s.iAmount}
                        name="amount"
                        value={amount}
                        required
                      />
                      <button
                        type="button"
                        className={s.btnSvgWrap}
                        onClick={ontoggleCalc}
                      >
                        <CalcIcon />
                      </button>
                      {isOpenCalc && (
                        <div className={s.modalCalc}>
                          <CalcWithEval
                            onCloseModal={ontoggleCalc}
                            addAmount={setAmount}
                            amount={amount}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </label>
              </div>
              <div className={s.wrapperBtn}>
                <MyButton classCss="myAccentBtn" type="submite">
                  Ввод
                </MyButton>
                <MyButton classCss="myMinorBtn" type="button" onClick={reset}>
                  Очистить
                </MyButton>
              </div>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default AddDataForm;
