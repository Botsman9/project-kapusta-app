import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userSelectors from '../../../redux/user/userSelectors';
import { normalizeDateApi } from '../../../services/normalize';
import MyButton from '../../UI/button/MyButton';
import SelectCategory from './SelectCategory/SelectCategory';
import useWResize from '../../../hooks/useWResize';
import DatePickerForm from './DatePickerForm/DatePickerForm';
import * as userOperations from '../../../redux/user/userOperations';
import * as userActions from '../../../redux/user/userSlice';
import 'react-datepicker/dist/react-datepicker.css';
import s from './AddDataForm.module.css';
import { useNavigate } from 'react-router-dom';
import {
  getIsLoggedIn,
  getIsRefresh,
} from '../../../redux/auth/auth-selectors';

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
  const viewPort = useWResize();

  let navigate = useNavigate();

  let currentDay = datePicker;

  if (!datePicker) {
    currentDay = Date.now();
  }

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
          return setAmount('');
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
                  pattern="^[A-Za-zА-Яа-яЁё\s]+$"
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
                    minLength="1"
                    maxLength="10"
                    onChange={addData}
                    className={s.iAmount}
                    name="amount"
                    value={amount}
                    required
                  />
                  {/* <div>
                    <div className={s.calculatorIcon}>♥</div>
                  </div> */}
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
                      minLength="1"
                      maxLength="10"
                      onChange={addData}
                      className={s.iAmount}
                      name="amount"
                      value={amount}
                      required
                    />
                    {/* <div>
                      <div className={s.calculatorIcon}>♥</div>
                    </div> */}
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
                        minLength="1"
                        maxLength="10"
                        onChange={addData}
                        className={s.iAmount}
                        name="amount"
                        value={amount}
                        required
                      />
                    </div>
                    <div className={s.wrapperIcon}></div>
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

// <<<<<<< rootColors-fontFamily
//     <form onSubmit={onSubmiteForm} className={s.form}>
//       {datePicker && (
//         <DatePicker
//           wrapperClassName={s.datePicker}
//           className={s.formDate}
//           selected={datePicker}
//           dateFormat="dd.MM.y"
//           onChange={date =>
//             dispatch(userActions.changeCurrentDay(date.getTime()))
//           }
//         />
//       )}

//       <input
//         className={s.formDesc}
//         type="text"
//         onChange={addData}
//         name="description"
//         value={description}
//         placeholder="Описание товара"
//         required
//       />

//       <select
//         className={s.formCategory}
//         name="category"
//         value={category}
//         onChange={addData}
//         required
//       >
//         <option className={s.formText} value="">
//           Категория товара
//         </option>
//         {allCategory.map(value => (
//           <option className={s.formText} key={value} value={value}>
//             {value}
//           </option>
//         ))}
//       </select>
//       <input
//         className={s.formSum}
//         placeholder="0.00"
//         type="amount"
//         onChange={addData}
//         name="amount"
//         value={amount}
//         required
//       />

//       <MyButton
//         className={s.formBtn}
//         isActiv={true}
//         type="submit"
//         classCss={'myAccentBtn'}
//       >
//         Ввод
//       </MyButton>
//       <MyButton
//         className={s.formBtn}
//         type="button"
//         onClick={reset}
//         classCss={'myMinorBtn'}
//       >
//         Очистить
//       </MyButton>
//     </form>
// =======
