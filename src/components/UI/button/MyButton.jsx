import React from 'react';
import PropTypes from 'prop-types';
import classes from './MyButton.module.css';

const MyButton = ({ children, classCss, ...props }) => {
  return (
    <button {...props} role={myBtn} className={classes[classCss]}>
      {children}
    </button>
  );
};

MyButton.propTypes = {
  classCss: PropTypes.string.isRequired,
};

export default MyButton;

/*
  classCss ?

  myAccentButton - orage;
  myMinorButton - black;
*/
