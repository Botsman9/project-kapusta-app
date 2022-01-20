import React from 'react';
import { NavLink } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import { useSelector } from 'react-redux';
import userSelectors from '../../../../redux/user/userSelectors';
import s from './FormTransactionsNav.module.css';

const FormTransactionsNav = () => {
  const currentTransaction = useSelector(userSelectors.getCurrentTransaction);
  const isExpense = currentTransaction === 'expense';
  return (
    <div>
      <NavLink to="/mobile-add-trandaction" className={s.link}>
        {isExpense ? (
          <AddShoppingCartIcon sx={{ color: '#FF751D', fontSize: 20 }} />
        ) : (
          <PriceCheckIcon sx={{ color: '#FF751D', fontSize: 23 }} />
        )}
      </NavLink>
    </div>
  );
};

export default FormTransactionsNav;
