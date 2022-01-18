import React from 'react';
import PropTypes from 'prop-types';
import classes from './MyTitle.module.css';

const MyTitle = ({ children, classCss, ...props }) => {
  return (
    <h2 {...props} role={myTitle} className={classes[classCss]}>
      {children}
    </h2>
  );
};

MyTitle.propTypes = {
  classCss: PropTypes.string.isRequired,
};

export default MyTitle;

/*
  classCss ?

  myAccentTitle - orage;
  myMinorTitle - black;
*/
