import React from 'react';
import PropTypes from 'prop-types';
import classes from './MyTitle.module.css';

const MyTitle = ({ text, classCss }) => {
  return (
    <h2 role="myTitle" className={classes[classCss]}>
      {text}
    </h2>
  );
};

MyTitle.propTypes = {
  classCss: PropTypes.oneOf(['myAccentTitle', 'myMinorTitle']).isRequired,
  text: PropTypes.string.isRequired,
};

export default MyTitle;

/*
  classCss ?

  myAccentTitle - orage;
  myMinorTitle - black;
*/
