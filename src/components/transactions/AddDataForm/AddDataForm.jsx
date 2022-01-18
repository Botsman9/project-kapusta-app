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
    <form onSubmit={onSubmiteForm}>
      {datePicker && (
        <DatePicker
          selected={datePicker}
          dateFormat="dd.MM.y"
          onChange={date =>
            dispatch(userActions.changeCurrentDay(date.getTime()))
          }
        />
      )}

      <input
        type="text"
        onChange={addData}
        name="description"
        value={description}
        placeholder="Описание товара"
        required
      />

      <select name="category" value={category} onChange={addData} required>
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
        name="amount"
        value={amount}
        required
      />
      <MyButton isActiv={true} type="submite">
        Ввод
      </MyButton>
      <MyButton type="button" onClick={reset}>
        Очистить
      </MyButton>
    </form>
  );
};

export default AddDataForm;
