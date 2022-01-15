import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({ children, isActiv = false, ...props }) => {
  return (
    <button {...props} className={isActiv ? classes.myActivBtn : classes.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
