import React from 'react';

import s from './SectionTransactions.module.css';

const SectionTransactions = ({ children }) => {
  return <div className={s.section}>{children}</div>;
};

export default SectionTransactions;
