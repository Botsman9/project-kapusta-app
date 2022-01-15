import React from 'react';
import classes from './MyTitle.module.css';

const MyTitle = ({ children, isActiv = false, ...props }) => {
  return (
    <h2 {...props} className={isActiv ? classes.myActTitle : classes.myBtn}>
      {children}
    </h2>
  );
};

export default MyTitle;
