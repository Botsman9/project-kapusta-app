import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({ children, isActiv = false, ...props }) => {
  return (
    <button
      {...props}
      className={
        classes.myBtn +
        (isActiv ? `${classes.myActivBtn}` : `${classes.mySecondaryBtn}`)
      }
    >
      {children}
    </button>
  );
};

export default MyButton;
