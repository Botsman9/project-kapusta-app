import React from 'react';

import s from './SectionTransactions.module.css';
import { PropTypes } from 'prop-types';

const SectionTransactions = ({ children }) => {
  return <div className={s.section}>{children}</div>;
};

SectionTransactions.propTypes = {
  children: PropTypes.node,
};

export default SectionTransactions;
