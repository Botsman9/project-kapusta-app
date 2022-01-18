import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import userSelectors from '../../../redux/user/userSelectors';
import * as userActions from '../../../redux/user/userSlice';
import MyButton from '../../UI/button/MyButton';
import { normalizeDateApi } from '../../../services/normalize';
import 'react-datepicker/dist/react-datepicker.css';
import s from './AddDataForm.module.css';

const AddDataForm = ({ allCategory, onAddDataApi }) => {
  const dispatch = useDispatch();

  const datePicker = useSelector(userSelectors.getCurrentDay);

  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const currentDay = Date.now();
    dispatch(userActions.changeCurrentDay(currentDay));
  }, [dispatch]);

  const addData = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'description':
        setDescription(value);
        return;
      case 'amount':
        setAmount(+value);
        return;
      case 'category':
        setCategory(value);
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
    onAddDataApi(newProduct);
  };

  return (
    <form onSubmit={onSubmiteForm} className={s.form}>
      <div className={s.wrapperDP}>
        {datePicker && (
          <DatePicker
            selected={datePicker}
            dateFormat="dd.MM.y"
            onChange={date =>
              dispatch(userActions.changeCurrentDay(date.getTime()))
            }
          />
        )}
      </div>
      <div className={s.wrapperInput}>
        <input
          type="text"
          onChange={addData}
          className={s.iDescriptions}
          name="description"
          value={description}
          placeholder="Описание товара"
          required
        />

        <select
          name="category"
          value={category}
          onChange={addData}
          className={s.selected}
          required
        >
          <option value="">Категория товара</option>
          {allCategory.map(value => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <input
          placeholder="0.00"
          type="amount"
          onChange={addData}
          className={s.iAmount}
          name="amount"
          value={amount}
          required
        />
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
  );
};

export default AddDataForm;
