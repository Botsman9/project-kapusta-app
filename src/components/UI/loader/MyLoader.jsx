import React from 'react';
import clacces from './MyLoader.module.css';

const MyLoader = () => {
  return (
    <div className={clacces.containerLoader}>
      <div className={clacces.loader}></div>
    </div>
  );
};

export default MyLoader;
