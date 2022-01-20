import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './FormTransactionsNav.module.css';

const FormTransactionsNav = () => {
  return (
    <div>
      <NavLink to="/mobile-add-trandaction" className={s.link}>
        Add
      </NavLink>
    </div>
  );
};

export default FormTransactionsNav;
